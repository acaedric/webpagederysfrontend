export class Profile {
    link_linkedin: string;
    lugar_residencia: string;
    antecedentes_penales: string;
    curriculum_vitae: string;
    situacion_laboral_actual: string;
    tipo_contrato_deseado: string;
    movilidad: string;
    doc_id_postulante: string;
    doc_id_empleador: string;
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
        link_linkedin: string,
        lugar_residencia: string,
        antecedentes_penales: string,
        curriculum_vitae: string,
        situacion_laboral_actual: string,
        tipo_contrato_deseado: string,
        movilidad: string,
        doc_id_postulante: string,
        doc_id_empleador: string,
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
        this.link_linkedin = link_linkedin;
        this.lugar_residencia = lugar_residencia;
        this.antecedentes_penales = antecedentes_penales;
        this.curriculum_vitae = curriculum_vitae;
        this.situacion_laboral_actual = situacion_laboral_actual;
        this.tipo_contrato_deseado = tipo_contrato_deseado;
        this.movilidad = movilidad;
        this.doc_id_postulante = doc_id_postulante;
        this.doc_id_empleador = doc_id_empleador;
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