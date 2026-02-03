// Netlify Serverless Function
// Ye backend API hai jo courses ka data bhejti hai

exports.handler = async () => {
  const courses = [
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
  ];

  return {
    statusCode: 200,
    body: JSON.stringify(courses),
  };
};
