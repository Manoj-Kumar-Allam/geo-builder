import { AppBar, Button, Stack, Toolbar, Typography } from "@mui/material";
import styles from './Navbar.module.css'

const Navbar: React.FC = () => {
  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <a className={styles.url}
            href="https://www.epimorph.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            EpiMoRPH Geo Builder
          </a>
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button color="inherit">Interactive Map</Button>
          <Button color="inherit">Data Sources</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
