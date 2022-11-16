const inputUsuario = document.getElementById('usuario-correo');
const inputContraseña = document.getElementById('contraseña');
const perro1 = document.getElementById('perro');
const body = document.querySelector('body');
let carafeliz = true;

inputContraseña.addEventListener('focus',()=>{
    carafeliz = false;
    let cont = 1;
    const caraenojao = setInterval(() => {
        monster.src = 'img/'+cont+'.png';
        if(cont < 10){
            cont++;
        }else{
            clearInterval(caraenojao);
        }
    }, 60);
})
