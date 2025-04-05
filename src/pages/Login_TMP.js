import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      alert("Login fehlgeschlagen: " + err.message);
    }
  };

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">Login</h1>
      <form onSubmit={login} className="flex flex-col gap-4 mt-4">
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="p-2 border" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Passwort" className="p-2 border" />
        <button type="submit" className="bg-orange-500 text-white py-2 px-4 rounded">Einloggen</button>
      </form>
    </div>
  );
}
