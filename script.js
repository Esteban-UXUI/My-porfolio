// Espera a que el DOM se cargue completamente
document.addEventListener('DOMContentLoaded', function() {
    // Aquí puedes agregar tus scripts de JavaScript
    console.log('El DOM ha sido completamente cargado.');
    // Ejemplo: Cambiar el texto de la primera sección después de 3 segundos
    setTimeout(function() {
      document.querySelector('.content').textContent = 'Contenido actualizado con JavaScript.';
    }, 3000);
  });
  document.body.addEventListener("pointermove", (e)=>{
    const { currentTarget: el, clientX: x, clientY: y } = e;
    const { top: t, left: l, width: w, height: h } = el.getBoundingClientRect();
    el.style.setProperty('--posX',  x-l-w/2);
    el.style.setProperty('--posY',  y-t-h/2);
  })