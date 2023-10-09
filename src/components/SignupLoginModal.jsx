import React, { useState, useContext } from "react";
import Modal from "react-bootstrap/Modal";
import Google from "../images/search.png";
import { Button } from "react-bootstrap";
import DataContext from "../context/DataContext";

import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
} from "firebase/auth";

const googleProvider = new GoogleAuthProvider();

const SignupLoginModal = ({ modalIsOpen, closeModal }) => {
  const navigate = useNavigate();
  const [activeForm, setActiveForm] = useState("signup");
  const [value, setValue] = useState({});
  const [errText, setErrText] = useState("");
  const switchForm = (form) => {
    setActiveForm(form);
  };
  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
    // console.log(value);
  };
  const { setUser } = useContext(DataContext);
  const handleSignup = async (e) => {
    // TODO: Implement signup logic
    // closeModal();
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, value.email, value.password);
      console.log(auth.currentUser.providerData);
      setUser(auth.currentUser.providerData);
      navigate("/dashboard");
    } catch (err) {
      console.log(err);
      setErrText("Account already exists,please log-in");
    }
  };

  const handleLogin = async (e) => {
    // TODO: Implement login logic
    // closeModal();
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, value.email, value.password);
      console.log(auth.currentUser.providerData);
      setUser(auth.currentUser.providerData);
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      setErrText("Email/Password invalid");
    }
  };

  const HandleGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      console.log(auth.currentUser.providerData);
      // navigate("/dashboard");
      setUser(auth.currentUser.providerData);
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
    }
  };

  const renderForm = () => {
    switch (activeForm) {
      case "login":
        return (
          <form onSubmit={handleLogin}>
            <input
              type="email"
              className="form-input"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              required
            />
            <input
              type="password"
              className="form-input"
              name="password"
              onChange={handleChange}
              placeholder="Password"
              minLength="6"
              required
            />
            <button type="submit" className="form-submit">
              Log In
            </button>
          </form>
        );
      case "signup":
        return (
          <form onSubmit={handleSignup}>
            <input
              type="email"
              className="form-input"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              required
            />
            <input
              type="password"
              className="form-input"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              minLength="6"
              required
            />
            <button type="submit" className="form-submit">
              Sign Up
            </button>
          </form>
        );
      default:
        return null;
    }
  };
  const [log, setLog] = useState(false);
  return (
    <Modal show={modalIsOpen} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>Sign Up / Log In</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex justify-content-center gap-2">
          <button
            type="button"
            className={`btn ${log ? "btn-secondary" : "btn-primary"}`}
            onClick={() => {
              switchForm("signup");
              setLog(false);
            }}
          >
            Sign Up
          </button>
          <button
            type="button"
            className={`btn ${!log ? "btn-secondary" : "btn-primary"}`}
            onClick={() => {
              switchForm("login");
              setLog(true);
            }}
          >
            Log In
          </button>
        </div>
        <div className="form-container">{renderForm("login")}</div>
        <div>
          <p style={{ textAlign: "center", color: "red" }}>{errText}</p>
        </div>
        <div style={{ textAlign: "center" }}>
          <Button onClick={HandleGoogle}>
            <img
              src={Google}
              width={24}
              style={{ marginRight: "5px" }}
              alt=""
            />
            Sign-in with google
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default SignupLoginModal;
