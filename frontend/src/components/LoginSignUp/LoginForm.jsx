import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

import "./LoginForm.css";

function LoginForm({ onLoginSuccess }) {
  // Accept onLoginSuccess as a prop
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate(); // Initialize the navigate function

  const toggleForm = () => {
    setIsLogin((prevIsLogin) => !prevIsLogin);
    setError("");
    setSuccessMessage("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;

    // Simple validation (can be expanded)
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(
        `http://localhost:5000/${isLogin ? "login" : "signup"}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        }
      );

      if (!response.ok) {
        // Handle error responses for login/signup
        const errorMessage = await response.text();
        throw new Error(errorMessage);
      }

      const message = await response.text();
      setSuccessMessage(message);
      setError("");
      event.target.reset(); // Reset form fields

      // Redirect to home page on successful login/signup
      if (isLogin) {
        onLoginSuccess(); // Call the onLoginSuccess function
        navigate("/"); // Redirect to home page
      }
    } catch (error) {
      setError(error.message || "Username or password error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container" id="formContainer">
      <h2 id="formTitle">{isLogin ? "Login" : "Sign Up"}</h2>
      <form onSubmit={handleSubmit}>
        <div className="email">
          {" "}
          <label htmlFor="email">Email</label>
          <input
            type={isLogin ? "text" : "email"}
            name="username"
            placeholder={isLogin ? "Username" : "Email"}
            required
          />
        </div>
        <div className="password">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </div>

        {error && (
          <p className="error" style={{ color: "red" }} aria-live="assertive">
            {JSON.parse(error).message}
          </p>
        )}
        {successMessage && (
          <p className="error" style={{ color: "green" }} aria-live="assertive">
            Registeration Success
          </p>
        )}
        <div className="toggle">
          <button type="submit" id="submitButton" disabled={loading}>
            {loading ? "Loading..." : isLogin ? "Login" : "Sign Up"}
          </button>
          <p>
            {isLogin ? "Don't have " : "Have"} an account?{" "}
            <a
              className={isLogin ? "SignUP" : "Login"}
              type="button"
              onClick={toggleForm}
            >
              {isLogin ? "Sign Up" : "Login"}
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
