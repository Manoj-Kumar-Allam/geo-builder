import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";
import GeographicFilter from "./filters/GeographicFilter";
import GeographicResolution from "./filters/GeographicResolution";
import TemporalResolution from "./filters/TemporalResolution";
import TimePeriod from "./filters/TimePeriod";
import styles from "./Sidebar.module.css";

export const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      classes={{ paper: styles.drawer }}
    >
      <Toolbar />
      <List className={styles.list}>
        <Typography variant="h6" className={styles.heading}>
          Filters
        </Typography>

        <ListItem>
          <GeographicResolution />
        </ListItem>

        <ListItem>
          <GeographicFilter />
        </ListItem>

        <ListItem>
          <TemporalResolution />
        </ListItem>

        <ListItem>
          <TimePeriod />
        </ListItem>

        <Typography variant="h6" className={styles.heading}>
          Data Sources
        </Typography>

        <ListItem>
          <Paper className={styles.paper}>
            <List className={styles.subList}>
              <ListItem>
                <ListItemText primary="US Census" />
              </ListItem>
              <ListItem>
                <ListItemText primary="National Weather Service" />
              </ListItem>
              <ListItem>
                <ListItemText primary="US Census West" />
              </ListItem>
              <ListItem>
                <ListItemText primary="US Census North" />
              </ListItem>
            </List>
          </Paper>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
