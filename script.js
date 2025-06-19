window.onload = function () {
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  document.getElementById("current-time").textContent = timeString;
};
