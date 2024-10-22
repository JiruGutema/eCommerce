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
        {error && (
          <p className="error" aria-live="assertive">
            {error}
          </p>
        )}
        <div className="toggle">
          <button type="submit" id="submitButton" disabled={loading}>
            {loading ? "Loading..." : isLogin ? "Login" : "Sign Up"}
          </button>
          <p>
            Don't have an account?{" "}
            <button type="button" onClick={toggleForm}>
              {isLogin ? "Sign Up" : "Login"}
            </button>
          </p>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
