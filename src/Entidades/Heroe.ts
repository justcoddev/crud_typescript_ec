//export class Heroes {

export class Heroes {
  Codigo: number;
  Nombre: string;
  Edad: number;
  Ciudad: string;
  constructor(cod: number, nom: string, eda: number, ciu: string) {
    this.Codigo = cod;
    this.Nombre = nom;
    this.Edad = eda;
    this.Ciudad = ciu;
  }
}
