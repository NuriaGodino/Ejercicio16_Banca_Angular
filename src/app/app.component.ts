import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BancaEntregable';ç

  constructor(private router:Router){

  }

  routerIngreso(){
    this.router.navigate(['/ingreso'])
  }

  routerExtraccion(){
    this.router.navigate(['/extraccion'])
  }

  routerTransferencia(){
    this.router.navigate(['/transferencia'])
  }

  routerBusqueda(){
    this.router.navigate(['/busqueda'])
  }
}
