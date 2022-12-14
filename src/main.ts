import './style.css'

console.log('TS funcionando')

function precioConDescuento(precio: number, descuento: number) {

  return precio * (100 - descuento) / 100
}

const perimetroCuadrado = (lado: number) => {

  return lado * 4
}

const areaCuadrado = (lado: number) => {

  return (lado * lado)
}

const perimetroTriangulo = (lado1: number, lado2: number, lado3: number) => {

  return (lado1 + lado2 + lado3)
}

const areaTriangulo = (base: number, altura: number) => {
  return (base * altura / 2)
}

const calcularTriangulo = (lado1: number, lado2: number, base: number, altura: number) => {
  const perimetro = perimetroTriangulo(lado1, lado2, base);
  const area = areaTriangulo(base, altura);

  return {
    perimetro,
    area
  }

}
function circunferencia(radio: number) {
  return Math.PI * radio * 2
}
function areaCirculo(radio: number) {
  return radio * radio * Math.PI
}
function calcularAlturaTriangulo(lado1: number, base: number) {
  if (lado1 == base) {
    console.warn('Este no es un triángulo isosceles');
  } else {
    // h = raizcuadrada(lado1**2 - (b**2)/4)
    return Math.sqrt((lado1 ** 2) - ((base ** 2)) / 4);
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
console.log(precioConDescuento(200, 20));
console.groupEnd();



const descuentos = document.querySelector('#descuentos')
console.log(descuentos)


const cupones = [
  {
    name: 'diego',
    descuento: 20
  },
  {
    name: 'diegote',
    descuento: 30
  },
  {
    name: 'davc93',
    descuento: 15
  },

]

const precioConCupon = (precio: number, cupon: any) => {

  return precio * (100 -cupon.descuento)/100
}


const calcularDescuento = (event: any) => {
  event.preventDefault()
  const price = event.target.precio.value
  const cupon = event.target.cupon.value
  console.log(price, cupon)

  if (!price || !cupon) {
    console.log('error no hay valores')
    event.target.querySelector('.message').innerHTML = 'No ingresaste cupon o precio'
    return

  }
  const matchedCupon = cupones.find((item) => cupon == item.name)
  if (matchedCupon) {

    event.target.querySelector('.message').innerHTML = `El precio te queda en ${precioConCupon(price, matchedCupon)}`

  } else {
    event.target.querySelector('.message').innerHTML = 'El cupon no existe'

  }



}

const calcularPromedio = (...values:number[]) => { 

  return values.reduce((previous,current)=>(previous+current),values[0])/values.length

}

const ordenarList = (lista:number[]) => {
  
  return lista.sort((a,b)=> a-b)
}

const calcularMediana = (...values:number[]) => {
  values = ordenarList(values)
  if(values.length%2 == 0){
    const mediana = (values[(values.length)/2] + values[(values.length)/2-1])/2
    return mediana
  } else {
    const mediana = values[(values.length-1)/2]
    return mediana
  }

}

type valor = string | number
const calcularModa = (...values: valor[])=>{
  const objeto:any = {};
  values.forEach((number)=>{
    if(objeto[number]){
      objeto[number] = objeto[number] + 1
    } else {
      objeto[number] = 1
    }
  })
  const moda = Object.entries(objeto).sort((a:any,b:any)=>a[1]-b[1])
  return moda.at(-1)
}
console.log(calcularModa(1,2,3,4,5,5,5,5,6,'a','a','a','a','a','a','a','a','a','a'))
descuentos?.addEventListener('submit', calcularDescuento)