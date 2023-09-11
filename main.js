const date = document.getElementById('day')

function displayLocalTime() {
            // Create a new Date object
            const now = new Date();

            // Extract the current time components
            const hours = now.getHours();
            const minutes = now.getMinutes();
            const seconds = now.getSeconds();

            // Format the time as a string
            const timeString = `${hours}:${minutes}:${seconds}`;

            // Display the time in an element with id "local-time"
            document.getElementById("time").textContent = timeString;
        }

        // Call the function to display the local time immediately and update it every second
        displayLocalTime();
        setInterval(displayLocalTime, 1000); // Update every second

let today
const new_date = new Date()
let current_date = new_date.getUTCDay()

switch (current_date) {
  case 0:
    today = "Sunday";
    break;
  case 1:
    today = "Monday";
    break;
  case 2:
    today = "Tuesday";
    break;
  case 3:
    today = "Wednesday";
    break;
  case 4:
    today = "Thursday";
    break;
  case 5:
    today = "Friday";
    break;
  case 6:
    today = "Saturday";
    break;
}
date.innerHTML = `${today}`