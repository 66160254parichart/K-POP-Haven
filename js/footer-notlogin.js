document.addEventListener("DOMContentLoaded", function() {
    fetch("footer-notlogin.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("footer-notlogin").innerHTML = data;
    })
    .catch(error => console.error("Error loading footer:",error));
    
});
