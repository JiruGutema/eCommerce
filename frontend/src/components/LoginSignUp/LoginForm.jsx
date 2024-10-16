import React, { useState } from "react";
import "./LoginForm.css";

function LoginForm() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin((prevIsLogin) => !prevIsLogin);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    const username = event.target.username.value;
    const password = event.target.password.value;
    alert(`Submitting: ${isLogin ? "Login" : "Signup"} for ${username}`);
    // Handle submission logic here
  };

  return (
    <div className="form-container" id="formContainer">
      <h2 id="formTitle">{isLogin ? "Login" : "Sign Up"}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type={isLogin ? "text" : "email"}
          name="username"
          placeholder={isLogin ? "Username" : "Email"}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <div className="toggle">
          <button type="submit" id="submitButton">
            {isLogin ? "Login" : "Sign Up"}
          </button>
          <p>
            Don't have an account?{" "}
            <button type="button" onClick={toggleForm}>
              Sign Up
            </button>
          </p>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
