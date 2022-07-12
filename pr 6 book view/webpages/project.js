let stars=document.getElementById("stars");
let moon=document.getElementById("moon");
let bg_cloud=document.getElementById("bg_cloud");
let bg_cloud2=document.getElementById("bg_cloud2");
let text=document.getElementById("text");
let btn_home=document.getElementById("btn_home");
let cloud1=document.getElementById("cloud1");
let cloud2=document.getElementById("cloud2");
let cloud3=document.getElementById("cloud3");

// prallex effect
window.addEventListener("scroll",()=>{
    let val= window.scrollY;
    console.log(val);
    moon.style.top =val*1.05 +"px";
    bg_cloud.style.left =val*0.75+"px";
    bg_cloud2.style.right =val*0.75+"px";
    btn_home.style.marginTop =val*0.75+"px";
    text.style.marginTop =val*0.75+"px";
})
