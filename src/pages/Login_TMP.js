import React from "react";

function Login_TMP() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form className="bg-white p-6 rounded shadow-md space-y-4 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-orange-500">Login</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 border border-gray-300 rounded"
        />
        <input
          type="password"
          placeholder="Passwort"
          className="w-full px-4 py-2 border border-gray-300 rounded"
        />
        <button className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition">
          Einloggen
        </button>
      </form>
    </div>
  );
}

export default Login_TMP;
