export class PostulanteSeleccion {
    fecha_publicac: string;
    titulo: string;
    estado: string;
    nombre: string;
    correo: string;
    puntaje: string;

    constructor(
        fecha_publicac: string,
        titulo: string,
        estado: string,
        nombre: string,
        correo: string,
        puntaje: string
         ){
        this.fecha_publicac = fecha_publicac;
        this.titulo = titulo;
        this.estado = estado;
        this.nombre = nombre;
        this.correo = correo;
        this.puntaje = puntaje;
    }

}