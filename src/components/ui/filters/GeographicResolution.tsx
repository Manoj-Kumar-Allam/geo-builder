import { MenuItem, FormControl, TextField} from "@mui/material";
import React from "react";

const GeographicResolution: React.FC = () => {
  const handleGeographicResolution = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    console.log(event.target.value);
    // Perform actions based on the selected value
  };

  return (
    <FormControl fullWidth>
      <TextField
        label="Geographic Resolution"
        select
        onChange={handleGeographicResolution}
      >
        <MenuItem value="states">US States</MenuItem>
        <MenuItem value="counties">US Counties</MenuItem>
      </TextField>
    </FormControl>
  );
};

export default GeographicResolution;
