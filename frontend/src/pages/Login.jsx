import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

function Login() {

    const navigate = useNavigate();

    const { login } = useAuth();

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {

        e.preventDefault();

        try {

            const response = await axios.post(

                "http://localhost:5000/api/auth/login",

                {
                    email,
                    password,
                }

            );

            login(

                response.data.user,

                response.data.token

            );

            alert("Login Successful");

            navigate("/dashboard");

        }

        catch (err) {

            alert(

                err.response?.data?.message ||

                "Login Failed"

            );

        }

    };

    return (

        <section className="auth-page">

            <h1>Login</h1>

            <form onSubmit={handleLogin}>

                <input

                    type="email"

                    placeholder="Email"

                    value={email}

                    onChange={(e) => setEmail(e.target.value)}

                />

                <input

                    type="password"

                    placeholder="Password"

                    value={password}

                    onChange={(e) => setPassword(e.target.value)}

                />

                <button type="submit">

                    Login

                </button>

            </form>

        </section>

    );

}

export default Login;