import "./Dashboard.css";
import reactImg from "../assets/react.png";
import jsImg from "../assets/js.png";
import webImg from "../assets/web.png";

export default function Dashboard() {
  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>EdTech</h2>
        <ul>
          <li className="active">Dashboard</li>
          <li>My Courses</li>
          <li>Assignments</li>
          <li>Profile</li>
          <li className="logout">Logout</li>
        </ul>
      </aside>

      {/* Main */}
      <main className="content">
        <h1>Student Dashboard 👋</h1>
        <p className="welcome">Welcome back, Akash</p>

        {/* Stats */}
        <div className="stats">
          <div className="card">📘 Courses <span>6</span></div>
          <div className="card">✅ Completed <span>3</span></div>
          <div className="card">⏳ Pending <span>3</span></div>
        </div>

        {/* Courses */}
        <h2>My Courses</h2>
        <div className="courses">
          <Course img={reactImg} title="React Basics" progress="60" />
          <Course img={jsImg} title="JavaScript Mastery" progress="40" />
          <Course img={webImg} title="Web Development" progress="80" />
        </div>

        {/* Testimonials */}
        <h2>What Students Say</h2>
        <div className="testimonials">
          <div className="testimonial">
            ⭐⭐⭐⭐⭐  
            <p>“This platform changed my career!”</p>
            <strong>— Rahul</strong>
          </div>
          <div className="testimonial">
            ⭐⭐⭐⭐☆  
            <p>“Very practical & easy to learn.”</p>
            <strong>— Neha</strong>
          </div>
        </div>
      </main>
    </div>
  );
}

function Course({ img, title, progress }) {
  return (
    <div className="course-card">
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <div className="progress">
        <div style={{ width: `${progress}%` }}></div>
      </div>
      <span>{progress}% Completed</span>
    </div>
  );
}
