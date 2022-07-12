const tl=gsap.timeline({defaults:{ease:"power1.out"}});
tl.fromTo(".node-pong",{y:"-10%"},{duration:5,y:"10%",yoyo:true,repeat:-1});
tl.fromTo(".express-pong",{x:"-10%",opacity:0},{duration:5,x:"10%",opacity:1,yoyo:true,repeat:-1},"-=5");
tl.to(".react-pong",{duration:5,rotation:360 ,repeat:-1},"-=10");
tl.to("#circle-1-r",{duration:5,rotation:360 ,repeat:-1},"-=10");
tl.to("#circle-2-r",{duration:5,rotation:360 ,repeat:-1},"-=10");
tl.to("#circle-3-r",{duration:5,rotation:360 ,repeat:-1},"-=10");
// tl.fromTo("#circle-1-n",{y:"50%"},{duration:5,y:"-50%",yoyo:true ,repeat:-1},"-=10");
tl.fromTo("#circle-2-n",{y:"50%"},{duration:5,y:"-50%",yoyo:true ,repeat:-1},"-=10");
tl.fromTo("#circle-3-n",{y:"10%"},{duration:5,y:"-50%",yoyo:true ,repeat:-1},"-=10");
tl.fromTo("#circle-2-e",{x:"50%"},{duration:5,x:"-50%",yoyo:true ,repeat:-1},"-=15");
tl.fromTo("#circle-3-e",{x:"10%"},{duration:5,x:"-50%",yoyo:true ,repeat:-1},"-=15");
function react_logo(){
    interval=setInterval(react_anime,500);
    setTimeout(()=>{
        clearInterval(interval);
        document.querySelector(".react img").style.display="none";
    },5000);
    setTimeout(()=>{
        document.querySelector(".react img").style.top="50%";
        document.querySelector(".react img").style.left="74%";
        document.querySelector(".react img").style.display="block";
    },7000);
}
function react_anime(){
    document.querySelector(".react img").style.top=`${Math.random()*70}%`;
    document.querySelector(".react img").style.left=`${Math.random()*80}%`;
}
function express_logo(){
    document.querySelector(".express-pong").style.display="none";
    setTimeout(()=>{
        document.querySelector(".express-pong").style.display="block";
    },3000);
}
function node_logo(){
    document.querySelector(".node-pong").style.display="none";
    setTimeout(()=>{
        document.querySelector(".node-pong").style.display="block";
    },3000);
}

let invert=0;
function change_mode(){
    if(document.querySelector("*").style.filter !="invert(100%)"){
        document.querySelector("*").style.filter="invert(100%)";
    }
    else{
        document.querySelector("*").style.filter="invert(0%)";
    }
}