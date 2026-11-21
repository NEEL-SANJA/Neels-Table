document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("form").forEach(function (form) {
        form.addEventListener("submit", function (event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                form.reportValidity();
                return;
            }
            event.preventDefault();
            let status = form.querySelector(".form-status");
            if (!status) {
                status = document.createElement("p");
                status.className = "badge ok form-status";
                status.setAttribute("role", "status");
                form.appendChild(status);
            }
            status.textContent = "Details validated successfully. Demo only; changes are not stored on a server.";
        });
    });
});