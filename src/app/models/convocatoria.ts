export class Convocatoria {
    id_convocatoria: string;
    tipo_jornada: string;
    direccion_empresa: string;
    fecha_publicac: string;
    sueldo: Date;
    fecha_limite: string;
    titulo: string;
    tipo_contrato: string;
    estado: string;
    nombre: string;
    doc_id_ts: string;

    constructor(
        id_convocatoria: string,
        tipo_jornada: string,
        direccion_empresa: string,
        fecha_publicac: string,
        sueldo: Date,
        fecha_limite: string,
        titulo: string,
        tipo_contrato: string,
        estado: string,
        nombre: string,
        doc_id_ts: string
         ){
        this.id_convocatoria = id_convocatoria;
        this.tipo_jornada = tipo_jornada;
        this.direccion_empresa = direccion_empresa;
        this.fecha_publicac = fecha_publicac;
        this.sueldo = sueldo;
        this.fecha_limite = fecha_limite;
        this.titulo = titulo;
        this.tipo_contrato = tipo_contrato;
        this.estado = estado;
        this.nombre = nombre;
        this.doc_id_ts = doc_id_ts;
    }

}