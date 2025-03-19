document.addEventListener("DOMContentLoaded", function() {
    fetch("navbar-notlogin.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("navbar-notlogin").innerHTML = data;
    })
    .catch(error => console.error("Error loading footer:",error));
    
});

document.addEventListener('DOMContentLoaded', () => {
    const shopMenuButton = document.getElementById('shop-menu-button');
    const shopDropdown = document.getElementById('shop-dropdown');

    // Toggle dropdown visibility for Shop
    shopMenuButton.addEventListener('click', (event) => {
      event.stopPropagation(); // Prevent click from propagating to document
      shopDropdown.classList.toggle('hidden');
    });

    // Close all dropdowns when clicking outside
    document.addEventListener('click', () => {
      shopDropdown.classList.add('hidden');
    });
  });