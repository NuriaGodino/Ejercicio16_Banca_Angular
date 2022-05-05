import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movimiento } from '../model/Movimiento';

@Injectable({
  providedIn: 'root'
})
export class BancaService {
  /*urlIngreso:string = "http://localhost:8080/16_Cajero/Ingreso"
  urlExtraccion:string = "http://localhost:8080/16_Cajero/Extraccion"
  urlTransferencia:string = "http://localhost:8080/16_Cajero/Transferencia"
  urlBusqueda:string = "http://localhost:8080/16_Cajero/MovimientoEntreFechas"*/

  urlIngreso:string = "Ingreso"
  urlExtraccion:string = "Extraccion"
  urlTransferencia:string = "Transferencia"
  urlBusqueda:string = "MovimientoEntreFechas"

  constructor(private http:HttpClient) { }

  ingreso(numeroCuenta:number, cantidad:number){
    return this.http.post<boolean>(`${this.urlIngreso}?numeroCuenta=${numeroCuenta}&cantidad=${cantidad}`, null)
  }

  extraccion(numeroCuenta:number, cantidad:number){
    return this.http.post<boolean>(`${this.urlExtraccion}?numeroCuenta=${numeroCuenta}&cantidad=${cantidad}`, null)
  }

  transferencia(origen:number, destino:number, cantidad:number){
    return this.http.post<boolean>(`${this.urlTransferencia}?origen=${origen}&destino=${destino}&cantidad=${cantidad}`, null)
  }

  busquedaEntreFechas(numeroCuenta:number, f1:string, f2:string){
    return this.http.get<Movimiento[]>(this.urlBusqueda, {params:{numeroCuenta:numeroCuenta, f1:f1, f2:f2}})
  }
}
