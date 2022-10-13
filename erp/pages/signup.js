import Head from "next/head";
import { useState, useEffect } from "react";
import Link from "next/link";
import Router from "next/router";
import { loginUser } from "../lib/auth";

const Signup = () => {
  const [signin, setSignin] = useState({
    fullname: "",
    email: "",
    phonenumber: "",
    role: "",
    password: "",
    confirmpassword: ""
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setSignin({ ...login, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(signin);

    const { username, email}= signin;

    //Pass(login)
    loginUser(username, email).then(()=>{
      Router.push('/profile')
    })
   
  };

  return (
    <>
      <Head>
        <title>ERP System</title>
        
      </Head>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="firstName">username : </label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              value={signin.username}
              required
              minLength="4"
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">email : </label>
            <input
              type="email"
              id="email"
              name="email"
              value={signin.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="phonenumber">email : </label>
            <input
              type="number"
              id="phonenumber"
              name="phonenumber"
              value={signin.phonenumber}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="password">Password : </label>
            <input
              type="password"
              id="password"
              name="password"
              value={signin.password}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="confirmpassword">Confirm Password : </label>
            <input
              type="password"
              id="confirmpassword"
              name="confirmpassword"
              value={signin.confirmpassword}
              onChange={handleChange}
            />
          </div>
          <button type="Submit">sign in</button>
        </form>
      </article>
    </>
  );
};

export default Signup;
