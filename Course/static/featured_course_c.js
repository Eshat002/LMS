// const fetchData = async () => {
//     const StudentAnalytics = document.getElementById("student-analytics");
//     try {
//       const response = await fetch("/student/student-analytics/");
//       if (!response.ok) {
//         throw new Error("Response was not ok");
//       }
//       const data = await response.json();

//         const studentData = data.data;
//         studentData.forEach((student) => {

//         }

//      catch (error) {
//       console.log(error);
//     }
//   };

//   fetchData();

const fetchData = () => {
  const featured_course = document.getElementById("featured-course");
  try {
    const response = fetch("some-url");
    if (!response.ok) {
      throw new Error("Response was not ok!");
    }
    const data = response.json();
    const featured_courses = data.data;
    featured_courses.forEach((featured_course) => {
      console.log("f", featured_course);
    });
  } catch (error) {
    console.log(error);
  }
};
