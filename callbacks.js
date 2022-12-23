setTimeout(() => {
    console.log('Hola Mundo, soy un callback que me ejecuto al pasar 3seg')
}, 3000)

const getUserById = (id, callback) => {
    const user = {
        id,
        nombre: 'Andrew Tate'
    }

    setTimeout( () => {
        callback(user);
    }, 1500)

}

getUserById(5, (user) => {
    console.log(user.id);
    console.log(user.nombre);
});