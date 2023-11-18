let hamburger = document.querySelector(".hamburger");
hamburger.onclick = function () {
    let nav = document.querySelector("nav");
    nav.classList.toggle("open");
    hamburger.classList.toggle("close");
};
function imgSlider(anything) {
    document.querySelector('.starbucsks').src = anything;
};
function ChangeCircleColor(color) {
    let circle = document.querySelector(".circle");
    circle.style.background = color;
};
let span = document.querySelector(".up");
window.onscroll = function () {
    console.log(this.scrollY);
    if (this.scrollY >= 1500) {
        span.classList.add("show");
    }  else {
        span.classList.remove("show");
    }
};
span.onclick = function () {
    window.scrollTo({
        top:0,
    })
};

