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

// import React from "react";

// import heroImage from './../Home/strinx1.png';

// import styles from "./HomePage.css";

// function Home() {
//   return (
//       <div className={styles.container}>
//         <div className="bgImage">
//         </div>
    
//           <img className="image" src={heroImage} alt="home" />

//       <h1>Welcome to Guitar Chord Recognition </h1>
    
//   </div>
//   );
// }

// export default Home;

import React from "react";
import heroImage from './../Home/strinX.png';
import styles from "./HomePage.css";

function Home() {
  return (
    <div className={styles.container}>
      <div className="bgImage">
      <div className={styles.innerBox}>
        <img className={styles.image} src={heroImage} alt="home" />
        <h1 style={{ color: 'white'}}>Welcome to Guitar Chord Recognition </h1>
      </div>
    </div>
    </div>
  );
}

export default Home;

