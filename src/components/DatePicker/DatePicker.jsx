import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TextField } from "@mui/material";

export default function MyDatePicker({ label, value, onChange }) {
  return (
    <DatePicker
      label={label}
      value={value}
      onChange={onChange}
      format="DD/MM/YYYY"
      slotProps={{ textField: { fullWidth: true } }}
    />
  );
}
