import { useState } from "react";
import Register from "./page/Register.jsx";
function App() {
  const [count, setCount] = useState(0);

  // 638889 9DBC98 EBD9B4 F9EFDB

  return (
    <div className="w-screen h-screen bg-[#EBD9B4]">
      <h1 className=" text-center ">hey there</h1>
      <Register />
    </div>
  );
}

export default App;
