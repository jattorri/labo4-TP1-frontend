import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Empresa} from "../entities/empresa"

@Injectable({
  providedIn: 'root'
})
export class EmpresaServiceService {

  /*public empresasArr:Empresa[]=[];
  public empresaEncontrada:Empresa;*/

  constructor(public http: HttpClient) {
    console.log("Servicio Empresa Cargado!!!");
   }


  getEmpresasFromDataBase(){
    return this.http.get<Empresa[]>("http://localhost:9000/api/empresas");
  }

  getEmpresaEnBaseDatosXId(idx:string){
    return this.http.get<Empresa>("http://localhost:9000/api/empresas/" + idx);
    
   
  }


  
}
