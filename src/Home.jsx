
import EmployeeList from "./EmployeeList";

function Home({ handleLogout }) {

  return (
    <div className="dashboard">

      {/* Navbar */}

      <nav className="navbar">

        <div className="logo">
          <span>EMS</span>
          <h2>Employee Portal</h2>
        </div>

        <button
          className="logout-btn"
          onClick={handleLogout}
        >
          Logout
        </button>

      </nav>

      {/* Welcome Section */}

      <section className="welcome-section">

        <div>
          <p className="welcome-label">
            DASHBOARD OVERVIEW
          </p>

          <h1>Welcome to Home! 👋</h1>

          <p>
            Manage your employee information in one place.
          </p>
        </div>

        <div className="welcome-icon">
          📊
        </div>

      </section>

      {/* Employee List */}

      <EmployeeList />

      {/* Footer */}

      <footer>
        © 2026 Employee Management System. All Rights Reserved.
      </footer>

    </div>
  );
}

export default Home;
