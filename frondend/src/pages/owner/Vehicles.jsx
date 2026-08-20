import { useState } from "react";
import "./Vehicles.css";
import "./OwnerTables.css";

const initialVehicles = [
  {
    id: 1,
    type: "Bike",
    name: "Royal Enfield Classic",
    number: "TN 10 BK 1234",
    capacity: "2 Seats",
    status: "Active",
    image:
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 2,
    type: "Travels",
    name: "Tempo Traveller",
    number: "TN 11 TR 5678",
    capacity: "12 Seats",
    status: "Active",
    image:
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 3,
    type: "Bus",
    name: "Ashok Leyland Bus",
    number: "TN 12 BS 9012",
    capacity: "40 Seats",
    status: "Maintenance",
    image:
      "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=500&q=80",
  },
];

function Vehicles() {
  const [vehicles, setVehicles] = useState(initialVehicles);

  const [form, setForm] = useState({
    type: "Car",
    name: "",
    number: "",
    capacity: "",
    image: null,
  });

  const [preview, setPreview] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please select an image file.");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      alert("Image size should be less than 5MB.");
      return;
    }

    setForm((current) => ({
      ...current,
      image: file,
    }));

    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !form.name ||
      !form.number ||
      !form.capacity ||
      !form.image
    ) {
      alert("Please fill all fields and upload a vehicle image.");
      return;
    }

    const newVehicle = {
      id: Date.now(),
      type: form.type,
      name: form.name,
      number: form.number,
      capacity: `${form.capacity} Seats`,
      status: "Active",
      image: preview,
    };

    setVehicles((current) => [
      newVehicle,
      ...current,
    ]);

    setForm({
      type: "Car",
      name: "",
      number: "",
      capacity: "",
      image: null,
    });

    setPreview("");

    event.target.reset();
  };

  const handleDelete = (id) => {
    setVehicles((current) =>
      current.filter((vehicle) => vehicle.id !== id)
    );
  };

  return (
    <div className="owner-page owner-vehicles-page">

      <span className="owner-badge">
        VEHICLE MANAGEMENT
      </span>

      <h1 className="owner-title">
        My Vehicles
      </h1>

      <p className="owner-subtitle">
        Add and manage your rental vehicles with images,
        registration details, and availability status.
      </p>


      {/* ADD VEHICLE */}

      <div className="vehicle-upload-panel">

        <div className="vehicle-form-heading">
          <div>
            <h2>Add New Vehicle</h2>
            <p>
              Upload your vehicle image and enter the vehicle details.
            </p>
          </div>
        </div>


        <form onSubmit={handleSubmit}>

          <div className="vehicle-upload-grid">

            <label>
              Vehicle Type

              <select
                name="type"
                value={form.type}
                onChange={handleChange}
              >
                <option value="Car">Car</option>
                <option value="Bike">Bike</option>
                <option value="SUV">SUV</option>
                <option value="Travels">Travels</option>
                <option value="Van">Van</option>
                <option value="Bus">Bus</option>
                <option value="Truck">Truck</option>
              </select>

            </label>


            <label>
              Vehicle Name

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Example: Toyota Innova"
              />

            </label>


            <label>
              Registration Number

              <input
                type="text"
                name="number"
                value={form.number}
                onChange={handleChange}
                placeholder="Example: TN 32 AB 1234"
              />

            </label>


            <label>
              Seat Capacity

              <input
                type="number"
                name="capacity"
                value={form.capacity}
                onChange={handleChange}
                placeholder="Example: 7"
                min="1"
              />

            </label>


            {/* IMAGE UPLOAD */}

            <label className="vehicle-image-upload">
              Vehicle Image

              <input
                type="file"
                accept="image/png,image/jpeg,image/webp"
                onChange={handleImageChange}
              />

              <span>
                JPG, PNG or WEBP — Max 5MB
              </span>

            </label>


            {/* IMAGE PREVIEW */}

            {preview && (
              <div className="vehicle-image-preview">

                <img
                  src={preview}
                  alt="Vehicle preview"
                />

                <span>
                  Image Preview
                </span>

              </div>
            )}

          </div>


          <button
            type="submit"
            className="add-vehicle-btn"
          >
            + Add Vehicle
          </button>

        </form>

      </div>


      {/* VEHICLE LIST */}

      <div className="vehicle-list-header">

        <div>
          <h2>My Vehicle Fleet</h2>

          <p>
            {vehicles.length} vehicles registered
          </p>
        </div>

      </div>


      <div className="owner-table-wrap">

        <table className="owner-table">

          <thead>

            <tr>
              <th>Image</th>
              <th>Type</th>
              <th>Vehicle</th>
              <th>Number</th>
              <th>Capacity</th>
              <th>Status</th>
              <th>Action</th>
            </tr>

          </thead>

          <tbody>

            {vehicles.map((vehicle) => (

              <tr key={vehicle.id}>

                <td>

                  <img
                    className="vehicle-table-image"
                    src={vehicle.image}
                    alt={vehicle.name}
                  />

                </td>


                <td>
                  <span className="vehicle-type-badge">
                    {vehicle.type}
                  </span>
                </td>


                <td>

                  <strong>
                    {vehicle.name}
                  </strong>

                </td>


                <td>
                  {vehicle.number}
                </td>


                <td>
                  {vehicle.capacity}
                </td>


                <td>

                  <span
                    className={`owner-status owner-status--${vehicle.status.toLowerCase()}`}
                  >
                    {vehicle.status}
                  </span>

                </td>


                <td>

                  <button
                    type="button"
                    className="vehicle-delete-btn"
                    onClick={() =>
                      handleDelete(vehicle.id)
                    }
                  >
                    Delete
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Vehicles;