import {
  Drawer,
  FormControl,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";

export const Sidebar = () => {
  const handleGeographicResolution = () => {};

  return (
    <Drawer
      sx={{
        width: "300px",
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: "300px",
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar />

      <Box sx={{ overflow: "auto" }}>
        <List>
          <Typography
            variant="h6"
            component="div"
            sx={{ fontWeight: "bold", padding: "1rem", display: "block" }}
          >
            Filters
          </Typography>

          <ListItem key="geograhic-resolution" sx={{ mb: 1 }}>
            <FormControl fullWidth>
              <TextField
                label="Geographic Resolution"
                select
                onChange={handleGeographicResolution}
              >
                <MenuItem value={"states"}>US States</MenuItem>
                <MenuItem value={"counties"}>US Counties</MenuItem>
              </TextField>
            </FormControl>
          </ListItem>

          <ListItem key="geograhic-filter" sx={{ mb: 1 }}>
            <FormControl fullWidth>
              <TextField label="Geographic Filter" select>
                {["Arizona", "Texas", "California"].map((county) => (
                  <MenuItem key={county} value={county}>
                    {county}
                  </MenuItem>
                ))}
              </TextField>
            </FormControl>
          </ListItem>

          <ListItem key="temporal-resoltuion" sx={{ mb: 1 }}>
            <FormControl fullWidth>
              <TextField label="Temporal Resoltuion" select>
                {["Daily", "Monthly", "Annual"].map((temporalResolution) => (
                  <MenuItem key={temporalResolution} value={temporalResolution}>
                    {temporalResolution}
                  </MenuItem>
                ))}
              </TextField>
            </FormControl>
          </ListItem>

          <ListItem key="time-peroid" sx={{ mb: 1 }}>
            <FormControl fullWidth>
              <TextField label="Time Period" select>
                {["2015", "2016", "2017"].map((timePeriod) => (
                  <MenuItem key={timePeriod} value={timePeriod}>
                    {timePeriod}
                  </MenuItem>
                ))}
              </TextField>
            </FormControl>
          </ListItem>

          <Typography
            variant="h6"
            component="div"
            sx={{
              fontWeight: "bold",
              padding: "1rem",
            }}
          >
            Data Sources
          </Typography>

          <Box
            sx={{
              backgroundColor: "primary.dark",
              padding: "1rem",
              width: "100%",
              marginTop: "-2rem",
            }}
          >
            <List>
              <ListItem>
                <ListItemText primary="US Census" />
              </ListItem>
              <ListItem>
                <ListItemText primary="National Weather Service" />
              </ListItem>
              <ListItem>
                <ListItemText primary="OpenStreetMap" />
              </ListItem>
            </List>
          </Box>
        </List>
      </Box>
    </Drawer>
  );
};
