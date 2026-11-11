
function Login({ handleLogin }) {

  return (
    <div className="login-container">

      <div className="login-card">

        <div className="login-icon">
          <span>👋</span>
        </div>

        <h1>Welcome Back!</h1>

        <p className="login-description">
          Login to access your employee dashboard.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
        >

          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              required
            />
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>

        </form>

        <p className="login-footer">
          Employee Management System
        </p>

      </div>

    </div>
  );
}

export default Login;
