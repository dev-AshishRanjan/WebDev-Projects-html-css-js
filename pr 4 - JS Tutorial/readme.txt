from youtube
video: Build Glass Website with HTML and CSS Tutorial
channel : Dev Ed

website is built like Glass.
1.give background linear-gradient of light colors 
2.backdrop-filter: blur(1rem);
3.give alpha to every colors



#moving wrt parent
parent{
    position:relative;
}
child{
    position:absolute;
    top:10%;
    left:10%;
}



#clipping a div
-webkit-background-clip: text;   /* clips only to text*/



#creating background filled text
div{
-webkit-background-clip: text;   /* clips only to text*/
-webkit-text-fill-color: transparent;
}