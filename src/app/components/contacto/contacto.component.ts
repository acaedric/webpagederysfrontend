import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Contacto } from 'src/app/models/contacto';
import { Profile } from 'src/app/models/profile';
import { Usuariologin } from 'src/app/models/usuariologin';
import { ContactoService } from 'src/app/services/contacto.service';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  contactoForm: FormGroup;
  public archivos: any = [];
  constructor(private sanitizer: DomSanitizer,private _contactoService: ContactoService, private fb: FormBuilder, private router: Router, private toastr: ToastrService) {
    this.contactoForm = this.fb.group({
      nombreconsulta : ['', Validators.required],
      numeroconsulta: ['', Validators.required],
      rucconsulta : ['', Validators.required],
      correoconsulta: ['', Validators.required],
      mensajeconsulta : ['', Validators.required],
      archivoconsulta: ['', Validators.required],
      file: ['']
   })
   }

  ngOnInit(): void {
  }

  contacto(){
    console.log("Mostrandoe el Formulario inicial: ", this.contactoForm);
    
    try {
      const formularioDeDatos = new FormData();
      this.archivos.forEach((archivo: string | Blob) => {
        console.log("Mostrando el archivo que se recogió: ", archivo);
        formularioDeDatos.append('file', archivo);
      })
      // this.contactoForm.patchValue({file:formularioDeDatos});
      // this.contactoForm.updateValueAndValidity();
      formularioDeDatos.append('text', this.contactoForm.get('nombreconsulta')?.value);
      formularioDeDatos.append('number', this.contactoForm.get('numeroconsulta')?.value);
      formularioDeDatos.append('text', this.contactoForm.get('rucconsulta')?.value);
      formularioDeDatos.append('email', this.contactoForm.get('correoconsulta')?.value);
      formularioDeDatos.append('text', this.contactoForm.get('mensajeconsulta')?.value);
      
      console.log("Este es el formulario de datos: ", formularioDeDatos);
      
    } catch (e) {
      console.log("ERROR", e);
    }
    const contactorealizado: Contacto = {
      nombreconsulta: this.contactoForm.get('nombreconsulta')?.value,
      numeroconsulta: this.contactoForm.get('numeroconsulta')?.value,
      rucconsulta: this.contactoForm.get('rucconsulta')?.value,
      correoconsulta: this.contactoForm.get('correoconsulta')?.value,
      mensajeconsulta: this.contactoForm.get('mensajeconsulta')?.value
    }
    this._contactoService.enviarConsulta(contactorealizado).subscribe(data =>{
    }, error => {
      console.log(error);
    });
    console.log(contactorealizado);
    console.log("Mostrando el NUEVO Formulario: ", this.contactoForm);
    this.contactoForm.reset()
    this.toastr.success('Contacto realizado con éxito', 'Revise su correo.');
    this.router.navigate(['/contacto']);

  }

  capturarFile(event: any): any {
    const archivoCapturado = event.target.files[0];
    this.archivos.push(archivoCapturado);
    console.log("Recogiendo el archivo: ",event.target.files);
  }
  

}
