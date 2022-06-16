let login = document.getElementById('LoginButton');
let fvc = document.getElementById('fvc');
let aboutus = document.getElementById('aboutus');
let homeimg = document.getElementById('image-container');
let contactus = document.getElementById('contactus');
const contactform = document.getElementById('contactform');
let submitButton = document.getElementById('SubmitButton');
let burgermenu = document.getElementById('burger-menu');
let solutionsdropdown = document.getElementById('solutiondropdown');
let contacts = [];

const sendContact = function(ev){
    ev.preventDefault();
    ev.stopPropagation();
    let name = document.getElementById('first-name').value;
    let lastname = document.getElementById('last-name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let comapany = document.getElementById('company-name').value;
    let role = document.getElementById('role').value;
    let needs = document.getElementById('detail').value;
    alert(`Thanks ${name} we will contact you briefly`)
}


window.onload = function(){
    login.onclick = function () {
        window.location.assign("./ModuloLogin/login.html");
    }
    
    homeimg.onclick = function () {
        window.location.assign("./index.html");
    }
    
    aboutus.onclick = function () {
        window.location.assign("./aboutus.html");
    }
    
    if(contactus != null){
        contactus.onclick = function () {
            console.log("se ingresa a flujo contact")
            window.location.assign("./contactus.html");
        }
    }

    if (submitButton != null) {
        submitButton.addEventListener('click',sendContact);
    }

    if (fvc != null){
        fvc.onclick = function () {
        window.location.assign("https://www.linkedin.com/in/francisco-vergara-cruz-48425743/");
    }}

    burgermenu.onclick = function () {
        if (document.getElementById("burgeroptions").style.display == "flex")
        {
             document.getElementById("burgeroptions").style.display = "none"
        } else document.getElementById("burgeroptions").style.display = "flex";
    }

    solutionsdropdown.onclick = function () {
        console.log("se cargo")
        if (document.getElementById("solitionsdropdown").style.display == "flex")
        {
             document.getElementById("solitionsdropdown").style.display = "none"
        } else document.getElementById("solitionsdropdown").style.display = "flex";
    }
}


