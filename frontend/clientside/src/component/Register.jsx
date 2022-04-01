import React from 'react'
import axios from "axios";
import {useState} from 'react'
import { NavLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

export default function Register() {
  const link= "http://localhost:4000/user";
  const link__login = "http://localhost:4000/user/login";
  let navigate = useNavigate();

  const [user, setUser] = useState({
    name:"",
    email:"",
    password:""

  })


  const handleOnchange = (e) =>{
    let name = e.target.name;
    let value = e.target.value;
    setUser({...user, [name]:value})

  }


const handleSubmit = async(e) =>{
  e.preventDefault()

  const {username, name, password} = user;
  // try{
  //   const res = await fetch('/user/signup', {
  //     method: "POST",
  //     headers:{
  //       "Content-Type":"application/json"
  //     },
  //     body : JSON.stringify({
  //       username, name, password
  //     })
  //   })
  //   console.log(res)
  //   if(res.status ===400 || !res){
  //     window.alert('already used details')
  //   }else{
  //     window.alert('user registered')
  //     navigate('/login')
  //   }

  // }catch(err){

  // }
  const newUser = {
    name:user.name,
    email: user.email,
    password:user.password
  }
  if(newUser){
    await axios.post(link, newUser);
  }


}



  return (
    <div>
      <div className="container shadow my-5">
        <div className="row ">
          <div className="col-md-5 form d-flex p-5 flex-column align-items-center  justify-content-center">
            <h1 className="text-white">Welcome Back</h1>
            <p className='fw-25 text-white'>Let Get You Registered</p>
            <h5 className="mb-4 text-white">OR</h5>
            <NavLink
              to="/login"
              className="btn btn-outline-light  rounded-pill pb-2 w-50"
            >
              Login
            </NavLink>
          </div>
          <div className="col-md-7 p-4">
            <h1 className="fw-bolder mb-4 text-center">Register</h1>
            <form onSubmit={handleSubmit} method="post">
            <div class="mb-3">
              <label for="exampleFormControlInput1" className="form-label mb-3">
                Username
              </label>
              <input
              name='name'
              value={user.name}
              onChange={handleOnchange}
                type="text"
                className="form-control mb-3"
                id="exampleFormControlInput1"
                placeholder="arnold12345"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" className="form-label mb-3">
                Email address
              </label>
              <input
              name='email'
              value={user.email}
              onChange={handleOnchange}
                type="email"
                className="form-control mb-3"
                id="exampleFormControlInput1"
                placeholder="arnoldgold@example.com"
              />
            </div>
           
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label mb-3">
                Password
              </label>
              <input
              onChange={handleOnchange}
              name='password'
              value={user.password}
                type="password"
                className="form-control mb-3"
                id="exampleFormControlInput1"
                placeholder="********"
              />
            </div>

            <button type="submit" className="btn btn-primary rounded-pill p-12">Register</button>
            </form>
           
            
          </div>
        </div>
      </div>
    </div>
  );
}
