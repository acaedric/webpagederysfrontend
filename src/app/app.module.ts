import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule} from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

import { ToastrModule } from 'ngx-toastr';

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';



//Components
import { AppComponent } from './app.component';
import { RegistrarPostulanteComponent } from './components/registrar-postulante/registrar-postulante.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { ListarPersonasComponent } from './components/listar-personas/listar-personas.component';
import { SharedModule } from './shared/shared.module';
import { ProfilepostulanteComponent } from './components/profilepostulante/profile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProfiletecnicoComponent } from './components/profiletecnico/profiletecnico.component';
import { ConvocatoriasComponent } from './components/profilepostulante/convocatorias/convocatorias.component';
import { PerfilComponent } from './components/profilepostulante/perfil/perfil.component';
import { PerfiltecnicoComponent } from './components/profiletecnico/perfiltecnico/perfiltecnico.component';
import { PuestoslaboralestecnicoComponent } from './components/profiletecnico/puestoslaboralestecnico/puestoslaboralestecnico.component';
import { ConvocatoriastecnicoComponent } from './components/profiletecnico/convocatoriastecnico/convocatoriastecnico.component';
import { SelecciontecnicoComponent } from './components/profiletecnico/selecciontecnico/selecciontecnico.component';
import { TestconocimientosComponent } from './components/profiletecnico/selecciontecnico/testconocimientos/testconocimientos.component';
import { CompetenciaslaboralesComponent } from './components/profiletecnico/selecciontecnico/competenciaslaborales/competenciaslaborales.component';
import { PruebaspsicologicasComponent } from './components/profiletecnico/selecciontecnico/pruebaspsicologicas/pruebaspsicologicas.component';
import { ExamenmedicoComponent } from './components/profiletecnico/selecciontecnico/examenmedico/examenmedico.component';
import { EntrevistafinalComponent } from './components/profiletecnico/selecciontecnico/entrevistafinal/entrevistafinal.component';
import { ContratacionComponent } from './components/profiletecnico/selecciontecnico/contratacion/contratacion.component';
import { PruebapersonalizadaComponent } from './components/profiletecnico/selecciontecnico/pruebapersonalizada/pruebapersonalizada.component';
@NgModule({
  declarations: [
    AppComponent,
    RegistrarPostulanteComponent,
    IniciarSesionComponent,
    ListarPersonasComponent,
    ProfilepostulanteComponent,
    ProfiletecnicoComponent,
    ConvocatoriasComponent,
    PerfilComponent,
    PerfiltecnicoComponent,
    PuestoslaboralestecnicoComponent,
    ConvocatoriastecnicoComponent,
    SelecciontecnicoComponent,
    TestconocimientosComponent,
    CompetenciaslaboralesComponent,
    PruebaspsicologicasComponent,
    ExamenmedicoComponent,
    EntrevistafinalComponent,
    ContratacionComponent,
    PruebapersonalizadaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    SharedModule,
    NgbModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
