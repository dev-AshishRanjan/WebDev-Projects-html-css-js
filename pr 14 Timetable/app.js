function inverse(){
    if(document.querySelector("*").style.filter!="invert(100%)"){
        document.querySelector("*").style.filter="invert(100%)";
    } else{
        document.querySelector("*").style.filter="invert(0%)";
    }
}

// card selecting
let date = new Date();
let day = date.getDay();
let time=date.getHours();
console.log(date,day,time);
let cards = document.querySelector(".cards");

if(day ==1){
    document.getElementById("mon").style.display="block";
    document.getElementById("tue").style.display="none";
    document.getElementById("wed").style.display="none";
    document.getElementById("thru").style.display="none";
    document.getElementById("fri").style.display="none";
    document.getElementById("holiday").style.display="none";
}
else if(day ==2){
    document.getElementById("mon").style.display="none";
    document.getElementById("tue").style.display="block";
    document.getElementById("wed").style.display="none";
    document.getElementById("thru").style.display="none";
    document.getElementById("fri").style.display="none";
    document.getElementById("holiday").style.display="none";
}
else if(day ==3){
    document.getElementById("mon").style.display="none";
    document.getElementById("tue").style.display="none";
    document.getElementById("wed").style.display="block";
    document.getElementById("thru").style.display="none";
    document.getElementById("fri").style.display="none";
    document.getElementById("holiday").style.display="none";
}
else if(day ==4){
    document.getElementById("mon").style.display="none";
    document.getElementById("tue").style.display="none";
    document.getElementById("wed").style.display="none";
    document.getElementById("thru").style.display="block";
    document.getElementById("fri").style.display="none";
    document.getElementById("holiday").style.display="none";
}
else if(day ==5){
    document.getElementById("mon").style.display="none";
    document.getElementById("tue").style.display="none";
    document.getElementById("wed").style.display="none";
    document.getElementById("thru").style.display="none";
    document.getElementById("fri").style.display="block";
    document.getElementById("holiday").style.display="none";
}
else{
    document.getElementById("mon").style.display="none";
    document.getElementById("tue").style.display="none";
    document.getElementById("wed").style.display="none";
    document.getElementById("thru").style.display="none";
    document.getElementById("fri").style.display="none";
    document.getElementById("holiday").style.display="block";
}

// card motion
const tl=gsap.timeline({defaults:{ease:"power1.easeIn"}});
tl.fromTo(".cards",{x:"-200%"},{x:"0%",duration:1},"same");
tl.to(".cards",{rotationY:360,scale:1.3,duration:1,repeat:1,yoyo:true},"same");
tl.to(".cards",{y:"10px",duration:2,repeat:-1,yoyo:true});

tl.to(".navbar>a>img",{rotation:360,duration:1,repeat:1});

// redirecting
// javascript approach
setTimeout(()=>{
    // location.assign("https://www.google.com");
    // location.href="https://www.google.com";
    window.open("https://www.google.com");   //opens on new tab
},5000)