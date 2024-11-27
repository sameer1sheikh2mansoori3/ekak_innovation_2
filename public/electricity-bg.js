const canvas = document.getElementById("electricity-bg");
const ctx = canvas.getContext("2d");

const resizeCanvas = () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
};

const createLightning = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = "rgba(30, 144, 255, 0.8)";
  ctx.lineWidth = Math.random() * 2 + 2;
  ctx.shadowBlur = 15;
  ctx.shadowColor = "rgba(30, 144, 255, 0.8)";

  for (let i = 0; i < 5; i++) {
    ctx.beginPath();
    ctx.moveTo(Math.random() * canvas.width, 0);
    ctx.lineTo(
      Math.random() * canvas.width,
      Math.random() * canvas.height
    );
    ctx.stroke();
  }
};

resizeCanvas();
window.addEventListener("resize", resizeCanvas);
setInterval(createLightning, 100);
