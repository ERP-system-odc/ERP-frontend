import Head from "next/head";
import { useState, useEffect } from "react";
import Link from "next/link";
import Router from "next/router";
import { signinUser } from "../lib/auth";

const Signup = () => {
  const [signin, setSignin] = useState({
    fullname: "",
    email: "",
    phonenumber: "",
    password: "",
    confirmpassword: "",
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setSignin({ ...signin, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(signin);

    //const { signin }= signin;
    e.preventDefault();
    console.log(JSON.stringify({
        fullname: signin.fullname,
        email: signin.email,
        phonenumber: signin.phonenumber,
        password: signin.password,
        confirmpassword: signin.confirmpassword
      }))
    fetch("http://localhost:5001/api/auth/signup", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        fullname: signin.fullname,
        email: signin.email,
        phonenumber: signin.phonenumber,
        password: signin.password,
        confirmpassword: signin.confirmpassword
      })
    })
    .then(data => {
        //handle data
        console.log(data);
        
        if( data.statusText === "Bad Request"){
          alert("Incorrect Data")
        }
        else Router.push("/");
      })
      .catch(error => {
        //handle error
      });
      
      setSignin({
        fullname: "",
        email: "",
        phonenumber: "",
        password: "",
        confirmpassword: "",
      })
    //   .then((response) => response.json())
    //   .then((result) => {
    //     if (result.status === 200) {
    //       alert("You are logged in.");
    //     //   this.goToMain();
    //     } else if(result.status === 400){
    //         console.log(result)
    //       alert("Please check your login information.");
    //     }
    //   });
    //Pass(login)
    // signinUser(signin).then(()=>{
    //   Router.push('/profile')
    // })
  };

  return (
    <>
      <Head>
        <title>ERP System</title>
      </Head>
      <article >
        <form className="form" onSubmit={handleSubmit} style={{marginTop:"35px"}}>
          <h3>Create new account</h3>
          <div className="form-control">
            <label htmlFor="fullname">fullname : </label>
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
              required
              value={signin.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="phonenumber">phone : </label>
            <input
              type="number"
              id="phonenumber"
              name="phonenumber"
              required
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
              required
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
              required
              value={signin.confirmpassword}
              onChange={handleChange}
            />
          </div>
          <button type="Submit" className="btn">CREATE</button>
        </form>
      </article>
    </>
  );
};

export default Signup;
