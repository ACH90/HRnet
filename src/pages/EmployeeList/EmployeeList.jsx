import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function EmployeeList() {
  const employees = useSelector((state) => state.employee.employees);

  return (
    <main>
      <h1>Current Employees</h1>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Date of Birth</th>
            <th>Start Date</th>
            <th>Street</th>
            <th>City</th>
            <th>State</th>
            <th>Zip Code</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp, index) => (
            <tr key={index}>
              <td>{emp.firstName}</td>
              <td>{emp.lastName}</td>
              <td>{emp.dateOfBirth}</td>
              <td>{emp.startDate}</td>
              <td>{emp.street}</td>
              <td>{emp.city}</td>
              <td>{emp.state}</td>
              <td>{emp.zipCode}</td>
              <td>{emp.department}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/">Home</Link>
    </main>
  );
}
