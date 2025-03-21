document.addEventListener("DOMContentLoaded", function() {
    fetch("footer-login.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("footer-login").innerHTML = data;
    })
    .catch(error => console.error("Error loading footer:",error));
    
});
