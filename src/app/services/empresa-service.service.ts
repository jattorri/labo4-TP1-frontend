import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Empresa} from "../entities/empresa"

@Injectable({
  providedIn: 'root'
})
export class EmpresaServiceService {

  public empresaData:Empresa[]=[];
  public empresaEncontrada:Empresa;

  constructor(public http: HttpClient) {
    console.log("Servicio Cargado!!!");
   }


  getEmpresasFromDataBase(){
    return this.http.get("http://localhost:9000/api/empresas").pipe(
    map(empresaData => empresaData));
  }

  getEmpresaEnBaseDatosXId(idx:string){
    return this.http.get("http://localhost:9000/api/empresas/" + idx).pipe(
      map<Empresa,Empresa>( empresaEncontrada => empresaEncontrada));
  }
  
}
