import React, { useState } from 'react';
import '../login.css';
import {FaUser,FaKey,FaFacebookSquare,FaGoogle,FaEnvelope} from 'react-icons/fa';
import { LOGIN, SET_FIELD_VALUE, SET_FORM_TYPE } from '../constants/Appconstants';
import { useLoginDispatch, useLoginState } from '../context/LoginContext';
import { Auth } from 'aws-amplify';

const Signup = () => {

  return (
    <div className="form">
	<form className="form-horizontal signup">
		<div className="form-wrap" style={{position:"relative"}}>
		<h5 className="error-message">error message</h5> 
		  <h2>Sign Up</h2>
		  <div className="form-group">
			  <div className="relative">
				  <input className="form-control" id="email" name="email" type="text" required="" autoFocus="" title="" autoComplete="" placeholder="Email Address"/>
				  <i className="fa"><FaEnvelope/></i>
			  </div>
		  </div>
		  <div className="form-group">
			  <div className="relative">
				  <input className="form-control" id="name" name="userName" type="text" required="" autoFocus="" title="" autoComplete="" placeholder="Username"/>
				  <i className="fa fa-user"><FaUser/></i>
			  </div>
		  </div>
		  
		  <div className="form-group">
		  	<div className="relative">
			  	<input id="password" className="form-control" name="password" type="password" required="" placeholder="Password"/>
			  	<i className="fa fa-key"><FaKey/></i>
		  	</div>
		  </div> 
		  
		  <div className="form-group">
		  	<div className="relative">
			  	<input id="confirmPassword" className="form-control" name="confirmPassword" type="password" required="" placeholder="Confirm Password"/>
			  	<i className="fa fa-key"><FaKey/></i>
		  	</div>
		  </div> 
		              	
		  <div className="login-btn">
		  	<button className="movebtn movebtnsu" type="button">Submit</button>
		  	<div className="relative"><hr/><span className="login-text">or signup with</span></div>
		  	<div className="clearfix"></div>
		  	<div className="social-btn clearfix">
			  	<button className="movebtn google" type="Submit">Google <i className="fa fa-fw"><FaGoogle/></i></button>
			  	<button className="movebtn facebook" type="Submit">Facebook <i className="fa fa-fw"><FaFacebookSquare /></i></button>
			  </div>
		  </div>
		  
		</div>
		<div className="sign-up">
	  	<span className="signbtn"><small>Already member? Sign in </small></span>
	  </div>
	</form>
    </div>
  )
}

export default Signup