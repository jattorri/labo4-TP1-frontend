import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import {EmpresaServiceService} from './services/empresa-service.service';
import {NoticiaServiceService } from './services/noticia-service.service';
import { EmpresaComponent } from './components/empresa/empresa.component';
@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    DetalleComponent,
    EmpresaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    NgbModule
  ],
  providers: [EmpresaServiceService,
              NoticiaServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
