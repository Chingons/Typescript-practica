let mensaje:string = "Hola Mundo"

mensaje = "Edwin"
mensaje = "Bye Edwin"

console.log(mensaje)

let extincionDinosaurios:number = 76_000_000
let dinosaurioFavorito:string = "T-Rex"
let extintos = true

function prueba(x:number){
    return x
}

let animales: string[] = ['perro','gato','ave']
let nums: number[] = [5,1,0]
let checks: boolean[] = [true, false]
let nums2: Array<number> = []

let tupla:[number, string] = [1, 'perro']

let tupla2:[number, string[]] = [1, ['perro', 'gato']]

const chica = 's'
const mediana = 'm'
const grande = 'l'
const extraGrande = 'xl'

enum Talla {Chica = 's', Mediana = 'm', Grande = 'l', ExtraGrande = 'xl'}

const variable1 = Talla.Grande

const enum LoadingState {Idle, Loading, Success, Error}

const estado = LoadingState.Loading

type Direccion = { numero: number, calle: string, pais: string }

type Persona = {
    readonly id: number, nombre: string, talla: Talla, direccion: Direccion
}

const objeto: Persona = {id:1, nombre:'hola mundo', talla: Talla.Chica, direccion:{numero:1, calle:"primera", pais:"RD"}}

const arr: Persona[] = []


console.log(variable1)