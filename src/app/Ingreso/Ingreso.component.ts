import { Component, OnInit } from '@angular/core';
import { BancaService } from '../service/banca.service';

@Component({
  selector: 'app-Ingreso',
  templateUrl: './Ingreso.component.html',
  styleUrls: ['./Ingreso.component.css']
})
export class IngresoComponent implements OnInit {

  numeroCuenta:number
  cantidad:number

  constructor(private service:BancaService) { }

  ingreso(){
    this.service.ingreso(this.numeroCuenta, this.cantidad).subscribe()
  }

  ngOnInit() {
  }

}
