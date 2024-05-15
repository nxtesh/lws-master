import React, { useState } from 'react';
import './Signup.css'; // Assuming you have a CSS file named style.css in the same directory
import { Link,useHistory } from 'react-router-dom';
import axios from 'axios'
const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'username':
        setUsername(value);
        break;
      case 'password':
        setPassword(value);
        break;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log({username,password})
    const result = await fetch("http://localhost:3001/user/signup",{
        method:"POST",
        headers: {
            "Content-Type": "application/json"
          },
        body: JSON.stringify({username,password})
    })
    const res = await result.json()
      if (res.status == 200) {
          axios
              .post("http://localhost:3001/authenticate", { username: username })
              .then((r) => console.log(r));


          alert("Signup successful you can login now")
          history.push("/auth/login")
    } else{
        alert("user already exists")

    }
    // console.log('Form submitted:', { username, password });
    // setUsername('');
    // setPassword('');
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <input
          type="text"
          name="username"
          placeholder="username"
          value={username}
          onChange={handleChange}
          required
        />
        
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handleChange}
          required
        />
        <button type="submit">Sign Up</button>
      <p class="login-navigate">Already have an Account?<Link to={"/auth/login"}>Login now</Link></p>
      </form>
    </div>
  );
};

export default Signup;
