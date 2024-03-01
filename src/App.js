// import React, { useState, useRef } from "react";
// import "./App.css";

// function App() {
//   const [isModal, setIsModal] = useState(false);
//   const modalContentRef = useRef(null);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const username = e.target.elements.username.value;
//     const email = e.target.elements.email.value;
//     const phone = e.target.elements.phone.value;
//     const dob = e.target.elements.dob.value;

//     if (!username || !email || !phone || !dob) {
//       alert("Please fill in the field");
//       return;
//     }
//     if (!email.includes("@")) {
//       alert("Invalid email");
//       return;
//     }
//     if (phone.length !== 10 || !/^\d+$/.test(phone)) {
//       alert("Invalid phone number");
//       return;
//     }

//     const currentDate = new Date();
//     const futureDate = new Date(dob);

//     if (currentDate < futureDate) {
//       alert("Invalid date of birth");
//       return;
//     }

//     setIsModal(false);
//     e.target.reset();
//   };
//   const handleOpen = () => {
//     setIsModal(true);
//   };
//   const handleClose = (e) => {
//     // Check if modalContentRef.current is not null before calling contains
//     if (modalContentRef.current && !modalContentRef.current.contains(e.target)) {
//       setIsModal(false);
//     }
//   };
//   return (
    
//         <div className="modal" onClick={handleClose}>
//         <h1>User Details Modal</h1>
//         <button className="form-btn" onClick={handleOpen}>
//           Open Form
//         </button>
//         {isModal && (
//           <div className="modal-content" ref={modalContentRef}>
//             <h1>Fill Details</h1>
//             <form onSubmit={handleSubmit} className="form-data">
//               <div className="form-detail">
//                 <label htmlFor="name">Username:</label>
//                 <input
//                   className="input-data"
//                   type="text"
//                   id="username"
//                   required
//                 />
//               </div>
//               <div className="form-detail">
//                 <label htmlFor="email">Email Address:</label>
//                 <input
//                   className="input-data"
//                   type="email"
//                   id="email"
//                   required
//                 />
//               </div>
//               <div className="form-detail">
//                 <label htmlFor="phonenumber">Phone Number:</label>
//                 <input className="input-data" id="phone" type="tel" required />
//               </div>
//               <div className="form-detail">
//                 <label htmlFor="date">Date of Birth:</label>
//                 <input className="input-data" id="dob" type="date" required />
//               </div>

//               <button className="submit-button" onClick={handleClose}>
//                 Submit
//               </button>
//             </form>
//           </div>
//         )}
//         </div>
   
//   );
// }

// export default App;


import "./App.css";
import { useState } from "react";
import User from "./modal";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="App">
      <h1>User Details Modal</h1>
      <button onClick={openModal} className="submit-button">
        Open Form
      </button>
      {isOpen && <User closeModal={closeModal} />}
    </div>
  );
};

export default App;