export class Postulante {
    link_linkedin: string;
    lugar_residencia: string;
    antecedentes_penales: string;
    curriculum_vitae: string;
    situacion_laboral_actual: Date;
    tipo_contrato_deseado: string;
    movilidad: string;
    doc_id: string;
    doc_id_empleador: string;

    constructor(
        link_linkedin: string,
        lugar_residencia: string,
        antecedentes_penales: string,
        curriculum_vitae: string,
        situacion_laboral_actual: Date,
        tipo_contrato_deseado: string,
        movilidad: string,
        doc_id: string,
        doc_id_empleador: string,
         ){
        this.link_linkedin = link_linkedin;
        this.lugar_residencia = lugar_residencia;
        this.antecedentes_penales = antecedentes_penales;
        this.curriculum_vitae = curriculum_vitae;
        this.situacion_laboral_actual = situacion_laboral_actual;
        this.tipo_contrato_deseado = tipo_contrato_deseado;
        this.movilidad = movilidad;
        this.doc_id = doc_id;
        this.doc_id_empleador = doc_id_empleador;
    }

}