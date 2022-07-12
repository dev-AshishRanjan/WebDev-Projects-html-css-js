count = 0;
function dropdown(){
    if(count%2 ==0){
        document.querySelector(".menu ul").style.display = "flex";
        document.querySelector(".menu ul").style.flex = "flex";
        document.querySelector(".menu ul").style.flexDirection = "column";
        document.querySelector(".bars").style.color = "red";
        document.querySelector(".bars").style.transform = "rotate(90deg)";
        document.querySelector("#navbar").style.gridTemplateColumns = "1fr 3fr 1fr";
    }
    else{
        document.querySelector(".menu ul").style.display = "none";
        document.querySelector(".bars").style.color = "black";
        document.querySelector(".bars").style.transform = "rotate(180deg)";
    }
    count +=1;
}
let num = 0;
function animation_home(){
    document.querySelector("body").style.background = `linear-gradient(${num%360}deg,rgba(0, 0, 0, 0.508),rgba(255, 255, 255, 0.388)),url("./images/taylor-brandon-3HmP1kOdACU-unsplash.jpg") no-repeat center center / cover`;
    num +=1;
}
setInterval(animation_home,10);

let search =0;
function searchbar(){
    if(search%2 ==0){
        document.querySelector("#search").style.display = "block";
    }
    else{
        document.querySelector("#search").style.display = "none";
    }
    search +=1;
}