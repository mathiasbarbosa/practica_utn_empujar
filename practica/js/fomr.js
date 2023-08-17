
const form = document.querySelector('#form_register')
console.log(form);

// function submitForm(){

// }

// form.addEventListener('submit', submitForm)

// form.addEventListener('submit', function(){

// })

form.addEventListener('submit', (event) => {
    event.preventDefault()
    // console.log(event);
    // console.log(event.target[1].value);
    let username = document.querySelector('#name').value
    let mail = document.querySelector('#mail').value

    if (username !== '' && mail !== '') {
        let user = {
            nombre: username,
            mail,
        }    
        console.log(user);
        localStorage.setItem('usuario', JSON.stringify(user))
        window.location.href = '../pages/perfil.html'
    }else{
        alert('Completa los datos para poder registrarte ')
    }
    
    // console.log(username);
    // console.log(username.value);
    // let formData = new FormData(form)
    // console.log(formData.get('username'))
})