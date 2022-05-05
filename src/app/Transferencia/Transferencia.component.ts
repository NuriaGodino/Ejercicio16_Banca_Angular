import { Component, OnInit } from '@angular/core';
import { BancaService } from '../service/banca.service';

@Component({
  selector: 'app-Transferencia',
  templateUrl: './Transferencia.component.html',
  styleUrls: ['./Transferencia.component.css']
})
export class TransferenciaComponent implements OnInit {

  origen:number
  destino:number
  cantidad:number

  constructor(private service:BancaService) { }

  transferencia(){
    this.service.transferencia(this.origen, this.destino, this.cantidad).subscribe()
  }

  ngOnInit() {
  }

}
