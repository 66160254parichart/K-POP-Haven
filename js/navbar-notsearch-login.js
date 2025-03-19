document.addEventListener("DOMContentLoaded", function () {
    fetch("navbar-notsearch-login.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar-notsearch-login.html").innerHTML = data;
            attachUserProfileEvent(); // Attach event after loading navbar
        })
        .catch(error => console.error("Error loading navbar:", error));
});

document.addEventListener('DOMContentLoaded', () => {
    const shopMenuButton = document.getElementById('shop-menu-button');
    const shopDropdown = document.getElementById('shop-dropdown');
    const userMenuButton = document.getElementById('user-menu-button');
    const userDropdown = document.getElementById('user-dropdown');

    // Toggle dropdown visibility for Shop
    shopMenuButton.addEventListener('click', (event) => {
      event.stopPropagation(); // Prevent click from propagating to document
      shopDropdown.classList.toggle('hidden');
    });

    // Toggle dropdown visibility for User Profile
    userMenuButton.addEventListener('click', (event) => {
      event.stopPropagation(); // Prevent click from propagating to document
      userDropdown.classList.toggle('hidden');
    });

    // Close all dropdowns when clicking outside
    document.addEventListener('click', () => {
      shopDropdown.classList.add('hidden');
      userDropdown.classList.add('hidden');
    });
  });