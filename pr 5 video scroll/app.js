// selection elements on dom
const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const text = intro.querySelector("h1");

const section = document.querySelector(".body");
const left_data = section.querySelector(".left");
const right_pic = section.querySelector(".right");

// scrollmagic
const controller = new ScrollMagic.Controller();

//scenes
let scene = new ScrollMagic.Scene({
    duration:15000,       // no of pixels,video length*1000
    triggerElement:intro,
    triggerHook:0
})
.addIndicators()   //our cdn
.setPin(intro)   //pinning a section
.addTo(controller);   //adding scene to controller


// text Animation
const tl= gsap.timeline({defaults:{ease:"power4.easeInOut"}});
const text_animation = tl.fromTo(text,{opacity:1},{opacity:0,duration:4.5});

let scene2 = new ScrollMagic.Scene({
    duration:4500,
    triggerElement:intro,
    triggerHook:0
})
.setTween(text_animation)
.addTo(controller);

//video animation
let accelamount = 0.1;  //ease effect of video is created using it
let scrollpos = 0;     //where we scroll is set to 0.
let delay =0;

scene.on("update",e=>{      //e is object
    scrollpos = e.scrollPos/1000;     //it gives length of video in sec.
    console.log(e)
})    //event listener , in vanilla javascript the change is here

setInterval(()=>{
    delay += (scrollpos-delay) * accelamount;
    console.log(scrollpos,delay);

    video.currentTime = delay;     //this plays the video
},33.3);     // 33.3 - duration/frame rate of your video

//if you dont want ease effact remove all delay and accelamount from the code. video.currentTime = scrollpos