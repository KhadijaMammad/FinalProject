import React from "react";
import {Formik, Field, Form, ErrorMessage} from "formik";
import * as Yup from "yup";
import axios from "axios";
import "../../assets/styles/signInUp/register.css";
import {Link, useNavigate} from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function Register() {
  const navigate = useNavigate();
  const registerSchema = Yup.object().shape({
    username: Yup.string()
      .min(3, "Username must be at least 3 characters")
      .max(30, "Username must be at most 30 characters")
      .required("Username is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
  });

  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const handleRegister = async (values) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/users/register",
        {
          email: values.email,
          password: values.password,
        }
      );
      localStorage.setItem("token", response.data.token);
      console.log("Registration successful", response.data);
      navigate("/login");
    } catch (error) {
      console.error("Registration failed", error);
    }
  };

  return (
    <>
      <div className="container">
        <div className="register-page">
          <div className="register-heading">
            <h2>Sign up</h2>
          </div>
          <div className="register-form">
            <Formik
              initialValues={initialValues}
              validationSchema={registerSchema}
              onSubmit={handleRegister}
            >
              <Form>
                <div className="form-group">
                  <Field
                    type="text"
                    id="username"
                    name="username"
                    className="form-control"
                    placeholder="username"
                  />
                  <ErrorMessage
                    name="username"
                    component="div"
                    className="error"
                  />
                </div>

                <div className="form-group">
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    placeholder="example@gmail.com"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="error"
                  />
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
                    Already have an account?{" "}
                    <Link to={"/login"} style={{textDecoration: "none"}}>
                      Log in
                    </Link>
                  </p>
                </div>
                <div className="submit">
                  <button type="submit" className="submit-btn">
                    <ArrowForwardIosIcon />
                  </button>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
}
