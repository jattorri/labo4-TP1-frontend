import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetalleComponent } from './components/detalle/detalle.component';
import { EmpresaComponent } from './components/empresa/empresa.component';
import { IndexComponent } from './components/index/index.component';


const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index', component:IndexComponent},
  { path: 'empresa/:id', component:EmpresaComponent },
  {path: 'detalle/:id', component:DetalleComponent}

   

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
