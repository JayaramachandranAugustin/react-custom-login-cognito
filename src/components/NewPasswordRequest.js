import React from 'react';
import { FaKey } from 'react-icons/fa';
import '../login.css';

const NewPasswordRequest = () => {


  return (
	<div className="form">
	<form className="form-horizontal signin">
		<div className="form-wrap" style={{position:"relative"}}>
		 <h5 className="error-message">error message</h5> 
		  <h2>Forgot Password</h2>
		  <div className="form-group">
		  	<div className="relative">
			  	<input className="form-control" name="authCode" type="password" required="" placeholder="AuthCode"/>
			  	<i className="fa"><FaKey/></i>
		  	</div>
		  </div> 

          <div className="form-group">
			  <div className="relative">
				  <input className="form-control" name="password" id="password" type="password" title=""  placeholder="New Password"/>
				  <i className="fa"><FaKey/></i>
			  </div>
		  </div>

          <div className="form-group">
			  <div className="relative">
				  <input className="form-control" name="confirmPassword" id="confirm-password" type="password" title=""  placeholder="Confirm Password"/>
				  <i className="fa"><FaKey/></i>
			  </div>
		  </div>
		              	
		  <div className="new-forgot-btn">
		  	<button className="movebtn movebtnsu" type="button">Submit new password</button>
		  </div>
		</div>
	</form>
</div>
  )
}

export default NewPasswordRequest