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

const validador = async (user, password) =>{
    /*Logica validada, lo que queda ahora es consultar los datos de login contra una DB*/
    /*if(user == 'francisco' && password == '123'){
        return true;
    } else {
        return false;
    }*/
    console.log('se ingresa a validador')
    try {
        let response = await fetch('http://localhost:4001/route', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: [user, password]
        });
        let data = await response.json();
        if (response.ok){
            console.log(data)
            return true;
        }
    } catch (error){
        // TODO: Manejor de errores
        console.log(error);
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
   validador(user,password);
}



