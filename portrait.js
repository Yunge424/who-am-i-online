function createPortrait(identity) {
  const canvas = document.createElement("canvas");
  canvas.width = 500;
  canvas.height = 500;
  canvas.style.width = "100%";
  canvas.style.maxWidth = "500px";
  canvas.style.borderRadius = "20px";
  canvas.style.background = "#101426";

  const ctx = canvas.getContext("2d");
  if (!ctx) return null;

  let animationId;
  let running = true;

  // Fixed positions ensure the portrait remains
  // consistent when the animation updates.
  const particles = Array.from({ length: 250 }, (_, i) => {
    const angle = i * 2.39996;
    const radius = Math.sqrt((i + 0.5) / 250);

    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius,
      phase: i * 0.73,
      size: 1.5 + (i % 5) * 0.65
    };
  });

  function draw(time) {
    if (!running) return;

    ctx.clearRect(0, 0, 500, 500);
    ctx.fillStyle = "#101426";
    ctx.fillRect(0, 0, 500, 500);

    const count = Math.round(
      40 + identity.expression * 2
    );

    const speed = identity.interaction / 100;
    const opacity = 0.2 + identity.visibility / 125;
    const mask = identity.privacy / 100;

    const t = time * 0.001;

    particles.slice(0, count).forEach((p, i) => {
      const movement =
        Math.sin(t * speed * 2 + p.phase) * 12;

      const x = 250 + p.x * 160 + movement;
      const y = 250 + p.y * 190;

      const hue = 240 + (i % 80);

      ctx.beginPath();
      ctx.arc(x, y, p.size, 0, Math.PI * 2);
      ctx.fillStyle =
        `hsla(${hue}, 90%, 75%, ${opacity})`;
      ctx.fill();
    });

    // Privacy controls a central visual mask.
    ctx.fillStyle = `rgba(16, 20, 38, ${mask})`;
    ctx.fillRect(
      250 - mask * 100,
      190,
      mask * 200,
      mask * 120
    );

    animationId = requestAnimationFrame(draw);
  }

  animationId = requestAnimationFrame(draw);

  return {
    canvas: canvas,

    stop: function() {
      running = false;
      cancelAnimationFrame(animationId);
    },

    download: function() {
      const link = document.createElement("a");
      link.download = "my-digital-identity.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    }
  };
}

