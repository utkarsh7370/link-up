import userEvent from "@testing-library/user-event";
import react from "react";
import { useRef, useState, useEffect } from 'react';
import './Login.css';
import { Link } from "react-router-dom";


const Login = () => {

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form);
  };




  return (
    <>
      <div className="login">
        <h1 className="login__head">Welcome Back</h1>
        <form onSubmit={handleSubmit}>
          <div className="login__email">
            <label className="login__label">Email</label><br />
            <input className="login__input" type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
            ></input>
          </div>
          <div className="login__password">
            <label className="login__label">Password</label><br />
            <input className="login__input" type="password"
              name="password"
              value={form.password}
              onChange={handleChange}></input>
          </div>
          <button className="login__submit">Login</button>
          {/* <div className='reg-link' style={{ padding: "15px", marginLeft: "-10px" }}>
            <button className="btn"><Link className='link' to='/Register'>Register</Link></button>
          </div> */}
        </form>
      </div>
    </>

  )


}

export default Login