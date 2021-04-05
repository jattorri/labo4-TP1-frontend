import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Noticia } from 'src/app/entities/noticias';
import { NoticiaServiceService } from 'src/app/services/noticia-service.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  noticia: Noticia;

  constructor(private router:Router, private servicioNoticia:NoticiaServiceService,private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.getNoticia();
  }

  getNoticia():void{
    const idNoticia = this.route.snapshot.paramMap.get('id');
   
    this.servicioNoticia.getNoticiaEnBaseDatosXId(idNoticia).subscribe(
     noticia => this.noticia = noticia
    )
  }
}
