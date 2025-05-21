import React from "react";
import { useSelector } from "react-redux";
import EmployeeTable from "../../components/EmployeeTable/EmployeeTable";
import { Link } from "react-router-dom";
import styles from "./EmployeeList.module.css";

function EmployeeList() {
  const employees = useSelector((state) => state.employee.employees);

  return (
    <main style={{ padding: "2rem" }}>
      <div className={styles.header}>
        <h1>Current Employees</h1>
        <Link to="/">Home</Link>
      </div>
      <EmployeeTable employees={employees} />
    </main>
  );
}

export default EmployeeList;
