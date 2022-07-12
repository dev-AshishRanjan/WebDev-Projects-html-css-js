.main .card{
    position: relative;
    width: 320px;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 40px 30px;
    transition: 0.5s;
    /* background: red; */
}
.main .card::before{
    content: "";
    position: absolute;
    top: 0;
    left: 50px;
    width: 50%;
    height: 100%;
    background: #fff;
    border-radius: 1rem;
    transform: skewX(15deg);
    transition: 0.5s;
}
.main .card::after{
    content: "";
    position: absolute;
    top: 0;
    left: 50px;
    width: 50%;
    height: 100%;
    background: #fff000;
    border-radius: 1rem;
    transform: skewX(15deg);
    transition: 0.5s;
    filter: blur(30px);
}

###this creates neon effect/glowing effect.

###some colors

red-#ff0058
yellow-#ffbc00
blue- #03a9f4
green - #4dff03
skyblue- #00d0ff