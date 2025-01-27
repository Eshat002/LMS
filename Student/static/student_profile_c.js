const fetchStudentProfile = async () => {
  const studentProfileCard = document.getElementById("student-profile-card");
  const ReminderContainer = document.getElementById("reminder-container");

  try {
    const response = await fetch(
      "http://127.0.0.1:8000/student/student-profile-data/"
    );

    if (!response.ok) {
      throw new Error("response was not ok");
    }
    const data = await response.json();
    const studentProfileData = data.data;
    studentProfileCard.innerHTML = `<div>
        <img src="${studentProfileData.profile_pic}" alt='profile-photo' />
        <h2 class='name'>@${studentProfileData.name}</h2>
        <p class='role' >${studentProfileData.role}</p>
      </div>`;

    studentProfileData.reminders.forEach((reminder) => {
      ReminderContainer.innerHTML += `<div class='single-reminder'>
        <div class='icon-container'>
        <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect opacity="0.2" x="0.699951" y="0.633362" width="45.6667" height="45.6667" rx="12" fill="#FF993A"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.4939 28.6595C16.3021 28.4677 16.2062 28.201 16.2299 27.9306L16.5761 24.122C16.6144 23.7046 16.7989 23.311 17.0967 23.0132L25.313 14.7969C25.9542 14.153 27.1169 14.185 27.7936 14.8599L30.2943 17.3606L30.2953 17.3615C30.994 18.0611 31.0223 19.1736 30.3574 19.8403L22.1401 28.0576C21.8433 28.3544 21.4496 28.5389 21.0313 28.5773L17.2227 28.9234C17.1953 28.9252 17.1679 28.9262 17.1396 28.9262C16.8994 28.9262 16.6665 28.8312 16.4939 28.6595ZM27.2036 20.413L24.7422 17.9515L26.5214 16.1715L28.9819 18.632L27.2036 20.413ZM20.866 26.757L18.147 27.0045L18.3881 24.3047L23.5183 19.1745L25.9807 21.6378L20.866 26.757ZM29.9263 32.5795C30.4286 32.5795 30.8396 32.1685 30.8396 31.6662C30.8396 31.1647 30.4286 30.7528 29.9263 30.7528H17.1396C16.6382 30.7528 16.2263 31.1647 16.2263 31.6662C16.2263 32.1685 16.6382 32.5795 17.1396 32.5795H29.9263Z" fill="#FF993A"/>
        </svg>
        </div>
        <div class='mt-3'>
          <h5 class='title'>${reminder.title}</h5>
          <p class='time'>${reminder.time}</p>
        </div>
        </div>`;
    });
  } catch (error) {}
};
fetchStudentProfile();
