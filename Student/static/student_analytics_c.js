const fetchData = async () => {
  const StudentAnalytics = document.getElementById("student-analytics");
  try {
    const response = await fetch("/student/student-analytics/");
    if (!response.ok) {
      throw new Error("Response was not ok");
    }
    const data = await response.json();

    if (data.login === false) {
      StudentAnalytics.innerHTML = "Login First!";
    } else {
      const studentData = data.data;
      studentData.forEach((student) => {
        StudentAnalytics.innerHTML += `
          <div class="row">
            <div class="col-lg-6">
              <div style="background-color:#FEE05F" class="card-1">
                  <img
                  style="object-fit:cover;
                  width="130"
                  height="130"
                  src="${student.score_image}"
                  alt="student-analytics"
                />
                <h3 class='headline'>${student.score} AVERAGE SCORE </h3>
                <p class='sub-headline'>Better than ${student.better_than}% of students </p>
              </div>
            </div>
            <div class="col-lg-6">
              <div style="background-color:#FFFFFF" class="card-2">
                <div class="d-flex justify-content-between">
                  <div>
                    <h3 class='headline'>Student Analytics</h3>
                    <p class='sub-headline'>${student.type}</p>
                  </div>
                  <div class="svg-container">
                    <svg
                      width="42"
                      height="42"
                      viewBox="0 0 42 42"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M27.755 7.6825V33.9325C27.755 36.855 29.75 38.5 31.9375 38.5C33.9325 38.5 36.12 37.1175 36.12 33.9325V7.875C36.12 5.18 34.125 3.5 31.9375 3.5C29.75 3.5 27.755 5.355 27.755 7.6825ZM16.8175 21V33.9325C16.8175 36.8725 18.8475 38.5 21 38.5C22.995 38.5 25.1825 37.1175 25.1825 33.9325V21.1925C25.1825 18.4975 23.1875 16.8175 21 16.8175C18.8125 16.8175 16.8175 18.6725 16.8175 21ZM10.0625 30.1525C12.3725 30.1525 14.245 32.025 14.245 34.3175C14.245 35.4268 13.8044 36.4906 13.02 37.275C12.2356 38.0593 11.1718 38.5 10.0625 38.5C8.95324 38.5 7.8894 38.0593 7.10503 37.275C6.32066 36.4906 5.88 35.4268 5.88 34.3175C5.88 32.025 7.7525 30.1525 10.0625 30.1525Z"
                        fill="#FFC000"
                      />
                    </svg>
                  </div>
                </div>
                <div class="progress-container">
                  <svg
                    width="8"
                    height="8"
                    viewBox="0 0 8 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="4" cy="4" r="4" fill="#FFC000" />
                  </svg>
                  <span class='progress-title'>progress</span>
                  <div
                    class="progress"
                    role="progressbar"
                    aria-label="Progress"
                    aria-valuenow="${student.progress}"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div
                      class="progress-bar bg-warning progress-bar-striped"
                      style="width:${student.progress}%"
                    >
                      ${student.progress}%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>`;
      });
    }
  } catch (error) {
    console.log(error);
  }
};

fetchData();
