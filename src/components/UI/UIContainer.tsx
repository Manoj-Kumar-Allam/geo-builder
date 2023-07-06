import { CssBaseline } from "@mui/material"
import { Box } from "@mui/system"
import { Navbar } from "./Navbar"
import { Sidebar } from "./Sidebar"

export const UIContainer = () => {
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Navbar />
            <Sidebar />
        </Box>
    )
}