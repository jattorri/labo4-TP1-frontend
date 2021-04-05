import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empresa } from 'src/app/entities/empresa';
import { Noticia } from 'src/app/entities/noticias';
import { EmpresaServiceService } from 'src/app/services/empresa-service.service';
import { NoticiaServiceService } from 'src/app/services/noticia-service.service';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})

export class EmpresaComponent implements OnInit {

  empresa: Empresa;
  noticias: Noticia[]=[];
  noticiasEmpresa: Noticia[]=[];

  constructor(
    private servicioNoticia: NoticiaServiceService,
    private servicioEmpresa:EmpresaServiceService, 
    private router:Router,  
    private route: ActivatedRoute) { }

    ngOnInit(): void {
      this.getEmpresa();
      this.getNoticias();
      console.log("Info desde empresa Component antes del getNoticias" );
    }

    getEmpresa(): void {
      const idEmpresa = this.route.snapshot.paramMap.get('id');
      this.servicioEmpresa.getEmpresaEnBaseDatosXId(idEmpresa).subscribe(
        empresa => this.empresa = empresa
      )
    }


    getNoticias(): void {
      const idNoticia = +this.route.snapshot.paramMap.get('id');
      this.servicioNoticia.getNoticiasFromDataBase().subscribe(
        noticias => {this.noticias = noticias;
          console.log( "Noticias" + this.noticias.values.toString());
          for(var i in this.noticias)
          { 
          console.log(this.noticias[i]);  
          }
          
  
          for(var i in this.noticias){
            if(this.noticias[i].id === idNoticia){
              this.noticiasEmpresa[i] = this.noticias[i];
            }
          }
        });
    }

    public verNoticia(idx:string){
      console.log("ID Noticia " + idx);
      this.router.navigate(['/detalle', idx]);
    }

}
