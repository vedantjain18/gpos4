"use client";

import Image from "next/image";
import styles from "../../app/page.module.css";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";

function LoginPage() {
  function handleFormSubmit(event) {  
    event.preventDefault();
  }
  return (
    <div className={styles.page}>
      {/* <div className="login">
			<h1>Login</h1>
            <form id="loginForm" >
				<label htmlFor="username">
					<i className="fas fa-user"></i>
				</label>
				<input type="text" name="username" placeholder="Username" id="username" minLength="3" required />
				<label htmlFor="password">
					<i className="fas fa-lock"></i>
				</label>
				<br /> <br />
				<input type="password" name="password" placeholder="Password" id="password" required />
        
                <a href="./ForgotPassword.html" className="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Forgot Password</a>|
                <a href="./NewUserRegistraion.html" className="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">New User?</a>

				<div id="errors" className="error"></div>
                <div id="success" className="success"></div>

				<input type="submit" id="Login" value="Login" />
                
			</form>
		</div> */}
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={()=>console.log("Hhello")}>
        Submit
      </Button>
    </Form>
    </div>
  );
}
export default LoginPage