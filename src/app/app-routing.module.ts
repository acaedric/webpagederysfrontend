import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './components/contacto/contacto.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ListarPersonasComponent } from './components/listar-personas/listar-personas.component';
import { ConvocatoriasComponent } from './components/profilepostulante/convocatorias/convocatorias.component';
import { PerfilComponent } from './components/profilepostulante/perfil/perfil.component';
import { ProfilepostulanteComponent } from './components/profilepostulante/profile.component';
import { ConvocatoriastecnicoComponent } from './components/profiletecnico/convocatoriastecnico/convocatoriastecnico.component';
import { PerfiltecnicoComponent } from './components/profiletecnico/perfiltecnico/perfiltecnico.component';
import { ProfiletecnicoComponent } from './components/profiletecnico/profiletecnico.component';
import { PuestoslaboralestecnicoComponent } from './components/profiletecnico/puestoslaboralestecnico/puestoslaboralestecnico.component';
import { CompetenciaslaboralesComponent } from './components/profiletecnico/selecciontecnico/competenciaslaborales/competenciaslaborales.component';
import { ContratacionComponent } from './components/profiletecnico/selecciontecnico/contratacion/contratacion.component';
import { EntrevistafinalComponent } from './components/profiletecnico/selecciontecnico/entrevistafinal/entrevistafinal.component';
import { ExamenmedicoComponent } from './components/profiletecnico/selecciontecnico/examenmedico/examenmedico.component';
import { PruebapersonalizadaComponent } from './components/profiletecnico/selecciontecnico/pruebapersonalizada/pruebapersonalizada.component';
import { PruebaspsicologicasComponent } from './components/profiletecnico/selecciontecnico/pruebaspsicologicas/pruebaspsicologicas.component';
import { SelecciontecnicoComponent } from './components/profiletecnico/selecciontecnico/selecciontecnico.component';
import { TestconocimientosComponent } from './components/profiletecnico/selecciontecnico/testconocimientos/testconocimientos.component';
import { VerificaciondecvComponent } from './components/profiletecnico/selecciontecnico/verificaciondecv/verificaciondecv.component';
import { RegistrarPostulanteComponent } from './components/registrar-postulante/registrar-postulante.component';
import { TrabajosComponent } from './components/trabajos/trabajos.component';
import { SharedModule } from './shared/shared.module';
import { SidebarComponent } from './shared/sidebar/sidebar.component';

const routes: Routes = [
  {path: '', component: InicioComponent, data:{title: '4DATA || Encuentra el puesto o la persona adecuada en este mundo digital'}},
  {path: 'listar-personas', component: ListarPersonasComponent },
  {path: 'registrar-postulante', component: RegistrarPostulanteComponent},
  {path: 'trabajos', component: TrabajosComponent},
  {path: 'contacto', component: ContactoComponent},
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
  {
    path: 'tecnico/:id', 
    component: ProfiletecnicoComponent,
    children: [
      {
        path: 'perfil',
        component: PerfiltecnicoComponent
      },
      {
        path: 'convocatorias',
        component: ConvocatoriastecnicoComponent
      },
      {
        path: 'puestoslaborales',
        component: PuestoslaboralestecnicoComponent
      },
      {
        path: 'seleccion',
        component: SelecciontecnicoComponent,
        children: [
          {
            path: 'competenciaslaborales',
            component: CompetenciaslaboralesComponent
          },
          {
            path: 'contratacion',
            component: ContratacionComponent
          },
          {
            path: 'entrevistafinal',
            component: EntrevistafinalComponent
          },
          {
            path: 'examenmedico',
            component: ExamenmedicoComponent
          },
          {
            path: 'pruebapsicologica',
            component: PruebaspsicologicasComponent
          },
          {
            path: 'testconocimientos',
            component: TestconocimientosComponent
          },
          {
            path: 'verificaciondecv',
            component: VerificaciondecvComponent
          },
          {
            path: 'pruebapersonalizada/:id',
            component: PruebapersonalizadaComponent
          }
        ]

      }
    ]
  },
  {path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  declarations: [InicioComponent],
  imports: [RouterModule.forRoot(routes), SharedModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
