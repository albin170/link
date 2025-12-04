/* AI Platforms */
{ name: 'ElevenLabs', url: 'https://elevenlabs.io', short: 'E', desc: 'AI voice generation' },
{ name: 'Gamma', url: 'https://gamma.app', short: 'GA', desc: 'AI presentations' },
{ name: 'Replit AI', url: 'https://replit.com', short: 'R+', desc: 'AI coding tools' }
];


const grid = document.getElementById("grid");
platforms.forEach(p => {
const card = document.createElement("div");
card.className = "card";
card.innerHTML = `<h3>${p.name}</h3><p>${p.desc}</p>`;
card.onclick = () => window.open(p.url);
grid.appendChild(card);
});


/* Matrix Effect */
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
const letters = "01AI".split("");
const drops = Array(Math.floor(canvas.width / 10)).fill(1);


function drawMatrix() {
ctx.fillStyle = "rgba(0, 0, 0, 0.07)";
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = "#0ff";
drops.forEach((y, i) => {
const text = letters[Math.floor(Math.random() * letters.length)];
ctx.fillText(text, i * 10, y * 20);
drops[i] = y * 20 > canvas.height && Math.random() > 0.96 ? 0 : y + 1;
});
}
setInterval(drawMatrix, 40);


/* Cursor Particle Trail */
const container = document.getElementById("particles");
window.onmousemove = e => {
const particle = document.createElement("span");
particle.className = "trail";
particle.style.left = e.clientX + "px";
particle.style.top = e.clientY + "px";
container.appendChild(particle);
setTimeout(() => particle.remove(), 600);
};


/* Electric Neon Lines */
function spawnNeon() {
const line = document.createElement("div");
line.className = "electric-line";
line.style.left = Math.random() * window.innerWidth + "px";
document.body.appendChild(line);
setTimeout(() => line.remove(), 2000);
}
setInterval(spawnNeon, 700);
