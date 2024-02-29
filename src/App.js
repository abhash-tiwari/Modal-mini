import React, { useState } from 'react';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [dob, setDob] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = () => {
    if (!email || !username || !dob || !phone) {
      alert("Please fill out all fields.");
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

  return (
    <div>
      <button onClick={() => setShowModal(true)}>Open Form</button>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
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
            <button className="submit-button" onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;