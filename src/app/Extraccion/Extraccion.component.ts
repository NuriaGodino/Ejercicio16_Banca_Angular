import { Component, OnInit } from '@angular/core';
import { BancaService } from '../service/banca.service';

@Component({
  selector: 'app-Extraccion',
  templateUrl: './Extraccion.component.html',
  styleUrls: ['./Extraccion.component.css']
})
export class ExtraccionComponent implements OnInit {

  numeroCuenta:number
  cantidad:number

  constructor(private service:BancaService) { }

  extraccion(){
    this.service.extraccion(this.numeroCuenta, this.cantidad).subscribe()
  }

  ngOnInit() {
  }

}
