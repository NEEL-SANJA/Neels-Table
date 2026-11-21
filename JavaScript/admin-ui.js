document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".menu a").forEach(function (link) {
        link.addEventListener("click", function () {
            document.querySelectorAll(".menu a").forEach(function (item) {
                item.classList.remove("active");
            });
            link.classList.add("active");
        });
    });
    document.querySelectorAll("button").forEach(function (button) {
        if (button.type !== "submit") {
            button.addEventListener("click", function () {
                const message = document.createElement("span");
                message.className = "badge pending";
                message.textContent = "Demo action";
                message.setAttribute("role", "status");
                button.insertAdjacentElement("afterend", message);
                window.setTimeout(function () { message.remove(); }, 2500);
            });
        }
    });
});