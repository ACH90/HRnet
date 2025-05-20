import { useState } from "react";
import { useDispatch } from "react-redux";
import { addEmployee } from "../../store/employeeSlice";
import { Link } from "react-router-dom";
import Modal from "../../components/modal/modal";

export default function CreateEmployee() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    startDate: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    department: "Sales",
  });

  const dispatch = useDispatch();
  const [showConfirmation, setShowConfirmation] = useState(false);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  }

  function handleSave() {
    dispatch(addEmployee(formData));
    console.log("Save cliqué", formData);
    setShowConfirmation(true);
    setFormData({
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      startDate: "",
      street: "",
      city: "",
      state: "",
      zipCode: "",
      department: "Sales",
    });
  }

  return (
    <main>
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <Link to="/employee-list">View Current Employees</Link>
        <h2>Create Employee</h2>
        <form id="create-employee" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />

          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />

          <label htmlFor="date-of-birth">Date of Birth</label>
          <input
            type="text"
            id="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
          />

          <label htmlFor="start-date">Start Date</label>
          <input
            type="text"
            id="startDate"
            value={formData.startDate}
            onChange={handleChange}
          />

          <fieldset className="address">
            <legend>Address</legend>

            <label htmlFor="street">Street</label>
            <input
              id="street"
              type="text"
              value={formData.street}
              onChange={handleChange}
            />

            <label htmlFor="city">City</label>
            <input
              id="city"
              type="text"
              value={formData.city}
              onChange={handleChange}
            />

            <label htmlFor="state">State</label>
            <input
              id="state"
              type="text"
              value={formData.state}
              onChange={handleChange}
            />

            <label htmlFor="zip-code">Zip Code</label>
            <input
              id="zipCode"
              type="number"
              value={formData.zipCode}
              onChange={handleChange}
            />
          </fieldset>

          <label htmlFor="department">Department</label>
          <select
            id="department"
            value={formData.department}
            onChange={handleChange}
          >
            <option>Sales</option>
            <option>Marketing</option>
            <option>Engineering</option>
            <option>Human Resources</option>
            <option>Legal</option>
          </select>
        </form>

        <button onClick={handleSave}>Save</button>
      </div>

      {showConfirmation && (
        <Modal
          isOpen={showConfirmation}
          onClose={() => setShowConfirmation(false)}
        >
          <p>Employee Created!</p>
        </Modal>
      )}
    </main>
  );
}
