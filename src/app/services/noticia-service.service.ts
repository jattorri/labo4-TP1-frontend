import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Noticia } from '../entities/noticias';

@Injectable({
  providedIn: 'root'
})
export class NoticiaServiceService {

  /*public noticiaData:Noticia[]=[];
  public noticiaEncontrada:Noticia;*/

  constructor(public http: HttpClient) {
    console.log("Servicio Noticia Cargado!!!"); 
  }

  getNoticiasFromDataBase(){
    return this.http.get<Noticia[]>("http://localhost:9000/api/noticias");
    //.subscribe(noticiaData => this.noticiaData = noticiaData)
    
    /*.pipe(
    map<Noticia[],Noticia[]>(noticiaData => noticiaData));*/
  }

  getNoticiaEnBaseDatosXId(idx:string){
    return this.http.get<Noticia>("http://localhost:9000/api/noticias/" + idx);
    
    //.subscribe(noticiaEncontrada => this.noticiaEncontrada = noticiaEncontrada)
    
    /*.pipe(
      map<Noticia,Noticia>( noticiaEncontrada => noticiaEncontrada));*/
  }
}
