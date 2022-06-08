let showpass = document.getElementById('PasswordButton');
let login = document.getElementById('LoginButton');

let homeimg = document.getElementById('Base-logos')

homeimg.onclick = function () {
    window.location.assign("../index.html");
}


/*Implementar oAuth y Strapi*/

showpass.onclick = function () {
    if (document.getElementById('PasswordButton').innerHTML == 'show'){
        document.getElementById('PasswordButton').innerHTML =  'hide';
        document.getElementById('Pasword').setAttribute('type','text');
        }
    else {
        document.getElementById('PasswordButton').innerHTML = 'show';
        document.getElementById('Pasword').setAttribute('type','password');
        }
}

function validador(user, password){
    /*Logica validada, lo que queda ahora es consultar los datos de login contra una DB*/
    if(user == 'francisco' && password == '123'){
        return true;
    } else {
        return false;
    }
}

login.onclick = function () {
    let user = document.getElementById("userId").value;
    let password = document.getElementById("Pasword").value;
    if (user == ''){
        alert('User required')
    }
    if (password == ''){
        alert('You must add an password')
    }
    if (validador(user,password) == true){
        alert('Login valido')
        window.location.replace("http://www.w3schools.com");
    } else {
        alert('User/Pass incorrect')
    }
}



