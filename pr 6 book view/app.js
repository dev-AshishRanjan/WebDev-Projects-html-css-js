// selection elements on dom
const body = document.querySelector(".body");
const navbar = document.querySelector(".navbar");
const home = document.querySelector("#home");
const contact = document.querySelector("#contact");
const page_1 = document.querySelector("#page-1");
const page_2 = document.querySelector("#page-2");
const page_3 = document.querySelector("#page-3");

const one = document.querySelector(".header #one");
const two = document.querySelector(".header #two");
const three = document.querySelector(".header #three");
const four = document.querySelector(".header #four");
const five = document.querySelector(".header #five");

// scrollmagic
const controller = new ScrollMagic.Controller();

let scene= new ScrollMagic.Scene({
    duration:150*(5/2),
    triggerElement:body,
    triggerHook:0
})
// .addIndicators()
.setPin(body)
.addTo(controller);

let scrollpos = 0;
const tl= gsap.timeline({defaults:{ease:"power1.out"}});

scene.on("update",e=>{      
    scrollpos = e.scrollPos/(30*(5/2)); 
    console.log(e);
    if(scrollpos <=1){
        home.style.display="flex";
        navbar.style.display="none";
        page_1.style.display="none";
        page_2.style.display="none";
        page_3.style.display="none";
        contact.style.display="none";

        one.style.display="block";
        two.style.display="none";
        three.style.display="none";
        four.style.display="none";
        five.style.display="none";

        tl.to(navbar,{opacity:0,duration:0.001});
        tl.to(home,{top:"12%",duration:0.0001});
        tl.to(page_1,{top:"100%",duration:0.0001});
    }
    else if(scrollpos >1 &&scrollpos <=2){
        home.style.display="none";
        navbar.style.display="flex";
        page_1.style.display="block";
        page_2.style.display="none";
        page_3.style.display="none";
        contact.style.display="none";

        one.style.display="none";
        two.style.display="block";
        three.style.display="none";
        four.style.display="none";
        five.style.display="none";

        tl.to(navbar,{opacity:1,duration:0.001});
        tl.to(home,{top:"-100%",duration:0.0001});
        tl.to(page_2,{top:"100%",duration:0.0001});
        tl.to(page_1,{top:"12%",yoyo:true,duration:0.0001});
    }
    else if(scrollpos >2 &&scrollpos <=3){
        home.style.display="none";
        page_1.style.display="none";
        page_2.style.display="block";
        page_3.style.display="none";
        contact.style.display="none";

        one.style.display="none";
        two.style.display="none";
        three.style.display="block";
        four.style.display="none";
        five.style.display="none";

        tl.to(page_1,{top:"-100%",duration:0.0001});
        tl.to(page_3,{top:"100%",duration:0.0001});
        tl.to(page_2,{top:"12%",yoyo:true,duration:0.0001});
    }
    else if(scrollpos >3 &&scrollpos <=4){
        home.style.display="none";
        page_1.style.display="none";
        page_2.style.display="none";
        page_3.style.display="block";
        contact.style.display="none";

        one.style.display="none";
        two.style.display="none";
        three.style.display="none";
        four.style.display="block";
        five.style.display="none";

        tl.to(page_2,{top:"-100%",duration:0.0001});
        tl.to(contact,{top:"100%",duration:0.0001});
        tl.to(page_3,{top:"12%",yoyo:true,duration:0.0001});
    }
    else {
        home.style.display="none";
        page_1.style.display="none";
        page_2.style.display="none";
        page_3.style.display="none";
        contact.style.display="flex";

        one.style.display="none";
        two.style.display="none";
        three.style.display="none";
        four.style.display="none";
        five.style.display="block";

        tl.to(page_3,{top:"-100%",duration:0.0001});
        tl.to(contact,{top:"12%",yoyo:true,duration:0.0001});
    }
});


// circle motion in contact form
circle=document.getElementsByClassName("circle");
// console.log(circles);


setTimeout(()=>{
    for (ci of circle){
        ci.style.left=`${Math.random()*100}vw`;
        ci.style.top=`${Math.random()*100}vh`;
    }
},100);

setInterval(()=>{
    for (ci of circle){
        ci.style.display="block";
        ci.style.left=`${Math.random()*100}vw`;
        ci.style.top=`${Math.random()*100}vh`;
    }
},20000)

// background motion in contact form
let contact_bg = 0;
let num=0;
var body2 = document.querySelector(".body2").style.background;
function change_bg(){
    if(num%2==0){
        document.querySelector(".body2").style.background=`linear-gradient(45deg,rgb(${contact_bg%256}, 125, 147),rgb(255, ${contact_bg%256}, 147),rgb(255, 125, ${contact_bg%256}))`;
        contact_bg += 1;
    }
    else{
        document.querySelector(".body2").style.background=`linear-gradient(45deg,rgb(${contact_bg%256}, 125, 147),rgb(255, ${contact_bg%256}, 147),rgb(255, 125, ${contact_bg%256}))`;
        contact_bg -= 1;
    }
    if(contact_bg%255==0){
        num +=1;
    }

    

    console.log(contact_bg);
}
setInterval(change_bg,300);




//raindrops
circles=document.getElementsByClassName("raindrop");
// console.log(circles);
for (el of circles){
    el.style.display="block";
    el.style.left=`${Math.random()*100}vw`;
    a=7+Math.random()*10;
    tl.to(el,{y:"105vh",duration:a,repeat:-1},"circles");
}


// intro animation
const tl2= gsap.timeline({defaults:{ease:"power1.easeIn"}});
tl2.to(".intro p",{y:"0%",duration:2,stagger:1});
tl2.to(".shutter-1",{y:"-100%",duration:1,delay:1});
tl2.to(".shutter-2",{y:"-100%",duration:1,delay:1});
tl2.to(".intro",{y:"-100%",duration:1,delay:0.3});



// setInterval(()=>{
//     delay += (scrollpos-delay) * accelamount;
//     console.log(scrollpos);

//     // video.currentTime = delay;
// },33.3);


// //Animation-1
// const tl= gsap.timeline({defaults:{ease:"power4.easeInOut"}});
// const pg1_animation = tl.fromTo(page_1,{top:"100%"},{top:"0%",duration:1});

// let scene2 = new ScrollMagic.Scene({
//     duration:500,
//     triggerElement:page_1,
//     triggerHook:0
// })
// .setTween(pg1_animation)
// .setPin(page_1)
// .addIndicators()
// .addTo(controller);
// //Animation-2
// const pg2_animation = tl.fromTo(page_2,{top:"100%"},{top:"0%",duration:1});

// let scene3 = new ScrollMagic.Scene({
//     duration:500,
//     triggerElement:page_2,
//     triggerHook:0
// })
// .setTween(pg2_animation)
// .setPin(page_2)
// .addIndicators()
// .addTo(controller);
// //Animation-3
// const pg3_animation = tl.fromTo(page_3,{top:"100%"},{top:"0%",duration:1});

// let scene4 = new ScrollMagic.Scene({
//     duration:500,
//     triggerElement:page_3,
//     triggerHook:0
// })
// .setTween(pg3_animation)
// .setPin(page_3)
// .addIndicators()
// .addTo(controller);
// //Animation-4
// const pg4_animation = tl.fromTo(contact,{top:"100%"},{top:"0%",duration:1});

// let scene5 = new ScrollMagic.Scene({
//     duration:500,
//     triggerElement:contact,
//     triggerHook:0
// })
// .setTween(pg4_animation)
// .setPin(contact)
// .addIndicators()
// .addTo(controller);