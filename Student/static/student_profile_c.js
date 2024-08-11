const fetchStudentProfile = async () => {
  const studentProfileCard = document.getElementById("student-profile-card");
  try {
    const response = await fetch(
      "http://127.0.0.1:8000/student/student-profile-data/"
    );

    if (!response.ok) {
      throw new Error("response was not ok");
    }
    const data = await response.json();
    console.log("ds", data);
    const studentProfileData = data.data;
    studentProfileCard.innerHTML = `<div>
        <img src="${studentProfileData.profile_pic}" alt='profile-photo' />
        <h2 class='name'>@${studentProfileData.name}</h2>
        <p class='role' >${studentProfileData.role}</p>
      </div>`;
  } catch (error) {}
};
fetchStudentProfile();
