import React from 'react'
import { FaKey } from 'react-icons/fa';

const ConfirmSignUp = () => {

  return (
    <div className="form">
		<form className="form-horizontal signin">
			<div className="form-wrap" style={{position:"relative"}}>
		    <h5 className="error-message">Error Message</h5> 
			<h2>Enter the Authcode</h2>
			<div className="form-group">
				<div className="relative">
					<input className="form-control" name="authCode"id="authCode" type="password" placeholder="Auth Code"/>
					<i className="fa"><FaKey/></i>
				</div>
			</div>
							
			<div className="login-btn">
				<button className="movebtn movebtnsu" type="button" >Login</button>
			</div>
			</div>
			<div className="resend-authcode">
			<span className="signbtn"><small>Resend verification code</small></span>
		</div>
		</form>
	</div>
  )
}

export default ConfirmSignUp