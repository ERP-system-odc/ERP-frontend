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
        console.log(data.credentials.fullname)
        const name=data.credentials.fullname;
        const phone=data.credentials.phonenumber;
        Router.push({
          pathname: '/profile',
          query: { name, phone}
      })
      })
      .catch(error => {
        //handle error
      });

      setLogin({ email: "", password: "" })
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
      <article className="frontPage" style={{marginRight:"0"}}>
        <div>
          <img src="frontpage.png"/>
        </div>
        <form className="form" style={{marginLeft:"0"}} onSubmit={handleSubmit} >
          <h2>ERP System</h2>
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
              required
              value={login.password}
              onChange={handleChange}
            />
          </div>
          <button type="Submit" className="btn">sign in</button>
          <p>Dont have an account <Link href="/signup">Sign Up</Link></p>
        </form>
      </article>
    </>
  );
};

export default index;