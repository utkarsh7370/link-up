import React from 'react'
import './Register.css'
import { useState } from "react";
import { Link } from 'react-router-dom';
import Login from '../Login/Login';
import regi from "../regi.jpg";



const Register = () => {
    const [form, setForm] = useState({
        email: "",
        password: "",
        name: "",
        confirmpassword: "",
        contanct: "",
    });

    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        window.location="/details";
        console.log(form);
    };
    return (

        <>
            <div className="register__container">
                <section>
                    <div className="register__leftdata" style={{ width: "100%" }}>
                        <div className="register__signimg">
                            <img src={regi} style={{ maxWidth: 400 }} alt="" />
                        </div>
                    </div>
                    <div className="register__rightdatacontainer">
                        <div className="register__appwrapper">
                            <div className='register__heading'>
                                <h1 className="register__titles">Sign Up</h1>

                                <h2 className="register__titles">
                                    <Link className='register__link' to='/Login'>Log In</Link></h2>

                            </div>
                            <form className='register__formwrapper' onSubmit={handleSubmit}>
                                <div className="register__name">
                                    <label className="register__label">Full Name</label><br />
                                    <input className="register__input"
                                        type="text"
                                        placeholder=""
                                        name="name"
                                        value={form.name}
                                        onChange={handleChange}></input>
                                </div>
                                <div className="register__email">
                                    <label className="register__label">Email</label><br />
                                    <input className="register__input"
                                        type="email"
                                        placeholder=""
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}></input>
                                </div>
                                <div className="register__contact">
                                    <label className="register__label">Contact</label><br />
                                    <input className="register__input"
                                        type="number"
                                        placeholder=""
                                        value={form.contanct}
                                        onChange={handleChange}></input>

                                </div>
                                <div className="register__password">
                                    <label className="register__label">Password</label><br />
                                    <input className="register__input"
                                        type="password"
                                        placeholder=""
                                        name="password"
                                        value={form.password}
                                        onChange={handleChange}></input>
                                </div>
                                <div className="register__confirmpassword">
                                    <label className="register__label">Confirm Password</label><br />
                                    <input className="register__input"
                                        type="password"
                                        placeholder=""
                                        name="password"
                                        value={form.password}
                                        onChange={handleChange}></input>
                                </div>
                                <button className="register__btn" type="submit">Submit</button>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )

}

export default Register