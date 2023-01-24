import React, { useState } from 'react';
import '../login.css';
import {FaEnvelope,FaKey,FaFacebookSquare,FaGoogle} from 'react-icons/fa';


const Login = () => {


  return (
	<>
	<div className="form">
	<form className="form-horizontal signin">
		<div className="form-wrap" style={{position:"relative"}}>
		<h5 className="error-message">error message</h5>
		  <h2>Login</h2>
		  <div className="form-group">
			  <div className="relative">
				  <input className="form-control" name="email" id="email" type="text" title=""  placeholder="Email"/>
				  <i className="fa"><FaEnvelope/></i>
			  </div>
		  </div>
		  
		  <div className="form-group">
		  	<div className="relative">
			  	<input className="form-control" name="password"type="password" required="" placeholder="Password"/>
			  	<i className="fa"><FaKey/></i>
		  	</div>
		  	<button type="button" className="forgot-password">Forgot Password?</button>
		  </div> 
		              	
		  <div className="login-btn">
		  	<button className="movebtn movebtnsu" type="button">Login</button>
		  	<div className="relative"><hr/><span className="login-text">or login with</span></div>
		  	<div className="clearfix"></div>
		  	<div className="social-btn clearfix">
			  	<button className="movebtn google" type="button">Google <i className="fa fa-fw"><FaGoogle/></i></button>
			  	<button className="movebtn facebook" type="button">Facebook <i className="fa fa-fw"><FaFacebookSquare/></i></button>
			  </div>
		  </div>
		  
		</div>
		<div className="sign-up">
	  	<span className="signbtn"><small>Not a member? Sign Up  </small></span>
	  </div>
	</form>
</div>

</>
  )
}

export default Login