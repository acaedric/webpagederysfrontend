import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ListarPersonasComponent } from './components/listar-personas/listar-personas.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegistrarPostulanteComponent } from './components/registrar-postulante/registrar-postulante.component';
import { SharedModule } from './shared/shared.module';

const routes: Routes = [
  {path: '', component: InicioComponent, data:{title: '4DATA || Encuentra el puesto o la persona adecuada en este mundo digital'}},
  {path: 'listar-personas', component: ListarPersonasComponent },
  {path: 'registrar-postulante', component: RegistrarPostulanteComponent},
  {path: 'editar-postulante/:id', component: RegistrarPostulanteComponent},
  {path: 'login', component: IniciarSesionComponent},
  {path: 'profile/:id', component: ProfileComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  declarations: [InicioComponent],
  imports: [RouterModule.forRoot(routes), SharedModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
