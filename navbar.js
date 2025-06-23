document.addEventListener("DOMContentLoaded", () => {
  const inSubfolder = window.location.pathname.includes("/pages/");
  const navbarPath = inSubfolder ? "../navbar.html" : "navbar.html";

  fetch(navbarPath)
    .then(response => {
      if (!response.ok) throw new Error("Failed to load navbar");
      return response.text();
    })
    .then(html => {
      document.getElementById("navbar-container").innerHTML = html;

      // Add hrefs after inserting navbar HTML
      document.querySelectorAll('nav a[data-link]').forEach(anchor => {
        const base = inSubfolder ? "../" : "";
        const link = anchor.getAttribute("data-link");
        anchor.setAttribute("href", base + link);
      });
    })
    .catch(error => {
      console.error("Navbar loading error:", error);
    });
});
