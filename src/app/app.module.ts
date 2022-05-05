import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IngresoComponent } from './Ingreso/Ingreso.component';
import { ExtraccionComponent } from './Extraccion/Extraccion.component';
import { TransferenciaComponent } from './Transferencia/Transferencia.component';
import { BusquedaComponent } from './Busqueda/Busqueda.component';

@NgModule({
  declarations: [					
    AppComponent,
      IngresoComponent,
      ExtraccionComponent,
      TransferenciaComponent,
      BusquedaComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
