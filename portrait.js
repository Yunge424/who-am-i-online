
/*
  Who Am I Online?
  Generative Digital Portrait Engine

  All portrait calculations happen locally
  inside the user's browser.
*/

(function () {
  'use strict';

  function clamp(value) {
    return Math.max(
      0,
      Math.min(100, Number(value) || 0)
    );
  }

  function createPortrait(identity, options = {}) {
    const canvas = document.createElement('canvas');

    canvas.width = 500;
    canvas.height = 500;

    canvas.setAttribute('role', 'img');

    canvas.setAttribute(
      'aria-label',
      options.label || 'Generative digital identity portrait'
    );

    const ctx = canvas.getContext('2d');

    if (!ctx) {
      return null;
    }

    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    );

    const state = { ...identity };

    // Fixed particle positions make comparisons
    // between portraits more meaningful.

    const particles = Array.from(
      { length: 270 },
      (_, i) => {
        const angle = i * 2.399963229728653;
        const radius = Math.sqrt(
          (i + 0.5) / 270
        );

        return {
          x: Math.cos(angle) * radius,
          y: Math.sin(angle) * radius,
          phase: i * 0.73,
          size: 1.5 + (i % 5) * 0.65
        };
      }
    );

    let frame = null;
    let running = true;
    let lastTime = 0;

    // -----------------------------------
    // DRAW THE DIGITAL PORTRAIT
    // -----------------------------------

    function draw(time = 0) {
      const visibility = clamp(state.visibility);
      const expression = clamp(state.expression);
      const privacy = clamp(state.privacy);
      const interaction = clamp(state.interaction);

      // Expression controls particle count.

      const count = Math.min(
        particles.length,
        Math.round(40 + expression * 2)
      );

      // Visibility controls opacity.

      const opacity = Math.min(
        1,
        0.2 + visibility / 125
      );

      // Privacy controls visual masking.

      const mask = privacy / 100;

      // Interaction controls movement speed.

      const speed = interaction / 100;

      const t = time * 0.001;

      // Clear previous frame.

      ctx.fillStyle = '#101426';
      ctx.fillRect(0, 0, 500, 500);

      // Draw all active particles.

      for (let i = 0; i < count; i++) {
        const p = particles[i];

        const movement =
          Math.sin(t * speed * 2 + p.phase) * 12;

        const x =
          250 + p.x * 160 + movement;

        const y =
          250 + p.y * 190;

        const hue = 240 + (i % 80);

        ctx.beginPath();

        ctx.arc(
          x,
          y,
          p.size,
          0,
          Math.PI * 2
        );

        ctx.fillStyle =
          `hsla(${hue}, 90%, 75%, ${opacity})`;

        ctx.fill();
      }

      // Obscure part of the portrait
      // according to the privacy score.

      ctx.fillStyle =
        `rgba(16, 20, 38, ${mask})`;

      ctx.fillRect(
        250 - mask * 100,
        190,
        mask * 200,
        mask * 120
      );
    }

    // -----------------------------------
    // ANIMATION
    // -----------------------------------

    function animate(time) {
      if (!running) {
        return;
      }

      lastTime = time;
      draw(time);

      if (
        !reducedMotion.matches &&
        !document.hidden
      ) {
        frame = requestAnimationFrame(animate);
      } else {
        frame = null;
      }
    }

    function syncAnimation() {
      if (!running) {
        return;
      }

      if (frame !== null) {
        cancelAnimationFrame(frame);
        frame = null;
      }

      if (
        !reducedMotion.matches &&
        !document.hidden
      ) {
        frame = requestAnimationFrame(animate);
      } else {
        draw(lastTime);
      }
    }

    // -----------------------------------
    // UPDATE THE PORTRAIT
    // -----------------------------------

    function update(nextIdentity) {
      Object.assign(state, nextIdentity);

      // Redraw immediately when a slider moves.

      draw(lastTime);
    }

    // -----------------------------------
    // DOWNLOAD PNG
    // -----------------------------------

    function download(
      filename = 'my-digital-identity.png'
    ) {
      draw(lastTime);

      const link = document.createElement('a');

      link.download = filename;
      link.href = canvas.toDataURL('image/png');

      link.click();
    }

    // -----------------------------------
    // CLEAN UP ANIMATION
    // -----------------------------------

    function stop() {
      running = false;

      if (frame !== null) {
        cancelAnimationFrame(frame);
      }

      frame = null;

      document.removeEventListener(
        'visibilitychange',
        syncAnimation
      );

      if (
        typeof reducedMotion.removeEventListener ===
        'function'
      ) {
        reducedMotion.removeEventListener(
          'change',
          syncAnimation
        );
      } else if (
        typeof reducedMotion.removeListener ===
        'function'
      ) {
        reducedMotion.removeListener(
          syncAnimation
        );
      }
    }

    document.addEventListener(
      'visibilitychange',
      syncAnimation
    );

    if (
      typeof reducedMotion.addEventListener ===
      'function'
    ) {
      reducedMotion.addEventListener(
        'change',
        syncAnimation
      );
    } else if (
      typeof reducedMotion.addListener ===
      'function'
    ) {
      reducedMotion.addListener(
        syncAnimation
      );
    }

    // Render the first frame.

    draw(0);
    syncAnimation();

    return {
      canvas,
      update,
      stop,
      download
    };
  }

  window.createPortrait = createPortrait;
})();
