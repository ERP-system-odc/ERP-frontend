import Head from "next/head";
import { useState, useEffect } from "react";
import Link from "next/link";
import Router from "next/router";
import { loginUser } from "../lib/auth";


const index = () => {
  const [login, setLogin] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setLogin({ ...login, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(login);

    const { email, password}= login;

    fetch("http://localhost:5001/api/auth/signin", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
       
        email: login.email,
        
        password: login.password
      
      })
    })
    .then((response) => response.json())
    .then(data => {
        //handle data
        console.log(data);
        console.log(data.phonenumber);
        Router.push('/profile')
      })
      .catch(error => {
        //handle error
      });
    //Pass(login)
    // loginUser(email, password).then(()=>{
    //   Router.push('/profile')
    // })
   
  };
  return (
    <>
      <Head>
        <title>ERP System</title>
        
      </Head>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="email">Email : </label>
            <input
              type="email"
              id="email"
              name="email"
              value={login.email}
              required
              minLength="4"
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="password">password : </label>
            <input
              type="password"
              id="password"
              name="password"
              value={login.password}
              onChange={handleChange}
            />
          </div>
          <button type="Submit">sign in</button>
        </form>
      </article>
    </>
  );
};

export default index;