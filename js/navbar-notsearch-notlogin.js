document.addEventListener("DOMContentLoaded", function() {
    fetch("navbar-notsearch-notlogin.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("navbar-notlogin").innerHTML = data;
    })
    .catch(error => console.error("Error loading footer:",error));
    
});
