// submitting a form on email

//process
//get smtp.js link :  https://smtpjs.com/v3/smtp.js
// create a function and copy paste the getting started code from smtp.js website
// call this function when submit the form
// in form tag write onsubmit = function ; reset();return false;
// provide smtp server,username,password.
// for learning purpose we will use : gmail smtp server
// host:"smtp.gmail.com"
// username: "elasticemail_id"
// password : "elasticemail_password"

// for server::
// in elasticemail configure your domain
// from smtp.js get securetoken by entering hostname,username,password,domain.
// use Securetoken:" enter what you got ".


function sendEmail(){
    Email.send({
        SecureToken:"f719059d-75e4-46d1-becc-5cfb5653225c ",
        To : 'yellowsingh4971@gmail.com',     //where we will receive email
        From : document.getElementById("email").value,      //take email inserted by user
        Subject : "contacting from protofolio",          //subject that will be shown in email
        Body : "First Name : "+ document.getElementById("fname").value
            +"<br>Last Name: "+ document.getElementById("lname").value
            +"<br>Email: "+ document.getElementById("email").value
            +"<br>Phone No. : "+ document.getElementById("phone").value
            +"<br>Message: "+ document.getElementById("message").value
    }).then(
      message => alert(message)
    );
}
