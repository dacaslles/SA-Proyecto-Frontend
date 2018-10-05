export class Mesa {

   constructor(
    public idMesa: number,
    public numMesa: number,
    public cantNulos: number,
    public cantBlancos: number,
    public centroVotacion: {idCentro: number}
   ){} 
}
