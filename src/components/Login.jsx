import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Dashboard from "./dashboard"


const LoginPage = () => {
    const navigate = useNavigate();
    const [err,seterr]=useState("");
    const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
    const handleSubmit=(e)=>{
        e.preventDefault();

        if(email=="" || password==""){
seterr("please type your Credentials");
        }
        else{
            console.log(email,password);
        }

        if (email==="admin@medtrix.com" && password==="password") {
            alert("Login successful");
            navigate('/dashboard');

        }
        else{
          seterr("please enter valid Credentials");
        }

        
    }
  return (
    <div id="login-page">
      <h1 id="log-title">Login Page</h1>
      <div className="card">
        <div className="login_section">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/2e/Microsoft_Account_Logo.svg"
            alt="Microsoft Logo"
            style={{ width: "75px", height: "auto", margin: "20px" }}
          ></img>
          <h1 id="login-title">WELCOME BACK</h1>
          <p id="login-subtitle">Login to your account to continue</p>
          
          {err && <p className="error_message">{err}</p>}

          <form onSubmit={handleSubmit}>
            <label >Email</label>
            <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value);seterr("")}} placeholder="Email" autoComplete="off" />
            <label>Password</label>
            <input type="password"  value={password} onChange={(e)=>{setPassword(e.target.value);seterr("")}} placeholder="Password" autoComplete="new-password"/>
            <button type="submit" >Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
