let header = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
    let value = window.scrollY;
    header.classList.toggle("scroll", window.scrollY > 1);
});
