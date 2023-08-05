import "./auth.styles.scss";
import { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";


const Auth = () => {
  return (
    <div className="auth">
      <Login />
      <Register />
    </div>
  );
};

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email,setEmail]=useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:3000/auth/register", {
        username,
        email,
        password,
      });
      alert("Registration completed successfully. Now login");
      setUsername("");
      setPassword("");
      setEmail("");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Form
      username={username}
      setUsername={setUsername}
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      label="Register"
      onSubmit={onSubmit}
      id_u="register-username"
      id_p="register-password"
      id_e="register-email"
    />
  );
};

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email,setEmail]=useState("");
  const [, setCookies] = useCookies(["access_token"]);

  const navigate = useNavigate();

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/auth/login", {
        username,
        email,
        password,
      });

      setCookies("access_token", response.data.token);
      window.localStorage.setItem("userId", response.data.userId);
      navigate("/info");
      setUsername("");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Form
      username={username}
      setUsername={setUsername}
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      label="Login"
      onSubmit={onSubmit}
      id_u="login-username"
      id_p="login-password"
      id_e="login-email"
    />
  );
};

const Form = ({
  username,
  setUsername,
  email,
  setEmail,
  password,
  setPassword,
  label,
  onSubmit,
  id_u,
  id_p,
  id_e
}) => {
  return (
    <div className="auth-container">
      <form onSubmit={onSubmit}>
        <h2>{label}</h2>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id={id_u}
            value={username}
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id={id_e}
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id={id_p}
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </div>
        <button type="submit" id="button">{label}</button>
      </form>
    </div>
  );
};

export default Auth;
