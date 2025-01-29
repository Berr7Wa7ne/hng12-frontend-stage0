// Function to update UTC time
function updateTime() {
    const utcTimeElement = document.getElementById("utc-time");
    const now = new Date();
    const utcTime = now.toUTCString().split(" ")[4]; // Extract HH:MM:SS format
    utcTimeElement.textContent = `UTC Time: ${utcTime}`;
  }
  
  // Update time every second
  setInterval(updateTime, 1000);
  
  // Call the function once to avoid delay
  updateTime();
  