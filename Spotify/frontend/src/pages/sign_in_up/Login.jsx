import React from "react";
import {Formik, Field, Form, ErrorMessage} from "formik";
import * as Yup from "yup";
import axios from "axios";
import "../../assets/styles/signInUp/login.css";
import {Link, useNavigate} from "react-router-dom";
import '../../assets/styles/signInUp/login.css'

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
      console.log("Login successful", response.data);
      navigate("/library");
    } catch (error) {
      console.error("Login failed", error.response?.data || error.message);
    }
  };

  return (
    <div className="container">
      <div className="login-page">
        <div className="login-heading">
          <h2>Log In</h2>
        </div>
        <div className="login-form">
          <Formik
            initialValues={initialValues}
            validationSchema={loginSchema}
            onSubmit={handleLogin}
          >
            <Form>
              <div className="form-group">
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
                <Field
                  type="password"
                  id="password"
                  name="password"
                  className="form-control"
                  placeholder="password"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="error"
                />
              </div>
              <div className="suggest">
                <p>
                  Haven't account?{" "}
                  <Link to={"/register"} style={{textDecoration: "none"}}>
                    Sign up
                  </Link>
                </p>
              </div>
              <div className="submit">
                <button type="submit" className="submit-btn-login">
                  Log in
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}
