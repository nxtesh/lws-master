import React, { useState } from 'react';
import './Signup.css'; // Assuming you have a CSS file named style.css in the same directory
import { Link,useHistory } from 'react-router-dom';
import Cookies from 'js-cookie';
const Login = () => {
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
    const result = await fetch("http://localhost:3001/user/login",{
        method:"POST",
        headers: {
            "Content-Type": "application/json"
          },
        body: JSON.stringify({username,password})
    })
    const res = await result.json()
    if(res.status==200){
        alert(res.message)
        Cookies.set("username",username);
        history.push("/")
    } else{
        alert(res.message)

    }
    // console.log('Form submitted:', { username, password });
    // setUsername('');
    // setPassword('');
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
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
        <button type="submit">login</button>
      <p class="login-navigate">Dont have an Account?<Link to={"/auth/signup"}>Signup now</Link></p>
      </form>
    </div>
  );
};

export default Login;
