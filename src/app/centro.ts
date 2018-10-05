export class Centro {
    constructor(
        public nombre: String,
        public direccion: String,
        public extraDireccion: String,
        public municipio: {idMunicipio: number}
       ){} 
}
