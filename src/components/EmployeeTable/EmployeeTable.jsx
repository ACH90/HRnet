// components/EmployeeTable.jsx
import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, TextField } from "@mui/material";
import { useSelector } from "react-redux";
import { useState } from "react";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "firstName", headerName: "First name", width: 150 },
  { field: "lastName", headerName: "Last name", width: 150 },
  { field: "startDate", headerName: "Start Date", width: 150 },
  { field: "department", headerName: "Department", width: 150 },
  { field: "dateOfBirth", headerName: "Date of Birth", width: 150 },
  { field: "street", headerName: "Street", width: 150 },
  { field: "city", headerName: "City", width: 100 },
  { field: "state", headerName: "State", width: 100 },
  { field: "zipCode", headerName: "Zip Code", width: 100 },
];

export default function EmployeeTable() {
  const employees = useSelector((state) => state.employee.employees);
  const [searchText, setSearchText] = useState("");
  const handleSearchChange = (e) => {
    setSearchText(e.target.value.toLowerCase());
  };

  // Filtrage global sur toutes les valeurs d'un employé
  const filteredRows = employees.filter((emp) =>
    Object.values(emp).some((val) =>
      String(val).toLowerCase().includes(searchText)
    )
  );
  return (
    <div style={{ height: 600, width: "100%" }}>
      <TextField
        label="Rechercher un employé"
        variant="outlined"
        // fullWidth
        margin="normal"
        onChange={handleSearchChange}
      />
      <DataGrid
        rows={filteredRows.map((emp, index) => ({ id: index, ...emp }))}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10, 25, 50]}
        disableSelectionOnClick
        autoHeight
      />
    </div>
  );
}
