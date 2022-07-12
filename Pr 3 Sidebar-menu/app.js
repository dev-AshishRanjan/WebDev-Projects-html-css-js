let bg =0;
function toogle_bg(){
    if(bg%5 ==0){
        document.querySelector("body").style.background=" url('./images/nature.jpg') no-repeat center center / cover";
    }
    else if(bg%5 ==1){
        document.querySelector("body").style.background=" url('./images/sunset.jpg') no-repeat center center / cover";
    }
    else if(bg%5 ==2){
        document.querySelector("body").style.background=" url('./images/landscape.jpg') no-repeat center center / cover";
    }
    else if(bg%5 ==3){
        document.querySelector("body").style.background=" url('./images/sunset2.jpg') no-repeat center center / cover";
    }
    else{
        document.querySelector("body").style.background=" url('./images/church.jpg') no-repeat center center / cover";
    }
    bg +=1;
}

// function toogle_side_menu(){
//     document.querySelector(".side-nav").style.width="100px";
//     document.querySelector(".side-nav").style.height="60%";

//     document.querySelector(".logo i").style.width="50px";
//     document.querySelector(".logo i").style.margin="0px";
//     document.querySelector(".logo i").style.marginBottom="10px";
//     document.querySelector(".logo i").style.fontSize="3rem";

//     document.querySelectorAll(".hide").style.display="none";
// }

// const tl = gsap.timeline({defaults:{ease:"power1.easeInOut"}});
// tl.to(".fa-fan",{rotation:360 ,duration:1,repeat:5});
// tl.fromTo(".anime1",{opacity:1},{opacity:0 ,duration:1,repeat:5,yoyo:true},"-=5");