const featured_course = async () => {
  const featured_course_container = document.getElementById(
    "featured-course-container"
  );
  try {
    const response = await fetch("/course/featured_course/");
    if (!response.ok) {
      throw new Error("Response was not ok!");
    }
    const data = await response.json();
    const featured_courses = data.data;
    featured_courses.forEach((course) => {
      featured_course_container.innerHTML += `<tr>
          <td class='d-flex'> 
          <div class='img-container'>
          img
          </div>
          <div class='text-container'>
          text
          </div>
          </td>
          <td>${course.start}</td>
          <td>${course.rating}</td>
          <td>${course.type}</td>
          <td>${course.bookmark}</td>
        </tr>`;
    });
  } catch (error) {
    console.log(error);
  }
};

featured_course();
