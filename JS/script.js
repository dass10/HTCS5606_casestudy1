function moveAd() {
    left = 0;
    setInterval(function() {
        image = document.getElementById("sideImage");
        image.style.left = left + "px";
        left--;
        if (left == -400) {
            left = 0;
        }
    }, 50);
}