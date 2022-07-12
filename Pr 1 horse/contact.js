let num=0;
function toogle_bg(){
    if(num%4 ==0) {
        document.querySelector("body").style.background = "linear-gradient(45deg,rgba(255, 255, 0, 1),rgba(111, 0, 255, 1))";
    }
    else if(num%4 ==1){
        document.querySelector("body").style.background = "linear-gradient(gold,black)";
    } 
    else if(num%4 ==2 ){
        document.querySelector("body").style.background = "radial-gradient(green,black)";
    }
    else{
        document.querySelector("body").style.background = "linear-gradient(45deg,rgba(255, 0, 0, 0.164),rgba(0, 0, 255, 0.301)),url('./images/taylor-brandon-3HmP1kOdACU-unsplash.jpg') no-repeat center center / cover ";
    }
    num +=1;
    // document.querySelector("body").style.background = "linear-gradient(45deg,red,blue)";
    console.log(document.querySelector("body").style.background);
}
