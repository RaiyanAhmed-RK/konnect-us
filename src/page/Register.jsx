import React, { useState } from "react";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="block m-auto w-80">
      <h2 className="text-4xl text-center mb-4 text-[#638889]">Register</h2>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        placeholder="Username"
        className="block w-full p-2 w-full mb-2 rounded-md bg-white text-black monospace border"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
        className="block w-full p-2 mb-2 rounded-md "
      />
      <button className="block w-full p-2">Register</button>
    </div>
  );
};

export default Register;
