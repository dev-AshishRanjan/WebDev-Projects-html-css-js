*0 dummy website : https://michalsnik.github.io/aos/

*1 link to aos github : https://github.com/michalsnik/aos 
*2 copy paste link tag :
    <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />

*3 copy paste the script tag:
    <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
    <script>
        AOS.init();
    </script>

** the script tag with some inits:
    <script>
        AOS.init({
            offset:250,
            duration:1000
        });
    </script>

*4 add the animation part in divs of html you want to animate eg, :
    <div class="card" data-aos="fade-up" >