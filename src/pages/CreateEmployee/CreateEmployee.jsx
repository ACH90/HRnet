import { useCreateEmployeeForm } from "./useCreateEmployeeForm";
import styles from "./CreateEmployee.module.css";
import { Link } from "react-router-dom";
//-------------
import Modal from "@ach90/hrnet-modal";
import "@ach90/hrnet-modal/style.css";
//-------------
import DatePicker from "../../components/DatePicker/DatePicker";
import Dropdown from "../../components/Dropdown/Dropdown";
import Input from "../../components/Input/Input";
//import Dropdowns Selection
import usStates from "../../data/usStates";
import departments from "../../data/departments";

export default function CreateEmployee() {
  const {
    formData,
    handleChange,
    handleDropdownChange,
    handleDateChange,
    handleSave,
    showConfirmation,
    setShowConfirmation,
  } = useCreateEmployeeForm();

  return (
    <main>
      <header>
        <div className="title">
          <h1>HRnet</h1>
        </div>
        <h2>Create Employee</h2>
        <Link to="/employee-list" className={styles.link}>
          View Current Employees
        </Link>
      </header>
      <div className={styles.container}>
        <div className={styles.formContainer}>
          <form id="create-employee" onSubmit={handleSave}>
            <div className={styles.leftSide}>
              <div className={styles.Input}>
                <label htmlFor="firstName">First Name</label>
                <Input
                  type="text"
                  id="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.Inputs}>
                <label htmlFor="lastName">Last Name</label>
                <Input
                  type="text"
                  id="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.Inputs}>
                <label htmlFor="dateOfBirth">Date of Birth</label>
                <DatePicker
                  value={formData.dateOfBirth}
                  id="dateOfBirth"
                  onChange={(newValue) =>
                    handleDateChange("dateOfBirth", newValue)
                  }
                  format="DD/MM/YYYY"
                  slotProps={{ textField: { fullWidth: true } }}
                />
              </div>
              <div className={styles.Inputs}>
                <label htmlFor="startDate">Start Date</label>
                <DatePicker
                  id="startDate"
                  value={formData.startDate}
                  onChange={(newValue) =>
                    handleDateChange("startDate", newValue)
                  }
                  format="DD/MM/YYYY"
                  slotProps={{ textField: { fullWidth: true } }}
                />
              </div>
              <div>
                <label htmlFor="department">Department</label>
                <Dropdown
                  id="department"
                  value={formData.department}
                  onChange={handleDropdownChange}
                  options={departments}
                />
              </div>
            </div>
            <div className={styles.rightSide}>
              <fieldset className={styles.address}>
                <legend>Address</legend>

                <label htmlFor="street">Street</label>
                <Input
                  id="street"
                  type="text"
                  value={formData.street}
                  onChange={handleChange}
                />

                <label htmlFor="city">City</label>
                <Input
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
                <Input
                  id="zipCode"
                  type="number"
                  value={formData.zipCode}
                  onChange={handleChange}
                />
              </fieldset>
            </div>
          </form>
        </div>

        <button
          className={styles.saveButton}
          type="submit"
          form="create-employee"
        >
          Save
        </button>
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
