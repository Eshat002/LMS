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
          <td class="d-flex gap-3 course-name-box">
            <div class="img-container">
              <img
                style="object-fit:cover;"
                width="50"
                height="50"
                src="${course.cover}"
                alt="course-cover"
                class="border rounded"
              />
            </div>
            <div class="text-container">
              <h4>${course.name}</h4>
              <h6>${course.creator} </h6>
            </div>
          </td>
          <td class="course-start-box">${course.start}</td>
          <td class="course-rating-box px-4">
            <svg
              style="margin-top:-3px"
              width="24"
              height="22"
              viewBox="0 0 24 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z"
                fill="#FFC000"
              />
            </svg>
            ${course.rating}
          </td>
          <td class="course-type-box">
            <button>${course.type}</button>
          </td>
          <td style="cursor:pointer" class="text-center">
            <svg
              width="19"
              height="25"
              viewBox="0 0 19 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.75 23.6942V2.34375C0.75 1.46353 1.46353 0.75 2.34375 0.75H16.4062C17.2865 0.75 18 1.46353 18 2.34375V23.6942L9.7529 18.8834L9.375 18.663L8.9971 18.8834L0.75 23.6942Z"
                stroke="black"
                stroke-opacity="0.5"
                stroke-width="1.5"
              />
            </svg>
          </td>
        </tr>`;
    });
  } catch (error) {
    console.log(error);
  }
};

featured_course();
