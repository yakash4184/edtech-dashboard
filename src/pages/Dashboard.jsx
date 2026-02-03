import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="logo">EdTech</h2>
        <nav>
          <a className="active">Dashboard</a>
          <a>My Courses</a>
          <a>Assignments</a>
          <a>Profile</a>
          <a>Logout</a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main">
        
        {/* Header */}
        <header className="header">
          <h1>Student Dashboard</h1>
          <p>Welcome back, Akash 👋</p>
        </header>

        {/* Stats Cards */}
        <section className="stats">
          <div className="card">
            <h3>📚 Courses</h3>
            <p>6 Enrolled</p>
          </div>

          <div className="card">
            <h3>✅ Completed</h3>
            <p>3 Courses</p>
          </div>

          <div className="card">
            <h3>⏳ Pending</h3>
            <p>3 Courses</p>
          </div>
        </section>

        {/* Course List */}
        <section className="courses">
          <h2>My Courses</h2>

          <div className="course-list">
            <div className="course">
              <h4>React Basics</h4>
              <p>Progress: 60%</p>
            </div>

            <div className="course">
              <h4>JavaScript Mastery</h4>
              <p>Progress: 40%</p>
            </div>

            <div className="course">
              <h4>Web Development</h4>
              <p>Progress: 80%</p>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default Dashboard;
