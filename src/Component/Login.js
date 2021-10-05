import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Header from "./Header";

function Login() {

    const [email, setEmail] = useState(false)
    const [password, setPassword] = useState(false)
    const history = useHistory()

    useEffect(() => {
        if (localStorage.getItem('user-info'))
            history.push('/add')
    }, [])

    async function Login() {
        let item = { email, password }

        let result = await fetch("http://127.0.0.1:8000/api/login", {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            }
        })
        // console.warn(result)
        result = await result.json()
        localStorage.setItem("user-info", JSON.stringify(result))
        history.push('/add')
    }

    return (
        <div>
            <Header />
            <h1> Login page </h1>
            <div className="col-sm-6 offset-sm-3">
                <input type="text" placeholder="email" onChange={(e) => setEmail(e.target.value)} className="form-control" />
                <br />
                <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} className="form-control" />
                <br />
                <button onClick={Login} className="btn btn-primary" > Login </button>
                <br />
            </div>
        </div>
    );

}
export default Login;