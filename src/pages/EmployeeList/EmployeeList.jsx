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
            {/* autres colonnes */}
          </tr>
        </thead>
        <tbody>
          {employees.map((emp, index) => (
            <tr key={index}>
              <td>{emp.firstName}</td>
              <td>{emp.lastName}</td>
              {/* autres données */}
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/">Home</Link>
    </main>
  );
}
