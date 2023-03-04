import { useState, useContext, useRef} from 'react'
import { Context } from "../../context/Context";
import "./Login.css";
import { AxiosInstance } from '../../config.js';

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await AxiosInstance.post("/api/auth/login/", {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="login">
      <h1 className="">Admin login</h1>

      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="text"
          className="loginInput"
          placeholder="Enter your Email..."
          ref={emailRef}
        />

      <label>Password</label>
      <div className="password-input-wrapper">
        <input
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={handlePasswordChange}
          className="password-input"
          placeholder="Enter your password..."
          ref={passwordRef}
        />
        <span
          className="password-toggle-button"
          onClick={toggleShowPassword}
        >
          {showPassword ? <i class="fa-regular fa-eye-slash"></i> : <i class="fa-regular fa-eye"></i>}
        </span>
        
    </div>
    
        <button className="loginButton" type="submit" disabled={isFetching}>
          Login
        </button>
      </form>
      
      {/* <button className="registerButton">
        <Link className="link" to="/register">
          Register
        </Link>
      </button> */}
    </div>
  );
}
