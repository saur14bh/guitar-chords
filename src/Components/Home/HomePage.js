// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./HomePage.css"
// import heroImage from './../Home/strinX.png';

// const HomePage = (props) => {
//   const [values, setValues] = useState({
//     name: "",
//     email: "",
//     pass: "",
//   });

//   const [errorMsg, setErrorMsg] = useState("");

//   return (
//     <div className="homepage-container">
//       <div>
//         <img className="hero-image" src={heroImage} alt="home" />
//         <div className="input-fields">
//         <input  className="input-field" placeholder="Email" type="email"/>
//         <input  className="input-field" placeholder="Mobile Number" type="number"/>
//         <input className="input-field"  placeholder="Password" type="password"/>
//         </div>
//       </div>
//         <button className="submit-btn">Submit</button>
//     </div>
//   );
// };

// export default HomePage;

import React from "react";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <div>
      <div>
        <h1>
          <Link to="/login">Login</Link>
        </h1>
        <br />
        <h1>
          <Link to="/signup">Signup</Link>
        </h1>
      </div>

      <br />
      <br />
      <br />

      <h2>{props.name ? `Welcome - ${props.name}` : "Login please"}</h2>
    </div>
  );
}

export default Home;
