/* ---- particles.js config ---- */

<<<<<<< HEAD
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 280,
      "density": {
        "enable": true,
        "value_area": 3000
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 8
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 2,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 2,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 240,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});
=======
document.body.addEventListener("pointermove", (e)=>{
    const { currentTarget: el, clientX: x, clientY: y } = e;
    const { top: t, left: l, width: w, height: h } = el.getBoundingClientRect();
    el.style.setProperty('--posX',  x-l-w/2);
    el.style.setProperty('--posY',  y-t-h/2);

    const navSlide = () => {
        const burger = document.querySelector(".burger");
        const nav = document.querySelector(".nav-links");
        const navLinks = document.querySelectorAll(".nav-links li");
      
        // Toggle Nav
        burger.addEventListener("click", () => {
          nav.classList.toggle("nav-active");
      
          // Animate Links
          navLinks.forEach((link, index) => {
            if (link.style.animation) {
              link.style.animation = "";
            } else {
              link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +
                0.5}s`;
            }
          });
          // Burger Animation
          burger.classList.toggle("toggle");
        });
      };
      
      const app = () => {
        navSlide();
      };
      
      app();

      document.addEventListener('scroll', () => {
        const media = document.querySelector('.media');
        const scrollY = window.scrollY;
    
        // Aplica una transformación basada en el scroll
        media.style.transform = `translateY(${scrollY * 0.5}px)`;
    });

    document.getElementById('boton-flotante').addEventListener('click', function() {
  document.getElementById('segunda-seccion').scrollIntoView({
    behavior: 'smooth'
  });
});
////////////////animación palabras////////////////////////


  })
  


  
>>>>>>> parent of 7fc119a (descripción de mi perfil)
