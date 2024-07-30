
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

  })
  


  