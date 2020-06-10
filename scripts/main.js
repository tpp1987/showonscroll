window.onscroll = function() {
    let currentScrollPos = pageYOffset;

    if (currentScrollPos > 800) {
        document.getElementById("social-icons").style.opacity = "1"
    }
}