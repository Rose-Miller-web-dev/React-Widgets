import react from 'react'
import { AppBar, Toolbar, IconButton, Stack, Button, Typography } from '@mui/material'

export default function MuiNav() {
    return(
        <AppBar>
            <Toolbar className='bg-warning'>
                <Typography variant='h3' component='div' sx={{ flexGrow: 1 }}>
                    My MuiNavo
                </Typography>

                <Stack direction='row' spacing={2}>
                    <Button color='inherit'>Home</Button>
                    <Button color='inherit'>Contact</Button>
                    <Button color='inherit'>About</Button>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}