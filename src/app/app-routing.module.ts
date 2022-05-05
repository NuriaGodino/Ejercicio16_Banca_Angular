import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusquedaComponent } from './Busqueda/Busqueda.component';
import { ExtraccionComponent } from './Extraccion/Extraccion.component';
import { IngresoComponent } from './Ingreso/Ingreso.component';
import { TransferenciaComponent } from './Transferencia/Transferencia.component';

const routes: Routes = [
  {
    path:'ingreso',
    component:IngresoComponent
  },
  {
    path:'extraccion',
    component:ExtraccionComponent
  },
  {
    path:'transferencia',
    component:TransferenciaComponent
  },
  {
    path:'busqueda',
    component:BusquedaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
