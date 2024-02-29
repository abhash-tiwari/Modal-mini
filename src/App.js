import React, { useState } from "react";
import "./App.css";

function App() {
  const [isModal, setIsModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target.elements.username.value;
    const email = e.target.elements.email.value;
    const phone = e.target.elements.phone.value;
    const dob = e.target.elements.dob.value;

    if (!username) {
      alert("Please fill in the username field");
      return;
    }
    if (!email) {
      alert("Please fill in the email field");
      return;
    }
    if (!phone) {
      alert("Please fill in the phone number field");
      return;
    }
    if (!dob) {
      alert("Please fill in the date of birth field");
      return;
    }
    if (!email.includes("@")) {
      alert(`Please include an '@' in the email address. ${email} is missing an '@'.`);
      return;
    }
    if (phone.length !== 10 || !/^\d+$/.test(phone)) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
      return;
    }

    const currentDate = new Date();
    const futureDate = new Date(dob);

    if (currentDate < futureDate) {
      alert("Invalid date of birth. Please enter a past date.");
      return;
    }

    setIsModal(false);
    e.target.reset();
  };
  const handleOpen = () => {
    setIsModal(true);
  };
  const handleClose = (e) => {
    if (e.target.classList.contains("modal")) {
      setIsModal(false);
    }
  };
  return (
    
        <div className="modal" onClick={handleClose}>
        <h1>User Details Modal</h1>
        <button className="form-btn" onClick={handleOpen}>
          Open Form
        </button>
        {isModal && (
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h1>Fill Details</h1>
            <form onSubmit={handleSubmit} className="form-data">
              <div className="form-detail">
                <label htmlFor="name">Username:</label>
                <input
                  className="input-data"
                  type="text"
                  id="username"
                  required
                />
              </div>
              <div className="form-detail">
                <label htmlFor="email">Email Address:</label>
                <input
                  className="input-data"
                  type="email"
                  id="email"
                  required
                />
              </div>
              <div className="form-detail">
                <label htmlFor="phonenumber">Phone Number:</label>
                <input className="input-data" id="phone" type="tel" required />
              </div>
              <div className="form-detail">
                <label htmlFor="date">Date of Birth:</label>
                <input className="input-data" id="dob" type="date" required />
              </div>

              <button className="submit-button" type="submit">
                Submit
              </button>
            </form>
          </div>
        )}
        </div>
   
  );
}

export default App;

