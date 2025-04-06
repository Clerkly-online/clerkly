import React, { useState } from "react";
import styles from "./Signup.module.css";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    console.log("Registrieren mit:", email, password);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Signup</h2>
      <input
        className={styles.input}
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className={styles.input}
        type="password"
        placeholder="Passwort"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className={styles.button} onClick={handleSignup}>
        Registrieren
      </button>
    </div>
  );
}

export default Signup;
