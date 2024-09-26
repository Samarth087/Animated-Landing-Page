// locomotive js
const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});
//------------------------------------
//moving cursor

function movingCursor(xscale,yscale){
    window.addEventListener("mousemove", function(dets){
        document.querySelector(".cursor").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
    })
}

movingCursor()

//hero page animation

function heroPageAnim(){
    tl = gsap.timeline();

    tl.from("nav", {
        y: -10,
        opacity:0,
        ease: Expo.easeInOut,
        duration:1.5
    });
    
    tl.to(".bounding-elem", {
        y:0,
        ease: Expo.easeInOut,
        duration: 2,
        stagger: .2,
        delay:-1
    });

    tl.from(".heroFooter", {
        y:-10,
        opacity:0,
        ease: Expo.easeInOut,
        duration:1.5,
        delay:-1.2
    })

}

heroPageAnim();

// mouse ko skew karne ka program

let timeout;    

function circleChaptaKaro(){
    // default scale 
    let xscale = 1;
    let yscale = 1;

    let xprev = 0;
    let yprev = 0;

    window.addEventListener("mousemove", function(dets){
        this.clearTimeout(timeout);
        
        let xdiff = dets.clientX - xprev;
        let ydiff = dets.clientY - yprev;

        xscale = gsap.utils.clamp(.8,1.2,xdiff);
        yscale = gsap.utils.clamp(.8,1.2,ydiff);
        xprev= dets.clientX;
        yprev = dets.clientY;

        movingCursor(xscale, yscale);
      
        timeout = setTimeout(function(){
            document.querySelector(".cursor").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;

        }, 10);
    });

}

circleChaptaKaro();


// second page animation

document.querySelectorAll('.elem')
.forEach(function(elem){

    var rotate = 0;
    var diffrot = 0;
    elem.addEventListener("mousemove", function(dets){
       var diff = dets.clientY - elem.getBoundingClientRect().top;
        diffrot = dets.clientX - rotate;
        rotate = dets.clientX
        gsap.to(elem.querySelector("img"), {
            opacity:1,
            ease: Power1,
            top: diff,
            left: dets.clientX,
            rotate: gsap.utils.clamp(-20, 20, diffrot *0.8)
        })

    })

    elem.addEventListener("mouseleave", function(dets){
        
         gsap.to(elem.querySelector("img"), {
             opacity:0,
             ease: Power3,
             duration: 0.5,
         })
 
     })
})

