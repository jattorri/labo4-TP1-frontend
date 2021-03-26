import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { IndexComponent } from './components/index/index.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import {EmpresaServiceService} from './services/empresa-service.service';
import { EmpresaComponent } from './components/empresa/empresa.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IndexComponent,
    DetalleComponent,
    EmpresaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
  ],
  providers: [EmpresaServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
