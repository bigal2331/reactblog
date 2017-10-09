/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
var x = document.getElementById("icon");
var myNav = document.getElementById("myTopnav");

function myFunction() {
    if (myNav.className === "topnav") {
        myNav.className += " responsive";
    } else {
        myNav.className = "topnav";
    }
}

x.addEventListener('click',myFunction);

window.sr = ScrollReveal({duration: 3000});
sr.reveal('.fadeIn', {reset: true});
