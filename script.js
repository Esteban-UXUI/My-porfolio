
  document.body.addEventListener("pointermove", (e)=>{
    const { currentTarget: el, clientX: x, clientY: y } = e;
    const { top: t, left: l, width: w, height: h } = el.getBoundingClientRect();
    el.style.setProperty('--posX',  x-l-w/2);
    el.style.setProperty('--posY',  y-t-h/2);

  })

  document.querySelector('.menu-toggle').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.nav-links').classList.toggle('active');
});
