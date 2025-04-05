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
<div className="flex items-center justify-center min-h-screen bg-gray-100">
  <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
    <h1 className="text-3xl font-bold text-center mb-6 text-orange-500">Clerkly Login</h1>
    <form className="space-y-4">
      <div>
        <label className="block mb-1 text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          placeholder="dein@email.de"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
      </div>
      <div>
        <label className="block mb-1 text-sm font-medium text-gray-700">Passwort</label>
        <input
          type="password"
          placeholder="••••••••"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition"
      >
        Einloggen
      </button>
    </form>
  </div>
</div>
