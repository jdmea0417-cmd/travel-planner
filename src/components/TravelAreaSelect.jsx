import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Areas } from "../constants/areas.js";

export const TravelAreaSelect = ({ area, onChange }) => {
  const label = "지역";

  function handleSelectChange(event) {
    onChange(event.target.value);
  }

  return (
      <FormControl>
        <InputLabel>{label}</InputLabel>
        <Select variant={"outlined"} label={label} value={area} onChange={handleSelectChange}>
          {
            Areas.getAll().map((area, index) => (
                <MenuItem value={area.value} key={index}>{area.name}</MenuItem>
            ))
          }
        </Select>
      </FormControl>
  );
}