document.addEventListener("DOMContentLoaded", () => {
  let path = window.location.pathname;
  let navbarPath = path.includes("/pages/") ? "../navbar.html" : "navbar.html";

  fetch(navbarPath)
    .then(response => {
      if (!response.ok) throw new Error("Failed to load navbar");
      return response.text();
    })
    .then(data => {
      document.getElementById("navbar-container").innerHTML = data;
    })
    .catch(err => console.error("Navbar error:", err));
});
