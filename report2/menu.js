let count = 0;

function rotation() {
    img = document.getElementById("wine");
    img.src = "./figures/wine" + count % 3 + ".jpg";
    count++;
}