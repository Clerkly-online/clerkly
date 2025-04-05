import React from "react";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const logout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">Willkommen bei Clerkly 🎉</h1>
      <p className="mt-2">Du bist eingeloggt.</p>
      <button onClick={logout} className="mt-6 bg-red-500 text-white py-2 px-4 rounded">
        Logout
      </button>
    </div>
  );
}
