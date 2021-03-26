import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empresa } from 'src/app/entities/empresa';
import { EmpresaServiceService } from 'src/app/services/empresa-service.service';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})

export class EmpresaComponent implements OnInit {

  empresa: Empresa;

  constructor(
    private servicioEmpresa:EmpresaServiceService, 
    private router:Router,  
    private route: ActivatedRoute) { }

    ngOnInit(): void {
      this.getEmpresa();
    }

    getEmpresa(): void {
      const id = this.route.snapshot.paramMap.get('id');
      this.servicioEmpresa.getEmpresaEnBaseDatosXId(id).subscribe(
        empresa => this.empresa = empresa
      )
       
    }

}
