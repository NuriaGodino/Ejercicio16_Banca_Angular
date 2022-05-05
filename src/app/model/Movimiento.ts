import { Cuenta } from "./Cuenta"

export class Movimiento{
    idMovimient:number
    idCuenta:Cuenta
    fecha:Date
    cantidad:number
    operacion:number
}