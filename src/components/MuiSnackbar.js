import { Button, Snackbar } from "@mui/material"
import React, { useState } from "react"

export default function MuiSnackbar() {

    const [open, setOpen] = useState(false)

    return(
        <div>
            <Button onClick={() => setOpen(true)}>Submit</Button>
            <div onClick={() => setOpen(false)} style={{width:'96vw', height: '96vh'}}>
            <Snackbar message='Firm founded successfully'
            open={open}
            autoHideDuration={4000} />
            </div>
            
        </div>
    )

}