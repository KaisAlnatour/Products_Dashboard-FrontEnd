import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Header from "./Header";

function Register() {
    const [name, setName] = useState(false);
    const [email, setEmail] = useState(false);
    const [password, setPassword] = useState(false);
    const [c_password, setC_Password] = useState(false);

    const history = useHistory()

    useEffect(() => {
        if (localStorage.getItem('user-info'))
            history.push('/add')
    }, [])

    async function signUp() {
        let item = { name, email, password, c_password }
        // console.warn(item)

        let result = await fetch("http://127.0.0.1:8000/api/register", {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            }
        })
        result = await result.json()
        // console.warn("user-test-test2", result)
        localStorage.setItem('user-info', JSON.stringify(result))
        history.push("/add")
    }

    return (
        <>
            <Header />

            <div className="col-sm-6 offset-sm-3">
                <h1> Register Page </h1>
                <input type="text" onChange={(e) => setName(e.target.value)} className="form-control" placeholder="name" />
                <br />
                <input type="text" onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="email" />
                <br />
                <input type="password" onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="password" />
                <br />
                <input type="password" onChange={(e) => setC_Password(e.target.value)} className="form-control" placeholder="c_password" />
                <br />
                <button onClick={signUp} className="btn btn-primary"> Sign Up </button>
            </div>
        </>
    );
}

export default Register;