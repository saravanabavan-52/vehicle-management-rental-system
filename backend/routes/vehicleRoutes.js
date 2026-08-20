const express = require('express');
const {
    getVehicles,
    getVehicle,
    createVehicle,
    updateVehicle,
    deleteVehicle,
    getAvailableVehicles
} = require('../controllers/vehicleController');
const auth = require('../middleware/auth');
const role = require('../middleware/role');

const router = express.Router();

router.get('/', getVehicles);
router.get('/available', getAvailableVehicles);
router.get('/:id', getVehicle);

router.post('/', auth, role('admin', 'manager'), createVehicle);
router.put('/:id', auth, role('admin', 'manager'), updateVehicle);
router.delete('/:id', auth, role('admin', 'manager'), deleteVehicle);

module.exports = router;