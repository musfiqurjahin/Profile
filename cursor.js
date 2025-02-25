// Hide the default cursor
document.documentElement.style.cursor = "none";
document.body.style.cursor = "none";
document.querySelectorAll("*").forEach(el => el.style.cursor = "none");

//Cursor (vector)
const customCursor = document.createElement("img");
customCursor.src = "cursor/vector.png";
customCursor.style.position = "fixed";
customCursor.style.width = "30px"; 
customCursor.style.height = "30px"; 
customCursor.style.pointerEvents = "none";
customCursor.style.zIndex = "9999";
customCursor.style.transform = "translate(0, 0)";
customCursor.style.display = "none"; 
//Pointer
const hoverCursor = document.createElement("img");
hoverCursor.src = "Cursor/pointer.png";
hoverCursor.style.position = "fixed";
hoverCursor.style.width = "30px";
hoverCursor.style.height = "30px";
hoverCursor.style.pointerEvents = "none";
hoverCursor.style.zIndex = "9999";
hoverCursor.style.transform = "translate(0, 0)";
hoverCursor.style.display = "none"; 


document.body.appendChild(customCursor);
document.body.appendChild(hoverCursor);

// Speed factor to adjust cursor speed
const speedFactor = 0.9;

let mouseX = 0, mouseY = 0;
let cursorX = 0, cursorY = 0;

document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (hoverCursor.style.display !== "block") {
        customCursor.style.display = "block"; 
    }
});

function updateCursorPosition() {
    cursorX += (mouseX - cursorX) * speedFactor;
    cursorY += (mouseY - cursorY) * speedFactor;

    customCursor.style.left = `${cursorX}px`;
    customCursor.style.top = `${cursorY}px`;

    hoverCursor.style.left = `${cursorX}px`;
    hoverCursor.style.top = `${cursorY}px`;

    requestAnimationFrame(updateCursorPosition);
}

updateCursorPosition();


document.addEventListener("mouseleave", () => {
    customCursor.style.display = "none";
    hoverCursor.style.display = "none";
});

document.addEventListener("mouseenter", () => {
    if (hoverCursor.style.display !== "block") {
        customCursor.style.display = "block";
    }
});

const interactiveElements = document.querySelectorAll("button, a, .tile, .badge, .verified-badge,.card-btn,.accordion");

interactiveElements.forEach(el => {
    el.addEventListener("mouseenter", () => {
        customCursor.style.display = "none"; 
        hoverCursor.style.display = "block"; 
    });

    el.addEventListener("mouseleave", () => {
        hoverCursor.style.display = "none"; 
        customCursor.style.display = "block";
    });
});
