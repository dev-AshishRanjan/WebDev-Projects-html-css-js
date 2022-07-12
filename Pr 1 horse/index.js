function change_right(){
    document.querySelector(".gallarySection #one").style.background = " url(images/gallary1.jpg) no-repeat center center/cover";
    document.querySelector(".gallarySection #gallary").style.background = " url(images/gallary3.jpg) no-repeat center center/cover";
    document.querySelector(".gallarySection #three").style.background = " url(images/gallary2.jpg) no-repeat center center/cover" ;

    document.querySelector("#btn1 #right").style.width="20px";
    document.querySelector("#btn1 #right").style.backgroundColor="white";
    document.querySelector("#btn1 #right").style.borderRadius="20px";
    document.querySelector("#btn1 #mid").style.width="10px";
    document.querySelector("#btn1 #mid").style.backgroundColor="black";
    document.querySelector("#btn1 #mid").style.borderRadius="50%";
    document.querySelector("#btn1 #left").style.width="10px";
    document.querySelector("#btn1 #left").style.backgroundColor="black";
    document.querySelector("#btn1 #left").style.borderRadius="50%";

    // cards
    document.querySelector("#card-1").style.display="none";
    document.querySelector("#card-2").style.display="none";
    document.querySelector("#card-3").style.display="block";

}
function change_left(){
    document.querySelector(".gallarySection #one").style.background = " url(images/gallary3.jpg) no-repeat center center/cover";
    document.querySelector(".gallarySection #gallary").style.background = " url(images/gallary2.jpg) no-repeat center center/cover";
    document.querySelector(".gallarySection #three").style.background = " url(images/gallary1.jpg) no-repeat center center/cover" ;

    document.querySelector("#btn1 #left").style.width="20px";
    document.querySelector("#btn1 #left").style.backgroundColor="white";
    document.querySelector("#btn1 #left").style.borderRadius="20px";
    document.querySelector("#btn1 #mid").style.width="10px";
    document.querySelector("#btn1 #mid").style.backgroundColor="black";
    document.querySelector("#btn1 #mid").style.borderRadius="50%";
    document.querySelector("#btn1 #right").style.width="10px";
    document.querySelector("#btn1 #right").style.backgroundColor="black";
    document.querySelector("#btn1 #right").style.borderRadius="50%";

    // cards
    document.querySelector("#card-1").style.display="block";
    document.querySelector("#card-2").style.display="none";
    document.querySelector("#card-3").style.display="none";

}
function change_mid(){
    document.querySelector(".gallarySection #one").style.background = " url(images/gallary2.jpg) no-repeat center center/cover";
    document.querySelector(".gallarySection #gallary").style.background = " url(images/gallary1.jpg) no-repeat center center/cover";
    document.querySelector(".gallarySection #three").style.background = " url(images/gallary3.jpg) no-repeat center center/cover" ;

    document.querySelector("#btn1 #mid").style.width="20px";
    document.querySelector("#btn1 #mid").style.backgroundColor="white";
    document.querySelector("#btn1 #mid").style.borderRadius="20px";
    document.querySelector("#btn1 #left").style.width="10px";
    document.querySelector("#btn1 #left").style.backgroundColor="black";
    document.querySelector("#btn1 #left").style.borderRadius="50%";
    document.querySelector("#btn1 #right").style.width="10px";
    document.querySelector("#btn1 #right").style.backgroundColor="black";
    document.querySelector("#btn1 #right").style.borderRadius="50%";

    // cards
    document.querySelector("#card-1").style.display="none";
    document.querySelector("#card-2").style.display="block";
    document.querySelector("#card-3").style.display="none";

}
// document.querySelector("#btn1 #right").onclick = change1();


// let i=4

// setInterval(change_right,1000*i);
// setInterval(change_left,2000*i);
// setInterval(change_mid,3000*i);


// setInterval(()=>{
//     change_mid();
//     setInterval(()=>{
//         change_left();
//         setInterval(change_right,4000);
//     },8000)
// },12000)


let count=0;
function forever_change (){
    count++;
    if(count%3 == 1){
        change_right();
    }
    else if (count%3 == 2){
        change_left();
    }
    else{
        change_mid();
    }
}
setInterval(forever_change,5000);

