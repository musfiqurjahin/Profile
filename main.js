// Dynamically create HTML structure
const htmlContent = `
<div class="card">
      <div class="card-top">
        <div class="card-text">
            <h1><span class="name">Musfiqur Jahin</span>
                <div class="verified-badge-container">
                    <img src="Verified_Badges/Blue-badge-1.png" alt="Verified Badge" class="verified-badge" title="Verified &#x2705;">
                </div>
            </h1>  
            <p>
                <span class="accordion">
                    <i class="fa-solid fa-microchip"></i>
                    <span class="text">Technophile</span>
                </span>
                &nbsp;
                <span class="accordion">
                    <i class="fa-solid fa-brain"></i>
                    <span class="text">Programmer</span>
                </span>
                &nbsp;
                <span class="accordion">
                    <i class="fa-solid fa-laptop-code"></i>
                    <span class="text">Full Stack Dev</span>
                </span>
                <!--<span title="Koinophobic🙂" class="accordion"><i class="fa-solid fa-star-half-stroke"></i><span class="text">koinoPhobic</span>-->
            </p>            
        </div>
        <div class="card-btn" title="Tap to Open/Close Slide🔁">
            <i class="fas fa-chevron-up"></i>
        </div>
      </div>

      <div class="card-bottom">
        <a title="Follow me on Facebook!" href="https://www.facebook.com/musfiqurjahin.official?sk=followers" target="_blank" class="follow-btn">
          <i class="fa-solid fa-user-plus fa-shake"></i> Follow
        </a>

        <button class="message-btn" title="Under Construction" onclick="event.preventDefault();">
          <i class="fa-solid fa-sign-in"></i> Website
        </button>        

       <!-- <button class="message-btn" title="Under Construction" onclick="window.open('https://sites.google.com/view/musfiqurjahin', '_blank')">
          <i class="fa-solid fa-sign-in"></i> Website
        </button> -->       
      </div>

      <div class="card-slide">
           <!--<div class="intro">
            <h1>Hi, I'm Jahin.</h1>
            <p>A passionate Programmer dedicated to building innovative solutions and shaping the digital world.</p>
            <p>With a relentless drive for learning and creating, I’m constantly exploring new technologies and pushing the boundaries of what’s possible.</p>
            <p>Coding is not just my skill; it’s my passion and my path to building something great :D</p>
        </div>
        <hr style="border: none; height: 2px; width: 80%; background: linear-gradient(to right, rgba(0, 123, 255, 0.5), rgba(0, 123, 255, 1), rgba(0, 123, 255, 0.5)); border-radius: 5px; margin: 20px auto; backdrop-filter: blur(5px);">
        <div style="height: 30px;"></div>-->
        <h1>Social Links:</h1>
        <div class="social-icons">
            <a title="linkedin" href="https://www.linkedin.com/in/musfiqurjahin"><i class="fa-brands fa-linkedin-in fa-bounce" style="animation-duration: 3s; transition: animation-duration 0.1s; animation-delay: 0s; animation-iteration-count: 1;"></i></a>
            <a title="Instagram" href="https://instagram.com/musfiqur_jahin"><i class="fa-brands fa-instagram fa-bounce" style="animation-duration: 3s; transition: animation-duration 0.1s; animation-delay: 3s; animation-iteration-count: 1;"></i></a>
            <a title="Facebook" href="https://facebook.com/musfiqurjahin"><i class="fa-brands fa-facebook fa-bounce" style="animation-duration: 3s; transition: animation-duration 0.1s; animation-delay: 6s; animation-iteration-count: 1;"></i></a>
            <a title="Github" href="https://github.com/musfiqurjahin"><i class="fa-brands fa-github fa-bounce" style="animation-duration: 3s; transition: animation-duration 0.1s; animation-delay: 9s; animation-iteration-count: 1;"></i></a>
            <a title="X (Formerly Twitter)" href="https://x.com/musfiqur_jahin"><i class="fa-brands fa-x-twitter fa-bounce" style="animation-duration: 3s; transition: animation-duration 0.1s; animation-delay: 12s; animation-iteration-count: 1;"></i></a>
            <a title="Threads" href="https://www.threads.net/@musfiqur_jahin"><i class="fa-brands fa-threads fa-bounce" style="animation-duration: 3s; transition: animation-duration 0.1s; animation-delay: 15s; animation-iteration-count: 1;"></i></a>
            <a title="WhatsApp" href="https://wa.me/8801701630977"><i class="fa-brands fa-whatsapp fa-bounce" style="animation-duration: 3s; transition: animation-duration 0.1s; animation-delay: 18s; animation-iteration-count: 1;"></i></a>
            <a title="YouTube" href="https://youtube.com/@musfiqurjahin"><i class="fa-brands fa-youtube fa-bounce" style="animation-duration: 3s; transition: animation-duration 0.1s; animation-delay: 21s; animation-iteration-count: 1;"></i></a>
            <a title="Telegram" href="https://t.me/musfiqurjahin"><i class="fa-brands fa-telegram fa-bounce" style="animation-duration: 3s; transition: animation-duration 0.1s; animation-delay: 24s; animation-iteration-count: 1;"></i></a>
            <a title="Mail" href="mailto:musfiqur.jahin@gmail.com"><i class="fa-solid fa-envelope fa-bounce" style="animation-duration: 3s; transition: animation-duration 0.1s; animation-delay: 27s; animation-iteration-count: 1;"></i></a>
            <a title="Phone" href="tel:+8801701630977"><i class="fa-solid fa-phone fa-bounce" style="animation-duration: 3s; transition: animation-duration 0.1s; animation-delay: 30s; animation-iteration-count: 1;"></i></a>
            <a title="WEB" href="https://musfiqurjahin.github.io/"><i class="fa-solid fa-globe fa-bounce" style="animation-duration: 3s; transition: animation-duration 0.1s; animation-delay: 33s; animation-iteration-count: 1;"></i></a>
          </div>          
        <div style="height: 100px;"></div>
      </div>
    </div>
`;

document.body.innerHTML = htmlContent;


const styles = `
* {
    font-family: "VT323", monospace;
    text-decoration: none;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.name {
    color: rgba(255, 255, 255, 0.9);
    font-size: 1.1em;
    font-weight: 900;
    word-spacing: -1px;
    justify-content: center;
    text-align: center;
    -webkit-text-stroke: 1px rgb(33, 150, 243); 
    text-shadow: 
        0 0 20px rgb(0, 0, 0), 
        0 0 25px rgb(0, 0, 0);
    font-family: "Lilita One", serif;
}

html, body {
    overflow: hidden;
    height: 100%;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: black; 
}

.card {
    position: relative;
    width: 350px;
    height: 450px;
    background: transparent;
    border-radius: 0px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    overflow: hidden;
    text-align: center;
    word-spacing: -0.2em;
    border: 5px solid transparent;
    animation: borderAnimation 3s linear infinite;
    border-image-slice: 1;
    border-image-width: 3;
}

@keyframes borderAnimation {
    0% {
        border-image-source: linear-gradient(0deg,red, #0000ff);
    }
    25% {
        border-image-source: linear-gradient(90deg,red, #0000ff);
    }
    50% {
        border-image-source: linear-gradient(180deg,red, #0000ff);
    }
    75% {
        border-image-source: linear-gradient(270deg,red, #0000ff);
    }
    100% {
        border-image-source: linear-gradient(360deg,red, #0000ff);
    }
}

.card-bottom {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 80px;
    background: rgba(0,0,0,0.3);
    display: flex;
    align-items: center;
    justify-content: space-around;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    z-index: 9;
    padding-top: 10px;
}

.follow-btn, .message-btn {
    background: linear-gradient(45deg, #007bff, #0056b3);
    color: #ffffff;
    border: 2px solid #004494;
    padding: 12px 24px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    border-radius: 8px;
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    transition: background 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
}

.follow-btn i, .message-btn i {
    margin-right: 8px;
}

.follow-btn:hover, .message-btn:hover {
    background: linear-gradient(45deg, #0056b3, #003a7d);
    transform: translateY(-3px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.4);
}

.follow-btn:active, .message-btn:active {
    transform: translateY(0);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
}

.follow-btn::before, .message-btn::before {
    content: '';
    position: absolute;
    top: -100%; 
    left: -50%; 
    width: 45%; 
    height: 200%;
    background: rgba(255, 255, 255, 0.3);
    transform: skewX(-30deg);
    transition: transform 0.2s ease;
}

.follow-btn:hover::before, .message-btn:hover::before {
    animation: shine 0.5s ease forwards; 
}

@keyframes shine {
    0% {
        left: -50%;
    }
    50% {
        left: 50%;
    }
    100% {
        left: 150%;
    }
}
.card-btn {
    width: 35px;
    height: 35px;
    background: #007bff;
    border-radius: 50%;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    position: absolute;
    bottom: 14%;
    left: 50%;
    transform: translateX(-50%);
    cursor: pointer;
    z-index: 10;
    transition: transform 0.2s ease, background 0.2s ease;
}

.card-btn:hover {
    transform: translateX(-50%) scale(1.1);
    background: #0056b3;
}

.card-slide {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.9);
    padding-top: 30px;
    bottom: -100%;
    overflow: auto;
    left: 0;
    transition: 0.3s ease-in-out;
    scrollbar-width: none;
    -ms-overflow-style: none;
}

.card-slide::-webkit-scrollbar {
    display: none;
}

.card-slide h1 {
    color: rgb(0, 119, 255);
    font-size: 2.2em;
    font-weight: 900;
    word-spacing: -1px;
    justify-content: center;
    text-align: center;
    -webkit-text-stroke: 1px white; /* Strokes only the name */
    font-family: "Lilita One", serif;
}

.intro {
    text-align: center;
    padding: 5px;
    margin: auto;
    font-family: Arial, sans-serif;
}

.intro h1 {
    text-align: center;
    font-size: 2em;
    font-weight: bold;
    color: #007bff;
    margin: 0;
    letter-spacing: 3px;
}

.intro p {
    font-size: 15px;
    color: #ffffff;
    margin-top: 10px;
    word-spacing: 5px; /* Adds space between words */
    -webkit-text-stroke: 0.3px rgb(33, 150, 243); /* Text border */
    text-shadow: 
        0 0 20px rgb(0, 0, 0), 
        0 0 25px rgb(0, 0, 0); /* Text shadow */
    font-family: "Lilita One", serif; /* Custom font */
}


.social-icons {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin: 20px;
}

.social-icons a {
    background: #007bff;
    padding: 12px;
    margin: 12px 12px;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
    border-radius: 50px;
    font-size: 1.2em;
    font-weight:lighter;
    color: #ffffff;
    transition: 0.5s ease;
    border: none;
}

.social-icons a:hover {
    background: #0056b3;
    transform: scale(1.1);
}

.card-slide.show {
    bottom: 0;
}

.card-top {
    position: relative;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    color: #333333;
}

.card-top::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(Images/Profile_pic-4.jpg);
    background-size: cover;
    background-position: center;
    transform: scaleX(1);
}

.card-text {
    width: 100%;
    position: absolute;
    left: 50%;
    bottom: 25%;
    transform: translateX(-50%);
}

.verified-badge {
    width: 35px;
    height: 35px;
    display: inline-block;
    vertical-align: middle; 
    position: relative;
    transition: transform 0.2s ease-in-out;
    cursor: pointer;
    margin-left: -10px;
    margin-top: -6px; 
    border-radius: 50%;
    border: none;
    background-color: transparent;
}


.verified-badge::after {
    content: '';
    position: absolute;
    top: 2px; 
    left: 2px; 
    right: 2px; 
    bottom: 2px; 
    background-color: transparent; /* Inner background color */
    border-radius: 50%;
}


.verified-badge-container {
    position: relative;
    display: inline-block;
}
.verified-badge:active {
    animation: bounce 0.4s ease-in-out;
}

@keyframes bounce {
0% {
    transform: scale(1);
    }
30% {
    transform: scale(1.3);
    }
50% {
    transform: scale(0.9);
    }
100% {
    transform: scale(1);
    }                                                 
}
.title {
    display: inline-flex;
    color: #ffffff;
    align-items: center;
    background: rgb(0,0,0,0.9);
    border: 2px solid #cccccc;
    border-radius: 5px;
    padding: 3px 8px;
    margin: 0 5px;
    box-shadow: 0 0 5px rgba(255, 0, 0, 0.1);
    transition: transform 0.3s;
    font-size: 14px;
    cursor: pointer;
}

.title:hover {
    transform: scale(1.2);
}

.card-text p {
    margin-top: 10px;
}
.fa-shake {
    animation-duration: 3s;
    transition: animation-duration 0.2s;
}

.fa-shake:hover {
    animation:none;
    transform: rotate(5deg);
}
.fa-spin {
    animation-duration: 5s; 
}

p {
    font-family: Arial, sans-serif;
    font-size: 16px;
}

.accordion {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    color: #ffffff;
    background: rgba(0, 0, 0, 0.9);
    border: 3px solid rgb(33, 150, 243); 
    border-radius: 5px;
    padding: 5px 5px; 
    margin: 5px;
}

.accordion i {
    font-size: 20px;
    margin-right: 5px;
    transition: transform 0.3s ease;
    color: #ffffff;
}

.accordion .text {
    display: inline-block;
    max-width: 0;
    opacity: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: max-width 0.3s ease, opacity 0.3s ease;
}

.accordion:hover i,
.accordion:focus i {
    transform: rotate(360deg);
    color: rgb(33, 150, 243);
}
.accordion:hover .text,
.accordion:focus .text {
    max-width: 200px; 
    opacity: 1;
}
`;

// Create a style element and append the CSS to it
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);


//Script//
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
