// import React from "react";
// import { BrowserRouter as Router, Route, Routes, Switch } from "react-router-dom";

// import "./App.css";

// import HomePage from "./Components/Home/HomePage";
// import LogIn from "./Components/Login/LogIn";
// import SignUp from "./Components/SignUp/SignUp";

// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <Routes>
//           <Route path="/login" element={<LogIn />} />
//           <Route path="/Signup" element={<SignUp />} />
//           <Route path="/home" element={<HomePage />} />
//           <Route path="*" element={<h1 style={{color: "White"}}>Error 404</h1>}/>
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;

import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Components/Home/HomePage";
import Login from "./Components/Login/LogIn";
import Signup from "./Components/SignUp/SignUp";

import { auth } from "./config";

import "./App.css";

function App() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home name={userName} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;