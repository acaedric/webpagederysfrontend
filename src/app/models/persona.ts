export class Persona {
    doc_id: string;
    apellidos: string;
    nombre_pila: string;
    foto: string;
    fec_nac: Date;
    sexo: string;
    direcc_email: string;
    nombre_usuario: string;
    password: string;
    rol: string;
    pais: string;
    ciudad: string;

    constructor(
        doc_id: string,
        apellidos:string, 
        nombre_pila:string, 
        foto:string, 
        fec_nac: Date,
        sexo: string, 
        direcc_email: string,
        nombre_usuario: string,
        password: string,
        rol: string,
        pais: string,
        ciudad: string
         ){
        this.doc_id = doc_id;
        this.apellidos = apellidos;
        this.nombre_pila = nombre_pila;
        this.foto = foto;
        this.fec_nac = fec_nac;
        this.sexo = sexo;
        this.direcc_email = direcc_email;
        this.nombre_usuario = nombre_usuario;
        this.password = password;
        this.rol = rol;
        this.pais = pais;
        this.ciudad = ciudad;
    }

}