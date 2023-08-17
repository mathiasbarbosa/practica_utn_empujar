let user = JSON.parse( localStorage.getItem('usuario'))
let data_perfil = document.querySelector('#data_perfil')
console.log(typeof user);
console.log(user.nombre);

function crearHtml(texto_username, texto_mail){
    let h1_username = document.createElement('h1')
    let h1_text = document.createTextNode(`Bienvenido ${texto_username}`)
    h1_username.appendChild(h1_text)
    
    let h2_mail = document.createElement('h2')
    let h2_text = document.createTextNode(`contacto: ${texto_mail}`)
    h2_mail.appendChild(h2_text)

    data_perfil.append(h1_username, h2_mail)
}

crearHtml(user.nombre, user.mail)