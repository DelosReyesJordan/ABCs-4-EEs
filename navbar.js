document.addEventListener("DOMContentLoaded", () => {
  // Detect whether current page is in a subdirectory
  const isInPagesFolder = window.location.pathname.includes("/pages/");
  const navbarPath = isInPagesFolder ? "../navbar.html" : "navbar.html";

  fetch(navbarPath)
    .then(response => {
      if (!response.ok) throw new Error("Failed to load navbar");
      return response.text();
    })
    .then(data => {
      document.getElementById("navbar-container").innerHTML = data;
    })
    .catch(error => {
      console.error("Navbar load error:", error);
    });
});
