document.addEventListener("DOMContentLoaded", function () {
    fetch("navbar-login.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar-login").innerHTML = data;
            attachUserProfileEvent(); // Attach event after loading navbar
        })
        .catch(error => console.error("Error loading navbar:", error));
});

function attachUserProfileEvent() {
    const userProfile = document.getElementById("userProfile");
    const dropdownMenu = userProfile.querySelector(".dropdown-menu");

    userProfile.addEventListener("click", function (event) {
        dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
        event.stopPropagation();
    });

    document.addEventListener("click", function () {
        dropdownMenu.style.display = "none";
    });

    dropdownMenu.addEventListener("click", function (event) {
        event.stopPropagation();
    });
}