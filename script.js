
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
const contenedor = document.getElementById('contenedor-medios');
const palabras = [
  'Product design',
  'CRO',
  'Design management',
  'Strategist',
  'Wireframes',
  'UXUI Design',
  'Design system',
  'Research',
  'Accessibility',
  'Interactive design',
  'Information architecture',
  'Design thinking',
  'Scrum',
  'Content',
  'Artificial intelligence'
];

function crearPalabra() {
  const palabra = document.createElement('div');
  palabra.classList.add('palabra');
  palabra.textContent = palabras[Math.floor(Math.random() * palabras.length)];

  // Tamaño de fuente aleatorio
  palabra.style.fontSize = `${Math.random() * 50 + 10}px`; // Entre 10 y 30px

  // Familia de fuente aleatoria (puedes agregar más opciones)
  const fuentes = ['Arial', 'Helvetica', 'Times New Roman', 'sans-serif', 'serif',`impact`,`script`];
  palabra.style.fontFamily = fuentes[Math.floor(Math.random() * fuentes.length)];

  // Posición aleatoria
  palabra.style.left = `${Math.random() * 100}%`;
  palabra.style.top = `${Math.random() * 100}%`;

  contenedor.appendChild(palabra);

  // Mostrar y ocultar con animación
  palabra.style.opacity = 1;
  setTimeout(() => {
    palabra.style.opacity = 0;
    setTimeout(() => {
      contenedor.removeChild(palabra);
    }, 2000);
  }, 200);
}

// Limitar a 5 palabras en pantalla
let palabrasEnPantalla = 0;
function crearPalabraSiHayLugar() {
  if (palabrasEnPantalla < 10) {
    crearPalabra();
    palabrasEnPantalla++;
    setTimeout(() => {
      palabrasEnPantalla--;
    }, 8);
  }
}

// Crear palabras continuamente con el límite
setInterval(crearPalabraSiHayLugar, 500);




  })
  


  