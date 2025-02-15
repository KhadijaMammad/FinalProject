import React from 'react'
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import '../../assets/styles/signInUp/login.css'
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
  });

  const initialValues = {
    email: "",
    password: "",
  };

  const handleLogin = async (values) => {
    try {
      const response = await axios.post("http://localhost:3000/users/login", {
        email: values.email,
        password: values.password,
      });
      localStorage.setItem("token", response.data.token);
      console.log("Login successful", response.data)
      navigate("/home");
    } catch (error) {
      console.error("Login failed", error.response?.data || error.message);
    }
  };

  return (
    <div className="container">
      <div className="login-page">
        <div className="login-heading">
          <h1>Welcome back!</h1>
          <p>Login to your account</p>
        </div>
        <div className="login-form">
          <Formik
            initialValues={initialValues}
            validationSchema={loginSchema}
            onSubmit={handleLogin}
          >
            <Form>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  placeholder="example@gmail.com"
                />
                <ErrorMessage name="email" component="div" className="error" />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  className="form-control"
                  placeholder="******"
                />
                <ErrorMessage name="password" component="div" className="error" />
              </div>

              <div className="submit">
                <button type="submit" className="submit-btn">Log in</button>
              </div>
            </Form>
          </Formik>
        </div>
        <div className="redirect-to-register">
          <p style={{color:'white'}}>
            Don't have an account?{" "}
            <span className="register-link" onClick={() => navigate("/")} style={{color:'white'}}>
              Sign up here
            </span>
          </p>
        </div>
      </div>
    </div>
  );
  
}
