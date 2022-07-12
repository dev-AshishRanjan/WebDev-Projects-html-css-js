const tl=gsap.timeline({defaults:{ease:"power1.out"}});
tl.to(".loadImg",{rotation:-360,duration:3,ease:"linear"},"load");
tl.fromTo(".loadLogo",{scale:0},{scale:1,duration:3},"load");
tl.to(".load",{y:"-105%",duration:2,delay:1})
tl.to("#chakra",{rotation:360,duration:10,delay:1,repeat:-1,ease:"linear"},"load");
tl.to("#sec_2_chakra",{rotation:360,duration:20,delay:1,repeat:-1,ease:"linear"},"load");

setTimeout(()=>{
    document.querySelector(".main").style.display="block";
},4000)

// document.querySelector("#cloud1").style.left=`${Math.random()*100}%`;
// document.querySelector("#cloud1").style.top=`${Math.random()*5}%`;
// document.querySelector("#cloud2").style.left=`${Math.random()*100}%`;
// document.querySelector("#cloud2").style.top=`${Math.random()*5}%`;
// document.querySelector("#cloud3").style.left=`${Math.random()*100}%`;
// document.querySelector("#cloud3").style.top=`${Math.random()*5}%`;
// tl.to("#cloud1",{x:"-300%",duration:50},"load");
// setInterval(()=>{
//     document.querySelector("#cloud1").style.top=Math.random()*20;
//     tl.to("#cloud1",{x:"-300%",duration:50},"load");
// },50000);