"use client";

function LoginPage() {
  function handleFormSubmit(event) {  
    event.preventDefault();
  }
  return (
    <div className="container">
      <div className="login">
			<h1 className="text-center">Login</h1>
        {/* <form id="loginForm" >
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
			  </form> */}

        <form className="card" style={{ padding: "2rem 10rem" }}>
          <div className="form-group">
            <label htmlFor="username">User Name</label>
            <input type="text" name="username" id="username" minLength="3" required className="form-control" aria-describedby="usernameHelp" />
            <small id="usernameHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" className="form-control" id="password" />
          </div>
          <div className="my-2">
            <a href="./ForgotPassword.html" className="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Forgot Password</a>|
            <a href="./NewUserRegistraion.html" className="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">New User?</a>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
}
export default LoginPage