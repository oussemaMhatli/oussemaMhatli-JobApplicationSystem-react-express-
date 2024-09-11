import React from 'react'
import Jobs from './Jobs'
import { Link, Navigate } from "react-router-dom";
import{AiOutlineLogout} from "react-icons/ai"
import{FaHome}from "react-icons/fa"
import{MdHomeRepairService}from "react-icons/md"
import{FaUser} from "react-icons/fa"
import { useNavigate } from 'react-router-dom' 
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import{logout} from "./../features/auth/authSlice"
function NavBar() {
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )

  const navigate = useNavigate()
  useEffect(() => {
    if (isError) {
      
    }

    if (! user) { 
       navigate('/Login')
    }

    
  }, [user, isError, isSuccess, message, navigate, dispatch])
  
  const logouta=()=>{
    dispatch(logout()
      )
  }
  return (
  <nav className="navbar navbar-expand-lg navbar-primary bg-primary" >
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
      <Link to="/">
              <span
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                title="Home"
              >
              </span>
              <span className="nav-link text-white">                <FaHome/>
 Home</span>
            </Link>      </li>
      <li className="nav-item">
      <Link to="/Jobs">
              <span
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                title="Jobs"
              >
                
              </span>
              <span className="nav-link text-white"><MdHomeRepairService/> MyJobs</span>
            </Link>
      </li>
      <li className="nav-item ">
      <Link to="/Profile">
              <span
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                title="Profile"
              >
                
              </span>
              <span className="nav-link text-white"><FaUser/>Profile</span>
            </Link>
      </li>
      
    
      
      
    </ul>
  </div>
  <ul className="navbar-nav">
  <li className="nav-item  my-2 my-sm-0">
      
              <span
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                title="Logout"
              >
               
              </span>
               <span className="nav-link text-white " onClick={logouta}> <AiOutlineLogout/>  Logout</span>
            
      </li>
  </ul>
</nav>

 
  )
}

export default NavBar
