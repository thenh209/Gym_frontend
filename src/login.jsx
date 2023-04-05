import React, { useState } from 'react';
import Modal from 'react-modal';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    // Send login request to server with username and password
  }

  return (
    <div id="loginform">
    <form onSubmit={handleSubmit}>
      <label class="label">
        Username:
        <input  class="input" type="text" style={{fontSize:"1em"}}value={username} onChange={e => setUsername(e.target.value)} />
      </label>
      <label class="label">
        <br></br><br></br>
        Password:
        <input  class="input" type="password" style={{fontSize:"1em"}} value={password} onChange={e => setPassword(e.target.value)} />
      </label>
      <br></br><br></br>
      <button id="loginbtn"type="submit" style={{fontSize:"0.75em",borderRadius:"5px",fontFamily:"Trebuchet MS"}} >Login</button>
    </form>
    </div>
  );
}

function LoginModal() {
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button class="abtn"onClick={openModal} style={{fontSize:"1em",borderRadius:"10px"}}>Login</button>
      <Modal isOpen={isOpen} onRequestClose={closeModal}>
        <LoginForm />
      </Modal>
    </div>
  );
}

export default LoginModal;
