import React from "react";
import { AppBar, Toolbar, Typography, Stack, Button } from "@mui/material";

export default function MyNavMui() {
    return(
        <AppBar>
            <Toolbar>
                <Typography variant="h6" component='div' sx = {{ flexGrow: 1 }}>
                    My MUi Nvbar
                </Typography>

                <Stack direction='row' spacing={2}>
                    <Button color="inherit">Home</Button>
                    <Button color="inherit">About</Button>
                    <Button color="inherit">Contact</Button>
                </Stack>
            
            </Toolbar>
        </AppBar>
    )
}