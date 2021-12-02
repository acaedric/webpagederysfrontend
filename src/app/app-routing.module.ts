import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ListarPersonasComponent } from './components/listar-personas/listar-personas.component';
import { ConvocatoriasComponent } from './components/profilepostulante/convocatorias/convocatorias.component';
import { PerfilComponent } from './components/profilepostulante/perfil/perfil.component';
import { ProfilepostulanteComponent } from './components/profilepostulante/profile.component';
import { ProfiletecnicoComponent } from './components/profiletecnico/profiletecnico.component';
import { RegistrarPostulanteComponent } from './components/registrar-postulante/registrar-postulante.component';
import { SharedModule } from './shared/shared.module';
import { SidebarComponent } from './shared/sidebar/sidebar.component';

const routes: Routes = [
  {path: '', component: InicioComponent, data:{title: '4DATA || Encuentra el puesto o la persona adecuada en este mundo digital'}},
  {path: 'listar-personas', component: ListarPersonasComponent },
  {path: 'registrar-postulante', component: RegistrarPostulanteComponent},
  {path: 'editar-postulante/:id', component: RegistrarPostulanteComponent},
  {path: 'login', component: IniciarSesionComponent},
  {
    path: 'postulante/:id', 
    component: ProfilepostulanteComponent,
    children: [
      {
        path: 'convocatorias',
        component: ConvocatoriasComponent
      },
      {
        path: 'perfil',
        component: PerfilComponent
      }
    ]
  },
  {path: 'profile', component: SidebarComponent},
  {path: 'tecnico/:id', component: ProfiletecnicoComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  declarations: [InicioComponent],
  imports: [RouterModule.forRoot(routes), SharedModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
