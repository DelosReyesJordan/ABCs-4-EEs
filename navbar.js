document.addEventListener("DOMContentLoaded", () => {
  fetch("navbar.html")
    .then(response => {
      if (!response.ok) throw new Error("Failed to load navbar.html");
      return response.text();
    })
    .then(data => {
      document.getElementById("navbar-container").innerHTML = data;
    })
    .catch(error => {
      console.error("Navbar load error:", error);
    });
});
