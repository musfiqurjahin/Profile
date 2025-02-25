let btn = document.querySelector(".card-btn");
let cardSlide = document.querySelector(".card-slide");

btn.addEventListener("click", () => {
cardSlide.classList.toggle("show");

let btnIcon = btn.querySelector("i");
if (btnIcon.classList.contains("fa-chevron-down")) {
btnIcon.classList.replace("fa-chevron-down", "fa-chevron-up");
} else {
btnIcon.classList.replace("fa-chevron-up", "fa-chevron-down");
}
});



//Alert on Website button click
document.querySelector(".message-btn").addEventListener("click", function () {
    alert("This website link is not available at the moment.");
    });