import { CssBaseline, Toolbar } from "@mui/material"
import { Box } from "@mui/system"
import MapLayer from "../map/MapLayer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

import styles from './UIContainer.module.css'

const UIContainer = () => {
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Navbar />
            <Sidebar />
            
            <Box component="main" className={styles.box} sx={{ flexGrow: 1}}>
                <Toolbar />
                <MapLayer />
            </Box>
        </Box>
    )
}

export default UIContainer;