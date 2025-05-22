// components/Dropdown.jsx
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

export default function Dropdown({ id, label, value, onChange, options }) {
  return (
    <FormControl fullWidth margin="normal">
      <InputLabel id={`${id}-label`}>{label}</InputLabel>
      <Select
        labelId={`${id}-label`}
        id={id}
        value={value}
        label={label}
        onChange={(e) => onChange(id, e.target.value)}
      >
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
