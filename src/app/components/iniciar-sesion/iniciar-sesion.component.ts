import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Usuariologin } from 'src/app/models/usuariologin';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {
  usuarioForm: FormGroup;
  constructor(private _personaService: PersonaService, private fb: FormBuilder, private router: Router, private toastr: ToastrService) {
    this.usuarioForm = this.fb.group({
      nombre_usuario : ['', Validators.required],
      password: ['', Validators.required]
   })
  }

  ngOnInit(): void {
  }

  signIn(){
    console.log(this.usuarioForm);
    const usuarioypassword: Usuariologin = {
      nombre_usuario: this.usuarioForm.get('nombre_usuario')?.value,
      password: this.usuarioForm.get('password')?.value}

    console.log(usuarioypassword);

    this._personaService.login(usuarioypassword).subscribe(data =>{
    }, error => {
      console.log(error);
    });

    this.toastr.success('Datos validados', 'Se ha iniciado sesión correctamente!');
    this.router.navigate(['/profile/' + usuarioypassword.nombre_usuario]);

  }
}
