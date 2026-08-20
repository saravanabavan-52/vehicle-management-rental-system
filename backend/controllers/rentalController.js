const Rental = require('../models/Rental');
const Vehicle = require('../models/Vehicle');

// Get all rentals (admin/manager see all, customer sees own)
exports.getRentals = async (req, res) => {
    try {
        let rentals;
        if (req.user.role === 'owner') {
            rentals = await Rental.find({ owner: req.user._id })
                .populate('vehicle')
                .populate('owner', 'name email');
        } else {
            rentals = await Rental.find()
                .populate('vehicle')
                .populate('customer', 'name email');
        }
        res.json(rentals);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get single rental
exports.getRental = async (req, res) => {
    try {
        const rental = await Rental.findById(req.params.id)
            .populate('vehicle')
            .populate('customer', 'name email');
        
        if (!rental) {
            return res.status(404).json({ message: 'Rental not found' });
        }

        // Check permissions
        if (req.user.role === 'customer' && rental.customer._id.toString() !== req.user._id.toString()) {
            return res.status(403).json({ message: 'Access denied' });
        }

        res.json(rental);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getMyBookings = async (req, res) => {
    try {
        const rentals = await Rental.find({
            customer: req.user._id
        })
        .populate("vehicle")
        .populate("customer", "name email");

        return res.status(200).json({
            success: true,
            rentals
        });

    } catch (error) {
        console.error("Get My Bookings Error:", error);

        return res.status(500).json({
            success: false,
            message: "Failed to get bookings"
        });
    }
};

// Create rental
exports.createRental = async (req, res) => {
    try {
        const { vehicle, startDate, endDate, pickupLocation, returnLocation, notes } = req.body;

        // Check if vehicle exists and is available
        const vehicleDoc = await Vehicle.findById(vehicle);
        if (!vehicleDoc) {
            return res.status(404).json({ message: 'Vehicle not found' });
        }
        if (!vehicleDoc.availability) {
            return res.status(400).json({ message: 'Vehicle is not available' });
        }

        // Calculate total days and cost
        const start = new Date(startDate);
        const end = new Date(endDate);
        const totalDays = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
        const totalCost = totalDays * vehicleDoc.dailyRate;

        // Create rental
        const rental = await Rental.create({
            customer: req.user._id,
            vehicle,
            startDate,
            endDate,
            totalDays,
            totalCost,
            pickupLocation,
            returnLocation,
            notes
        });

        // Update vehicle availability
        await Vehicle.findByIdAndUpdate(vehicle, { availability: false });

        res.status(201).json(rental);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update rental status (admin/manager only)
exports.updateRentalStatus = async (req, res) => {
    try {
        const { status } = req.body;
        const rental = await Rental.findByIdAndUpdate(
            req.params.id,
            { status },
            { new: true }
        ).populate('vehicle');

        if (!rental) {
            return res.status(404).json({ message: 'Rental not found' });
        }

        // If rental is completed or cancelled, make vehicle available
        if (status === 'completed' || status === 'cancelled') {
            await Vehicle.findByIdAndUpdate(rental.vehicle._id, { availability: true });
        }

        res.json(rental);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete rental (admin only)
exports.deleteRental = async (req, res) => {
    try {
        const rental = await Rental.findByIdAndDelete(req.params.id);
        if (!rental) {
            return res.status(404).json({ message: 'Rental not found' });
        }

        // Make vehicle available again
        await Vehicle.findByIdAndUpdate(rental.vehicle._id, { availability: true });

        res.json({ message: 'Rental deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};