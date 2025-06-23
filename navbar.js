document.addEventListener("DOMContentLoaded", () => {
  const inSubfolder = window.location.pathname.includes("/pages/");
  const navbarPath = inSubfolder ? "../navbar.html" : "navbar.html";

  fetch(navbarPath)
    .then(res => res.text())
    .then(data => {
      document.getElementById("navbar-container").innerHTML = data;
      document.querySelectorAll('nav a[data-link]').forEach(a => {
        const base = inSubfolder ? "../" : "";
        a.setAttribute("href", base + a.getAttribute("data-link"));
      });
    })
    .catch(err => console.error("Navbar error:", err));
});
