import { useState } from "react";
import { useDispatch } from "react-redux";
import { addEmployee } from "../../store/employeeSlice";
import { Link } from "react-router-dom";
import Modal from "../../components/modal/modal";
import { TextField, MenuItem } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import dayjs from "dayjs";

import Dropdown from "../../components/Dropdown/Dropdown";
import usStates from "../../utils/usStates";
import departments from "../../utils/departments";

export default function CreateEmployee() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: null, // dayjs object
    startDate: null,
    street: "",
    city: "",
    state: "Alabama",
    zipCode: "",
    department: "Sales",
  });

  const dispatch = useDispatch();
  const [showConfirmation, setShowConfirmation] = useState(false);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  }

  function handleSave() {
    // Convertir les dates en string (format court) avant d’envoyer dans Redux
    const payload = {
      ...formData,
      dateOfBirth: formData.dateOfBirth?.format("DD/MM/YYYY") || "",
      startDate: formData.startDate?.format("DD/MM/YYYY") || "",
    };

    dispatch(addEmployee(payload));
    setShowConfirmation(true);

    // Réinitialiser le formulaire
    setFormData({
      firstName: "",
      lastName: "",
      dateOfBirth: null,
      startDate: null,
      street: "",
      city: "",
      state: "",
      zipCode: "",
      department: "Sales",
    });
  }
  function handleDropdownChange(field, value) {
    setFormData((prev) => ({ ...prev, [field]: value }));
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
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />

          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />

          <label>Date of Birth</label>
          <DatePicker
            value={formData.dateOfBirth}
            onChange={(newValue) =>
              setFormData({ ...formData, dateOfBirth: newValue })
            }
            format="DD/MM/YYYY"
            slotProps={{ textField: { fullWidth: true } }}
          />

          <label>Start Date</label>
          <DatePicker
            value={formData.startDate}
            onChange={(newValue) =>
              setFormData({ ...formData, startDate: newValue })
            }
            format="DD/MM/YYYY"
            slotProps={{ textField: { fullWidth: true } }}
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
            <Dropdown
              id="state"
              // label="State"
              value={formData.state}
              onChange={handleDropdownChange}
              options={usStates}
            />

            <label htmlFor="zipCode">Zip Code</label>
            <input
              id="zipCode"
              type="number"
              value={formData.zipCode}
              onChange={handleChange}
            />
          </fieldset>

          <label htmlFor="department">Department</label>
          <Dropdown
            id="department"
            // label="Department"
            value={formData.department}
            onChange={handleDropdownChange}
            options={departments}
          />
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
