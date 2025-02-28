import React, { useState } from 'react';

function Login({ onLogin, error }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    onLogin(email, password);
    setEmail('');
    setPassword('');
  };

  return (
    <div className="flex  justify-center items-center h-screen  bg-zinc-600">
      <div
        className={`border-2 rounded-md bg-[#0000008a] w-[400px] h-[380px] pt-5 
        ${error ? 'border-red-500' : 'border-green-500'}`}
      >
        <h1 className="text-3xl mb-10 font-bold text-center text-green-500">Login</h1>
        <form onSubmit={onSubmit} className="flex justify-center items-center flex-col gap-5">
          <input
            value={email}
            onChange={handleEmailChange}
            className="text-[18px] outline-none p-2 border-2 bg-transparent w-[70%] rounded-md border-green-500 text-white"
            type="text"
            required
            placeholder="Enter email"
          />
          <input
            value={password}
            onChange={handlePasswordChange}
            className="text-[18px] outline-none p-2 border-2 bg-transparent w-[70%] rounded-md border-green-500 text-white"
            type="password" 
            required
            placeholder="Enter password"
          />
          <button
            className="text-[20px] outline-none w-[70%] p-2 border-2 rounded-md border-green-500 text-white hover:bg-green-500 hover:text-black transition"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
