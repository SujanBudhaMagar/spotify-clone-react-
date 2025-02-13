// import React, { useState } from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   useNavigate,
// } from "react-router-dom";
// import LogIn from "./login";
// import Signup from "./signup";

// const Render = (buttonName) => {
//   const navigate = useNavigate();
//   const [activeButton, setActiveButton] = useState("");
//   setActiveButton(buttonName);
//   if (buttonName === "login") {
//     navigate("/login");
//   } else {
//     navigate("/signup");
//   }

//   return (
//     <Router>
//       <Routes>
//         <Route path="/login" element={<LogIn />} />
//       </Routes>

//       <Routes>
//         <Route path="/signup" element={<Signup />} />
//       </Routes>
//     </Router>
//   );
// };

// export default Render;
