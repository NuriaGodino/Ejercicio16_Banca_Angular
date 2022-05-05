import { Component, OnInit } from '@angular/core';
import { Movimiento } from '../model/Movimiento';
import { BancaService } from '../service/banca.service';

@Component({
  selector: 'app-Busqueda',
  templateUrl: './Busqueda.component.html',
  styleUrls: ['./Busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  numeroCuenta:number
  f1:string
  f2:string
  movimientos:Movimiento[]

  constructor(private service:BancaService) { }

  busquedaEntreFechas(){
    this.service.busquedaEntreFechas(this.numeroCuenta, this.f1, this.f2).subscribe(data => this.movimientos=data)
  }

  ngOnInit() {
  }

}
