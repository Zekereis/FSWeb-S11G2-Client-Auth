import React ,{useState}from "react";
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "./utils";

const Login = () => {
    const [credentials,setCredentials] = useState({username: "TechinTech",password:"r2D2"});
    let history = useHistory();

    const handleLogin = e =>{
        e.preventDefault();
        axiosWithAuth().post('api/login',credentials)
        .then(res => {
            localStorage.setItem("token", res.data.token);
            history.push("/friends");
        })
        .catch(err=> console.log(err))
    }
    const handleChange = e => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value,
        })
    }
    return (
        <div>
            <form onSubmit={handleLogin}>
                <label htmlFor="username">USERNAME</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={credentials.username}
                    onChange={handleChange}
                />
                <label htmlFor="password">PASSWORD</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={credentials.password}
                    onChange={handleChange}
                />
                <button>SUBMIT</button>
            </form>
        </div>
    )
}

export default Login;