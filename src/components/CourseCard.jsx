const CourseCard = ({ course }) => {
  return (
    <div className="
      bg-white
      rounded-2xl
      p-6
      shadow-md
      hover:shadow-xl
      hover:-translate-y-1
      transition
    ">
      <h3 className="text-xl font-semibold text-gray-800">
        {course.title}
      </h3>

      <p className="text-gray-500 text-sm mt-2">
        {course.desc}
      </p>

      <button
        className="
          mt-5
          w-full
          py-2
          rounded-xl
          bg-gradient-to-r
          from-blue-500
          to-indigo-600
          text-white
          font-medium
          hover:opacity-90
        "
      >
        Enroll Now
      </button>
    </div>
  );
};

export default CourseCard;
