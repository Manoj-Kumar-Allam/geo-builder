import { AppBar, Button, Stack, Toolbar, Typography } from "@mui/material"

export const Navbar = () => {
    return (
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <Toolbar>
                <Typography variant='h6' component='div' sx={{ flexGrow: 1}}>
                    EpiMoRPH Geo Builder
                </Typography>
                <Stack direction='row' spacing={2}>
                    <Button color='inherit'>Interactive Map</Button>
                    <Button color='inherit'>Data Sources</Button>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}