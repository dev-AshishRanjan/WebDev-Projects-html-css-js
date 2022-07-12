var upperValue="";
var baseVal=0;
var baseValRepeat=0;
function updateValue(val){
    if (val == "C" || val == "Escape"){
        upperValue=""
        document.querySelector(".upperScreen").innerHTML= `${upperValue}`;
        document.querySelector(".lowerScreen").innerHTML= `${upperValue}`;
    }
    else if(val == "B" || val == "Backspace"){
        upperValue=upperValue.slice(0,-1);
        document.querySelector(".upperScreen").innerHTML= `${upperValue}`;
    }
    else if(val == "base"){
        if (baseVal == 0 && baseValRepeat==0){
            upperValue= "+" + upperValue;
            document.querySelector(".upperScreen").innerHTML= `${upperValue}`;
            baseVal=1;
        }
        else if (baseVal == 0 && baseValRepeat==1){
            upperValue= "+" + upperValue.slice(1);
            document.querySelector(".upperScreen").innerHTML= `${upperValue}`;
            baseVal=1;
        }
        else{
            upperValue= "-" + upperValue.slice(1);
            document.querySelector(".upperScreen").innerHTML= `${upperValue}`;
            baseVal=0;
            baseValRepeat=1;
        }
    }
    else if(val == "=" || val == "Enter"){
        try{
            document.querySelector(".lowerScreen").innerHTML= eval(`${upperValue}`);
        }
        catch(e){
            document.querySelector(".lowerScreen").innerHTML="Error";
            alert(e);
        }
    }
    else{
        upperValue=upperValue.concat(val)
        document.querySelector(".upperScreen").innerHTML= `${upperValue}`;
    }
    // console.log(upperValue);
}
const keyEvent=[0,1,2,3,4,5,6,7,8,9,'Escape','Backspace','Enter','+','-','/','*','.','=']
document.addEventListener("keydown",(event)=>{
    // console.log(event.key);
    for(keys of keyEvent){
        if(event.key == keys){
            updateValue(event.key);
        }
    }
})