export class Elector {

    constructor(
        public dpi: String,
        public numPadron: String,
        public nombres: String,
        public apellidos: String,
        public fechaNacimiento: String,
        public genero: String,
        public direccion: String,
        public extraDireccion: String,
        public mesa: {idMesa: number}
       ){} 
}
