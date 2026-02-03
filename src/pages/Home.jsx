// import { useEffect, useState } from "react";
// import CourseCard from "../components/CourseCard";

// const Home = () => {
//   const [courses, setCourses] = useState([]);

//   // Backend API call (Netlify function)
//   useEffect(() => {
//     fetch("/.netlify/functions/courses")
//       .then(res => res.json())
//       .then(data => setCourses(data))
//       .catch(err => console.error(err));
//   }, []);

//   return (
//     <div className="p-6 bg-gray-50 min-h-screen">
//       <h2 className="text-2xl font-semibold mb-6">
//         Courses
//       </h2>

//       <div className="
//         grid grid-cols-1
//         sm:grid-cols-2
//         lg:grid-cols-3
//         gap-6
//       ">
//         {courses.map(course => (
//           <CourseCard key={course.id} course={course} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;

import { useEffect, useState } from "react";
import CourseCard from "../components/CourseCard";

const Home = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Local mock data (localhost ke liye)
    setCourses([
      {
        id: 1,
        title: "React Basics",
        desc: "Learn React from scratch with hands-on examples",
      },
      {
        id: 2,
        title: "JavaScript Mastery",
        desc: "Deep dive into modern JavaScript (ES6+)",
      },
      {
        id: 3,
        title: "Web Development",
        desc: "HTML, CSS, JavaScript complete course",
      },
    ]);
  }, []);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-semibold mb-6">
        Courses
      </h2>

      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-6
        "
      >
        {courses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Home;
