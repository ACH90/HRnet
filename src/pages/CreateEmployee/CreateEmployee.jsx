import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import styles from "./CreateEmployee.module.css";

//Import reducers
import { addEmployee } from "../../store/employeeSlice";

//-------------
import Modal from "@ach90/hrnet-modal";
import "@ach90/hrnet-modal/style.css";

//-------------
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Dropdown from "../../components/Dropdown/Dropdown";

//import Dropdown Selection
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
      state: "Alabama",
      zipCode: "",
      department: "Sales",
    });
  }
  function handleDropdownChange(field, value) {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }

  return (
    <main>
      <header>
        <div className="title">
          <h1>HRnet</h1>
        </div>
        <Link to="/employee-list">View Current Employees</Link>
        <h2>Create Employee</h2>
      </header>
      <div className={styles.container}>
        <div className={styles.formContainer}>
          <form id="create-employee" onSubmit={(e) => e.preventDefault()}>
            <div className={styles.leftSide}>
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
              <label htmlFor="department">Department</label>
              <Dropdown
                id="department"
                value={formData.department}
                onChange={handleDropdownChange}
                options={departments}
              />
            </div>
            <div className={styles.rightSide}>
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
            </div>
          </form>
        </div>

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
