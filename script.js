const scrambleText = document.querySelector('.scramble-text');
const textContent = scrambleText.textContent;

// Función para desordenar el texto
function scramble() {
  const letters = textContent.split('');
  let scrambledText = '';

  for (let i = 0; i < letters.length; i++) {
    scrambledText += letters[Math.floor(Math.random() * letters.length)];
  }

  gsap.fromTo(scrambleText, {
    text: scrambleText,
    scale: 1
  }, {
    text: textContent,
    scale: 1.2,
    yoyo: true,
    repeat: -1,
    duration: 1,
    ease: 'elastic.out(1, 0.3)'
  });
    }
    gsap.fromTo(scrambleText, {
  text: scrambleText,
  scale: 1
}, {
  text: textContent,
  scale: 1.2,
  yoyo: true,
  repeat: -1,
  duration: 1,
  ease: 'elastic.out(1, 0.3)'
});
  });
}

scrambleText.addEventListener('mouseenter', scramble);
scrambleText.addEventListener('click', scramble);

gsap.from(".bienvenida h1", { Y: -50, opacity: 0, duration: 2 });
gsap.from(".bienvenida p", { x: -0, opacity: 0, duration: 3 });

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

