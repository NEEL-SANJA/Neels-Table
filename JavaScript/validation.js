document.addEventListener("DOMContentLoaded", function () {
    const forms = document.querySelectorAll("form");
    forms.forEach(function (form) {
        form.addEventListener("submit", function (event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                form.reportValidity();
                return;
            }
            const mobile = form.querySelector('input[id="bmobile"], input[id="omobile"], input[id="signupMobile"], input[type="tel"]');
            if (mobile && !/^[0-9]{10}$/.test(mobile.value.trim())) {
                event.preventDefault();
                mobile.setCustomValidity("Please enter a valid 10-digit mobile number.");
                mobile.reportValidity();
                mobile.addEventListener("input", function () { mobile.setCustomValidity(""); }, { once: true });
                return;
            }
            const bookingDate = form.querySelector("#bdate");
            if (bookingDate && bookingDate.value) {
                const today = new Date();
                today.setHours(0, 0, 0, 0);
                const selectedDate = new Date(bookingDate.value + "T00:00:00");
                if (selectedDate < today) {
                    event.preventDefault();
                    bookingDate.setCustomValidity("Please choose today or a future date.");
                    bookingDate.reportValidity();
                    bookingDate.addEventListener("input", function () { bookingDate.setCustomValidity(""); }, { once: true });
                    return;
                }
            }
            const passwordFields = form.querySelectorAll('input[type="password"]');
            if (passwordFields.length > 1 && passwordFields[0].value !== passwordFields[1].value) {
                event.preventDefault();
                passwordFields[1].setCustomValidity("Passwords do not match.");
                passwordFields[1].reportValidity();
                passwordFields[1].addEventListener("input", function () { passwordFields[1].setCustomValidity(""); }, { once: true });
                return;
            }
            event.preventDefault();
            const success = form.querySelector("#sent") || document.createElement("p");
            if (!success.id) {
                success.className = "notice success";
                success.setAttribute("role", "status");
                form.appendChild(success);
            }
            success.textContent = "Form details are valid. This is a front-end demo; no information has been sent to a server.";
            success.hidden = false;
        });
    });
});