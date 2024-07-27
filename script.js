
  document.body.addEventListener("pointermove", (e)=>{
    const { currentTarget: el, clientX: x, clientY: y } = e;
    const { top: t, left: l, width: w, height: h } = el.getBoundingClientRect();
    el.style.setProperty('--posX',  x-l-w/2);
    el.style.setProperty('--posY',  y-t-h/2);
  }
 
    $(document).ready(function(){

        $(window).scroll(function(){
            if( $(this).scrollTop() > 0 ){
                $('header').addClass('header2');
            } else {
                $('header').removeClass('header2');
            }
        });
      
  }
)
