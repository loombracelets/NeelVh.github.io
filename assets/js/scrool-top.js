/* Scroll Top Button */
if (pos > 300) {
  scrollTopBtn.style.display = "grid";
} else {
  scrollTopBtn.style.display = "none";
}

scrollTopBtn.addEventListener("click", () => {
  document.documentElement.scrollTop = 0;
});
};
const body = document.querySelector("body"),
    nav = document.querySelector("nav"),
    modeToggle = document.querySelector(".dark-light"),
    searchToggle = document.querySelector(".searchToggle"),
    sidebarOpen = document.querySelector(".sidebarOpen"),
    siderbarClose = document.querySelector(".siderbarClose");

    let getMode = localStorage.getItem("mode");
        if(getMode && getMode === "dark-mode"){
          body.classList.add("dark");
        }
