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
//document.querySelector(".message-btn").addEventListener("click", function () {
 //   alert("This website link is not available at the moment.");
  //  });

    // Open a link popup on button click
    document.querySelector(".message-btn").addEventListener("click", function () {
    // Create a new popup window
    const popup = window.open('https://musfiqurjahin.github.io/ChatBot/', 'popup', 'width=600,height=400,scrollbars=yes,resizable=yes');

    // Check if popup is blocked
    if (!popup) {
        alert("Popup is blocked. Please allow popups for this site.");
    }
});
