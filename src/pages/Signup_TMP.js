import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import styles from './Signup.module.css';

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/"); // 👈 Das ist der magische Redirect!
    } catch (error) {
      console.error("Signup failed:", error.message);
      alert("Fehler: " + error.message);
    }
  };

  return (
    <div>
      <h2>Registrieren</h2>
      <form onSubmit={handleSignup}>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Passwort"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Registrieren</button>
      </form>
    </div>
  );
}

export default Signup;
