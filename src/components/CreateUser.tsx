
import React, { useState } from 'react';

  const CreateUser = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e:any) => {
      e.preventDefault();
      const response = await fetch('https://fakestoreapi.com/users', {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
      });
      const data = await response.json();
      alert('User created successfully!');
    };

    return (
      <form onSubmit={handleSubmit}>
        <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" required />
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
        <button type="submit">Create Account</button>
      </form>
    );
  };

  export default CreateUser;
