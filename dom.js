let titulo = document.querySelector('h1')
/*modificar texto del elemento h1*/



let imagen= document.querySelector('.imagen')
let botton= document.querySelector('#cambiarImagen')
imagen.src = 'https://akamai.sscdn.co/gcs/cifra-blog/es/wp-content/uploads/2023/07/7a4783e-taylor-swift.webp'

botton.onclick = function (){
    if (verificar == false){
        titulo.innerText ='Hola'
        imagen.src= 'https://media.vogue.mx/photos/64e15be96e16315ea8208e2c/16:9/w_2992,h_1683,c_limit/taylor-swift-cantante.jpg'
    verificar = true
    }else{
        titulo.innerText = 'DOM'
imagen.src ='https://akamai.sscdn.co/gcs/cifra-blog/es/wp-content/uploads/2023/07/7a4783e-taylor-swift.webp'
   verificar = false
}
}


let botonRojo = document.querySelector ('#rojo')
let botonAzul = document.querySelector  ('#Azul')
let botonVerde = document.querySelector ('#verde')
let botonNegro = document.querySelector ('#negro ')
let botonTamaño = document.querySelector ('#tamaño')


let imagen1 = document.querySelector ('.imagen')
imagen1.stye.width = '500 px'

let aumento = 100
botonTamaño.onclick = function (){
    aumento = aumento + 10
    imagen1.style.width = aumento + 'px'
}









botonRojo.onclick = function (){
    titulo.style.color = 'red'
}

botonAzul.onclick = function (){
    titulo.style.color = 'blue'
} 

botonVerde.onclick = function (){
    titulo.style.color= 'green'
}

botonNegro.onclick = function (){
    titulo.style.color = 'black'
}

botonVerde.ondblclick = function (){
    alert('Presten atencion')
}

