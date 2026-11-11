
function EmployeeList() {

  // Array of Employee Objects

  const employees = [

    {
      id: 1,
      name: "Arun Kumar",
      email: "arun@gmail.com",
      age: 25,
      city: "Chennai",
      role: "Frontend Developer"
    },

    {
      id: 2,
      name: "Priya Sharma",
      email: "priya@gmail.com",
      age: 27,
      city: "Bangalore",
      role: "UI/UX Designer"
    },

    {
      id: 3,
      name: "Rahul Kumar",
      email: "rahul@gmail.com",
      age: 29,
      city: "Hyderabad",
      role: "Backend Developer"
    },

    {
      id: 4,
      name: "Sneha Reddy",
      email: "sneha@gmail.com",
      age: 24,
      city: "Coimbatore",
      role: "Software Tester"
    },

    {
      id: 5,
      name: "Vikram Singh",
      email: "vikram@gmail.com",
      age: 30,
      city: "Mumbai",
      role: "Project Manager"
    }

  ];

  return (

    <section className="employee-section">

      <div className="section-heading">

        <div>
          <p className="section-label">
            TEAM MANAGEMENT
          </p>

          <h2>Employee Directory</h2>

          <p>
            View all registered employee information.
          </p>
        </div>

        <div className="employee-count">
          {employees.length} Employees
        </div>

      </div>

      {/* List Rendering using map() */}

      <div className="employee-grid">

        {employees.map((employee) => (

          <div className="employee-card" key={employee.id}>

            <div className="employee-top">

              <div className="employee-avatar">
                {employee.name.charAt(0)}
              </div>

              <span className="employee-status">
                Active
              </span>

            </div>

            <h3>{employee.name}</h3>

            <p className="employee-role">
              {employee.role}
            </p>

            <div className="employee-details">

              <div>
                <span>Email</span>
                <p>{employee.email}</p>
              </div>

              <div className="detail-row">

                <div>
                  <span>Age</span>
                  <p>{employee.age} Years</p>
                </div>

                <div>
                  <span>City</span>
                  <p>{employee.city}</p>
                </div>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>

  );
}

export default EmployeeList;
