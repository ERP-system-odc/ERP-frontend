import Head from "next/head";
import { useState, useEffect } from "react";
import Link from "next/link";
import Router from "next/router";
import { loginUser } from "../lib/auth";


const index = () => {
  const [login, setLogin] = useState({ username: "", email: "" });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setLogin({ ...login, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(login);

    const { username, email}= login;

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
              id="username"
              name="username"
              value={login.username}
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
              value={login.email}
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