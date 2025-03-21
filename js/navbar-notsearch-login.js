document.addEventListener("DOMContentLoaded", function () {
    
  fetch("navbar-notsearch-login.html")
      .then(response => response.text())
      .then(data => {
          document.getElementById("navbar-notsearch-login").innerHTML = data;

          attachDropdownEvents();
      })
      .catch(error => console.error("Error loading navbar:", error));
});

function attachDropdownEvents() {
  const shopMenuButton = document.getElementById('shop-menu-button');
  const shopDropdown = document.getElementById('shop-dropdown');
  const userMenuButton = document.getElementById('user-menu-button');
  const userDropdown = document.getElementById('user-dropdown');

  if (!shopMenuButton || !shopDropdown || !userMenuButton || !userDropdown) {
      console.error("Dropdown elements not found");
      return;
  }

  userDropdown.style.width = "150px"; 
  userDropdown.style.padding = "5px 0"; 
  userDropdown.style.fontSize = "12px"; 

  
  userMenuButton.addEventListener('click', (event) => {
      event.stopPropagation(); 
      userDropdown.classList.toggle('hidden');
      shopDropdown.classList.add('hidden'); 

      
      const rect = userMenuButton.getBoundingClientRect();
      userDropdown.style.position = "absolute";
      userDropdown.style.top = `${rect.bottom + window.scrollY}px`; 
      userDropdown.style.left = `${rect.right - userDropdown.offsetWidth + 90}px`; 
  });

  
  shopMenuButton.addEventListener('click', (event) => {
      event.stopPropagation(); 
      shopDropdown.classList.toggle('hidden');
      userDropdown.classList.add('hidden'); 
  });

  
  document.addEventListener('click', () => {
      shopDropdown.classList.add('hidden');
      userDropdown.classList.add('hidden');
  });

  
  shopDropdown.addEventListener('click', (event) => {
      event.stopPropagation();
  });

  userDropdown.addEventListener('click', (event) => {
      event.stopPropagation();
  });

  module.exports = {
    variants: {
      extend: {
        textColor: ['hover', 'dark'], 
        backgroundColor: ['hover', 'dark'], 
      },
    },
  };
}