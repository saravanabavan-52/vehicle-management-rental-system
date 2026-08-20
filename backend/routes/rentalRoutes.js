const express = require("express");
const router = express.Router();

const {
  getRentals,
  getRental,
  createRental,
  updateRentalStatus,
  deleteRental,
  getMyBookings
} = require("../controllers/rentalController");

const auth = require("../middleware/auth");
const role = require("../middleware/role");

router.get("/", auth, getRentals);
router.get("/my-bookings", auth, getMyBookings);
router.get("/:id", auth, getRental);

router.post("/", auth, createRental);
router.put("/:id/status", auth, role("admin", "owner"), updateRentalStatus);
router.delete("/:id", auth, role("admin"), deleteRental);

module.exports = router;
// ...existing code...