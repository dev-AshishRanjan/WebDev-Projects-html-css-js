const tl = gsap.timeline({defaults:{ease:"power1.out"}});
gsap.registerPlugin(MotionPathPlugin);
// var flightPath={
//     // curviness
//     curviness: 1.5, //if eual to zero then motion will be sharp angled
//     autoRotate:true,
//     values:[
//         {x:-100,y:-20}
//     ]
// };



tl.to(".plane",{
    duration:5,
    yoyo:true,
    // repeat:-1,
    motionPath:{
        path:[{x:100,y:-20},{x:300,y:10},{x:500,y:100},{x:750,y:-100},{x:350,y:-50},{x:600,y:100},{x:800,y:0},{x:window.innerWidth,y:0}],
        autoRotate:true,
        curviness:1.25
    }
})


// scrollmagic
const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    triggerElement: ".animation",
    duration:5000,
    triggerHook:0,
})
.setTween(tl)
.addIndicators()
.addTo(controller)
.setPin(".animation")

// tl.to(".plane",{x:"-100%",duration:2});


// const tween = new TimelineLite();
// tween.add(
//     TweenLite.to(".plane",1,{
//         bezier:flightPath,
//         ease:power1.out
//     })
// )

// gsap.to(".plane", {
//     duration: 5, 
//     repeat: 12,
//     repeatDelay: 3,
//     yoyo: true,
//     ease: "power1.easeInOut",
//     motionPath:{
//         path: [{x:100,y:-20}],
//         align: [{x:100,y:-20}],
//         autoRotate: true,
//         alignOrigin: [0.5, 0.5]
//     }
//   });