import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "firstName", headerName: "First Name", flex: 1 },
  { field: "lastName", headerName: "Last Name", flex: 1 },
  { field: "startDate", headerName: "Start Date", flex: 1 },
  { field: "department", headerName: "Department", flex: 1 },
  { field: "dateOfBirth", headerName: "Date of Birth", flex: 1 },
  { field: "street", headerName: "Street", flex: 1 },
  { field: "city", headerName: "City", flex: 1 },
  { field: "state", headerName: "State", flex: 1 },
  { field: "zipCode", headerName: "Zip Code", flex: 1 },
];

export default function EmployeeTable({ employees }) {
  const rows = employees.map((employee, index) => ({
    id: index, // requis par DataGrid
    ...employee,
  }));

  return (
    <div style={{ height: 600, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10, 25, 50]}
        autoHeight
        disableSelectionOnClick
      />
    </div>
  );
}
