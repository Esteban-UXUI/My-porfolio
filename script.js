
gsap.registerPlugin(ScrollTrigger);
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

/* 
This GSAP effect lets you zoom in on a particular spot of the target - you define the scale and the origin as an Array of x/y normalized values. Like {scale: 3, origin: [0.25, 0.8]} would zoom in on the spot that's 25% from the left, and 80% from the top of the element/image. It will return an animation that controls the xPercent, yPercent, and scale (as well as any other values you pass in, like a normal tween). It won't let the edges collapse toward the center. It's best to put the element into a container that has overflow: hidden.

Example: 

gsap.effects.zoom(".photo", {
  scale: 3,
  origin: [0.25, 0.8],
  duration: 1,
  ease: "power1.inOut"
});
 */
gsap.registerEffect({
  name: "zoom",
  effect: (targets, config) => {
    const vars = {transformOrigin: "0px 0px", ...config},
          { scale, origin } = config,
          clamp = gsap.utils.clamp(-100 * (scale - 1), 0);
    delete vars.origin;
    vars.xPercent = clamp((0.5 - origin[0] * scale) * 100);
    vars.yPercent = clamp((0.5 - origin[1] * scale) * 100);
    vars.overwrite = "auto";
    return gsap.to(targets, vars);
  },
  extendTimeline: true,
  defaults: {origin: [0.5, 0.5], scale: 2}
});

// for each section, we define the zoom data here
const zoomData = [
  {scale: 1, origin: [0.5, 0.5]},
  {scale: 3, origin: [0.6, 1]},
  {scale: 1, origin: [0.5, 0.5]},
  {scale: 2, origin: [0.8, 0.4]}
];

// now loop through each section and create the ScrollTrigger accordingly.
// when that section enters from either direction, it'll fire off the zoom animation.
gsap.utils.toArray("section").forEach((section, index) => {
  const zoom = zoomData[index];
  ScrollTrigger.create({
    trigger: section,
    start: "top 85%",
    end: "+=125%",
    onToggle(self) {
      if (self.isActive) { // if it enters forward or backward
        gsap.effects.zoom(".photo", {
          scale: zoom.scale,
          origin: zoom.origin,
          duration: 1,
          ease: "power1.inOut"
        });
      }
    }
  });
});




  })
  


  