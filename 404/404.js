// Dynamically create HTML structure
const htmlContent = `
    <canvas id="canvas"></canvas>
    <div class="back-btn">
        <a href="/"><i class="fas fa-arrow-circle-left fa-shake"></i> Go Back</a>
    </div>
`;

document.body.innerHTML = htmlContent;


const styles = `
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        background: url('404.jpg') no-repeat center center fixed;
        background-size: cover;
        color: white;
        font-family: Arial, sans-serif;
        overflow: hidden;
    }

    canvas {
        position: absolute;
        top: 0;
        left: 0;
        width: auto;
        height: auto;
    }

    .back-btn {
        position: absolute;
        top: 20px;
        left: 20px;
        z-index: 2;
    }

    .back-btn a {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 10px 20px;
        font-size: 1rem;
        background: rgba(0, 0, 0, 0.3);
        color: white;
        text-decoration: none;
        border: 3px solid #3b82f6;
        border-radius: 6px;
        transition: 0.3s ease-in-out;
    }

    .back-btn a:hover {
        background: #3b82f6;
        color: black;
    }

    .fa-shake {
        animation-duration: 3s;
        transition: animation-duration 0.2s;
    }

    .fa-shake:hover {
        animation: none;
        transform: scaleX(-1);
    }

    .back-btn:hover {
        transform: scaleX(1.2) scaleY(1.0);
    }
`;

// Create a style element and append the CSS to it
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

// JavaScript code for canvas and particles animation
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let particles = [];
let mouse = { x: null, y: null };

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        this.size = Math.random() * 3 + 1;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x > canvas.width || this.x < 0) this.vx *= -1;
        if (this.y > canvas.height || this.y < 0) this.vy *= -1;
    }

    draw() {
        ctx.fillStyle = "#3b82f6";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function connectParticles() {
    for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
            let dx = particles[i].x - particles[j].x;
            let dy = particles[i].y - particles[j].y;
            let distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 100) {
                ctx.strokeStyle = `rgba(59, 130, 246, ${1 - distance / 100})`;
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.stroke();
            }
        }
    }
}

function updateMousePosition(event) {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
}

function initParticles() {
    particles = [];
    for (let i = 0; i < 100; i++) {
        particles.push(new Particle());
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(particle => {
        particle.update();
        particle.draw();
    });
    connectParticles();
    requestAnimationFrame(animate);
}

window.addEventListener("resize", resizeCanvas);
window.addEventListener("mousemove", updateMousePosition);
resizeCanvas();
initParticles();
animate();
