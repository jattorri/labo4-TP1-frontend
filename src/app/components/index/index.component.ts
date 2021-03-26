import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empresa } from 'src/app/entities/empresa';
import { EmpresaServiceService } from 'src/app/services/empresa-service.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  empresasArr :Empresa[]=[];
  loading = true;

  constructor(private servicioEmpresa:EmpresaServiceService, private router:Router) { 
    
  }

  ngOnInit(): void {
    this.servicioEmpresa.getEmpresasFromDataBase().subscribe(dataEmpresa => {
      for(let empresa in dataEmpresa){
        this.empresasArr.push(dataEmpresa[empresa]);
      }
      this.loading = false;

      //TEST
      console.log( "EMPRESAS ARR" + this.empresasArr.values.toString());
      console.log(this.empresasArr);

      for(var i in this.empresasArr)
      { 
      console.log(this.empresasArr[i]);  
      }
      //FIN TEST
    });
  }

  public verEmpresa(idx:string){
    console.log("ID Empresa " + idx);
    this.router.navigate(['/empresa', idx]);
  }

}
