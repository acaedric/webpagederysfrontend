import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule} from '@angular/common/http';


//Components
import { AppComponent } from './app.component';
import { RegistrarPostulanteComponent } from './components/registrar-postulante/registrar-postulante.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { ListarPersonasComponent } from './components/listar-personas/listar-personas.component';
import { SharedModule } from './shared/shared.module';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrarPostulanteComponent,
    IniciarSesionComponent,
    ListarPersonasComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
