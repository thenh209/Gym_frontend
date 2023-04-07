import React, { useState } from 'react';
import Modal from 'react-modal';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleLoginSubmit(event) {
    event.preventDefault();
    // Send login request to server with username and password
  }

  return (
    <div id="loginform">
      <form onSubmit={handleLoginSubmit}>
        <label className="label">
          Username:
          <input className="input" type="text" style={{ fontSize: '1em' }} value={username} onChange={e => setUsername(e.target.value)} />
        </label>
        <br /><br />
        <label className="label">
          Password:
          <input className="input" type="password" style={{ fontSize: '1em' }} value={password} onChange={e => setPassword(e.target.value)} />
        </label>
        <br /><br />
        <button id="loginbtn" type="submit" style={{ fontSize: '0.75em', borderRadius: '5px', fontFamily: 'Trebuchet MS' }}>Login</button>
      </form>
    </div>
  );
}

function SignUpForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  function handleSignUpSubmit(event) {
    event.preventDefault();
    // Send sign up request to server with username and password
  }

  return (
    <div id="signupform">
      <form onSubmit={handleSignUpSubmit}>
        <label className="label">
          <div style={{textAlign:"center",fontSize:"2em"}}>Username:</div>
          <input className="input" type="text" style={{ fontSize: '2em' }} value={username} onChange={e => setUsername(e.target.value)} />
        </label>
        <br /><br /><br></br>
        <label className="label">
        <div style={{textAlign:"center",fontSize:"2em"}}>Password:</div>
          <input className="input" type="password" style={{ fontSize: '2em' }} value={password} onChange={e => setPassword(e.target.value)} />
        </label>
        <br /><br /><br></br>
        <label className="label">
        <div style={{textAlign:"center",fontSize:"2em"}}>Confirm Password:</div>
          <input className="input" type="password" style={{ fontSize: '2em' }} value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
        </label>
        <br /><br /><br></br>
        <button id="signupbtn" type="submit" style={{ fontSize: '1.3em', borderRadius: '5px', fontFamily: 'Trebuchet MS',marginLeft:"150px"}}>Sign Up</button>
      </form>
    </div>
  );
}

function LoginModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(true);

  function openModal() {
    setIsOpen(true);
    setIsLoginOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function handleToggleClick() {
    setIsLoginOpen(!isLoginOpen);
  }

  return (
    <div>
      <button className="abtn" onClick={openModal} style={{ fontSize: '1em', borderRadius: '10px' }}>Login</button>
      <Modal isOpen={isOpen} onRequestClose={closeModal} style={{ content: { width: '400px', margin: 'auto', borderRadius: '10px' } }}>
        {isLoginOpen ? <LoginForm /> : <SignUpForm />}
        <br /><br />
         <button id="togglebtn" onClick={handleToggleClick} style={{ fontSize: '1.3em', borderRadius: '5px', fontFamily: 'Trebuchet MS'}}>
           {isLoginOpen ? 'Sign Up' : 'Login'}
         </button>
       </Modal>
     </div>
   );
 }
 export default LoginModal;