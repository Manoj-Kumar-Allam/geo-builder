import { FormControl, MenuItem, TextField } from "@mui/material";

const TimePeriod: React.FC = () => {
  return (
    <FormControl fullWidth>
      <TextField label="Time Period" select>
        {["2015", "2016", "2017"].map((timePeriod) => (
          <MenuItem key={timePeriod} value={timePeriod}>
            {timePeriod}
          </MenuItem>
        ))}
      </TextField>
    </FormControl>
  );
};

export default TimePeriod;