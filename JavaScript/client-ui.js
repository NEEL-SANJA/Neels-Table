document.addEventListener("DOMContentLoaded", function () {
    const mobileToggle = document.querySelector(".mobile");
    const navLinks = document.querySelector(".navlinks");
    if (mobileToggle && navLinks) {
        mobileToggle.setAttribute("role", "button");
        mobileToggle.setAttribute("tabindex", "0");
        mobileToggle.setAttribute("aria-label", "Toggle navigation");
        function toggleNavigation() {
            navLinks.classList.toggle("nav-open");
            mobileToggle.setAttribute("aria-expanded", navLinks.classList.contains("nav-open") ? "true" : "false");
        }
        mobileToggle.addEventListener("click", toggleNavigation);
        mobileToggle.addEventListener("keydown", function (event) {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                toggleNavigation();
            }
        });
    }
});