import { FormControl, MenuItem, TextField } from "@mui/material";

const TemporalResolution: React.FC = () => {
  return (
    <FormControl fullWidth>
      <TextField label="Temporal Resolution" select>
        {["Daily", "Monthly", "Annual"].map((temporalResolution) => (
          <MenuItem key={temporalResolution} value={temporalResolution}>
            {temporalResolution}
          </MenuItem>
        ))}
      </TextField>
    </FormControl>
  );
};

export default TemporalResolution;
