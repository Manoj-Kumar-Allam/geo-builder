import { FormControl, MenuItem, TextField } from "@mui/material";

const GeographicFilter: React.FC = () => {
  return (
    <FormControl fullWidth>
      <TextField label="Geographic Filter" select>
        {["Arizona", "Texas", "California"].map((county) => (
          <MenuItem key={county} value={county}>
            {county}
          </MenuItem>
        ))}
      </TextField>
    </FormControl>
  );
};

export default GeographicFilter;
