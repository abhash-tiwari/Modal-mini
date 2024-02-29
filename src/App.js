import React, { useState } from 'react';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [dob, setDob] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      alert("Please fill out the email field.");
    } else if (!username) {
      alert("Please fill out the username field.");
    } else if (!dob) {
      alert("Please fill out the date of birth field.");
    } else if (!phone) {
      alert("Please fill out the phone number field.");
    } else if (!email.includes('@')) {
      alert("Invalid email. Please check your email address.");
    } else if (phone.length !== 10) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
    } else if (new Date(dob) > new Date()) {
      alert("Invalid date of birth. Please enter a past date.");
    } else {
      setShowModal(false);
    }
  };

  const closeModal = (e) => {
    if (e.target.className === "modal") {
      setShowModal(false);
    }
  }

  return (
    <div>
      <button onClick={() => setShowModal(true)}>Open Form</button>
      {showModal && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content">
            <form onSubmit={handleSubmit}>
              <label>
                Email:
                <input id="email" value={email} onChange={e => setEmail(e.target.value)} />
              </label>
              <label>
                Username:
                <input id="username" value={username} onChange={e => setUsername(e.target.value)} />
              </label>
              <label>
                Date of Birth:
                <input id="dob" type="date" value={dob} onChange={e => setDob(e.target.value)} />
              </label>
              <label>
                Phone Number:
                <input id="phone" value={phone} onChange={e => setPhone(e.target.value)} />
              </label>
              <button className="submit-button" type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
