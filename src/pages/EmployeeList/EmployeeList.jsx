import React from "react";
import { useSelector } from "react-redux";
import EmployeeTable from "../../components/EmployeeTable/EmployeeTable";
import { Link } from "react-router-dom";

function EmployeeList() {
  const employees = useSelector((state) => state.employee.employees);

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Current Employees</h1>
      <EmployeeTable employees={employees} />
      <Link to="/">Home</Link>
    </main>
  );
}

export default EmployeeList;
