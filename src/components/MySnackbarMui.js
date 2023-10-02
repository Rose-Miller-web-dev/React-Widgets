import { Snackbar } from "@mui/material";
import React from "react";
import { useState } from "react";

export default function MySnackbarMui() {

    const [open , setOpen] = useState(false)

    return(
        <>
            <button 
            onClick={() => setOpen(true)}
            className="btn btn-info">Login</button>

            <div
            style={{width: '95vw', height: '95vh'}}
            onClick={() => setOpen(false)}>

            <Snackbar message='you logged in!' 
            open={open}
            autoHideDuration={2000}
            />
            </div>

           
        </>
    )

}