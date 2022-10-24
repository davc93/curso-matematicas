import './style.css'

console.log('TS funcionando')

function precioConDescuento(precio:number, descuento:number) {
  
  return precio * (100 - descuento)/100
}

const perimetroCuadrado = (lado:number) => {
  
  return lado*4
}

const areaCuadrado = (lado:number) => {

  return (lado*lado)
}

const perimetroTriangulo = (lado1: number,lado2: number,lado3: number) => {

  return (lado1+lado2+lado3)
}

const areaTriangulo = (base:number,altura:number) => {
  return (base*altura/2)
}

const calcularTriangulo = (lado1:number, lado2:number, base:number,altura:number) =>{
  const perimetro = perimetroTriangulo(lado1,lado2,base);
  const area = areaTriangulo(base,altura);

  return {
    perimetro,
    area
  }

}
function circunferencia(radio:number) {
  return Math.PI*radio*2
}
function areaCirculo(radio:number) {
  return radio*radio*Math.PI
}
function calcularAlturaTriangulo(lado1:number, base:number) {
  if (lado1 == base) {
    console.warn('Este no es un triángulo isosceles');
  } else {
    // h = raizcuadrada(lado1**2 - (b**2)/4)
    return Math.sqrt( (lado1 ** 2) - ( (base ** 2) ) / 4 );
  }
}


console.group('cuadrado')
console.log(areaCuadrado(1))
console.log(perimetroCuadrado(1))
console.groupEnd()

console.group('circulo');
console.log(areaCirculo(4))
console.groupEnd()

console.group('descuentos')
console.log(precioConDescuento(200,20));
console.groupEnd();



const descuentos = document.querySelector('#descuentos')
console.log(descuentos)


const calcularDescuento= (event:any) => {
  event.preventDefault()
  const price = event.target.precio.value
  const descuento = event.target.descuento.value
  console.log(price,descuento)

  if(!price || !descuento){
    console.log('error no hay valores')
    event.target.querySelector('.message').innerHTML = 'No ingresaste ningun valor'

  } else {
    event.target.querySelector('.message').innerHTML = `El precio con descuento es ${precioConDescuento(price,descuento)}`

  }



}

descuentos?.addEventListener('submit',calcularDescuento)