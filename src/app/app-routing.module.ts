import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './componentes/agregar/agregar.component';
import { DemobannerComponent } from './componentes/demobanner/demobanner.component';
import { EditarComponent } from './componentes/editar/editar.component';
import { InicioComponent } from './componentes/inicio/inicio.component';

const routes: Routes = [

  {path: '', component: DemobannerComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'editar/:Id', component: EditarComponent},
  {path: 'agregar', component: AgregarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
