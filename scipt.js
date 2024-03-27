
const h1= document.querySelector('h1');
const input1= document.querySelector('#calculo1')

// de esta forma tambien se pueden llamar 
//const input1= document.getElementById('calculo1')

const input2= document.querySelector('#calculo2')

// de esta forma tambien se pueden llamar 
// const input2= document.getElementById('calculo2')

const btn= document.querySelector('#btnCalcular')
// de esta forma tambien se pueden llamar 
// const btn= document.getElementById('btnCalcular')

const pResult= document.querySelector('#result')

btn.addEventListener('click',btnOnClick);

function btnOnClick (){
    
    const sumaInputs = (parseInt(input1.value) + parseInt(input2.value) );
    // al poner parseInt antes del input1.value convierto el estring a numero
    pResult.innerText = "La suma de " + input1.value + " y " + input2.value + " es : " + sumaInputs;
}