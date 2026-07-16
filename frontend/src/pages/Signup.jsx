import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = async (e) => {

        e.preventDefault();

        try {

            const response = await axios.post(

                "http://localhost:5000/api/auth/signup",

                {
                    name,
                    email,
                    password,
                }

            );

            alert(response.data.message);

            navigate("/login");

        }

        catch (err) {

            alert(

                err.response?.data?.message ||

                "Signup Failed"

            );

        }

    };

    return (

        <section className="auth-page">

            <h1>Signup</h1>

            <form onSubmit={handleSignup}>

                <input

                    type="text"

                    placeholder="Name"

                    value={name}

                    onChange={(e)=>setName(e.target.value)}

                />

                <input

                    type="email"

                    placeholder="Email"

                    value={email}

                    onChange={(e)=>setEmail(e.target.value)}

                />

                <input

                    type="password"

                    placeholder="Password"

                    value={password}

                    onChange={(e)=>setPassword(e.target.value)}

                />

                <button type="submit">

                    Signup

                </button>

            </form>

        </section>

    );

}

export default Signup;