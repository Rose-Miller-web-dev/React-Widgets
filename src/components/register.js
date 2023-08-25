import React, { useState } from "react";
import axios from "axios";

export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async () => {

        console.log(email, password)
        try {
        const response = await axios.post('/api/register', { email, password });
           alert('success')
        } catch (error) {
           alert('failure')
        }
    }

    return(
        <>
            <form>
                <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />

                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />

                <button onClick={handleRegister}>Register</button>
            </form>
        </>
    )
}