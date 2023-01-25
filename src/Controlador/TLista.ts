import { Heroes } from "../Entidades/Heroe";
export { ListaHeroes }

let ListaHeroes: Heroes[] = [
  {
    Codigo: 1,
    Nombre: 'Batman',
    Edad: 40,
    Ciudad: 'Gotica'

  },
  {
    Codigo: 2,
    Nombre: 'Spiderman',
    Edad: 20,
    Ciudad: 'NY'
  },
  {
    Codigo: 3,
    Nombre: 'Spide',
    Edad: 10,
    Ciudad: 'NY'
  },
];


export function Listar() {
  let lis = "";
  for (let i = 0; i < ListaHeroes.length; i++) {
    lis = lis + "<li>" + ListaHeroes[i].Codigo + "</li>" +
      "<li>" + ListaHeroes[i].Nombre + "</li>" +
      "<li>" + ListaHeroes[i].Edad + "</li>" +
      "<li>" + ListaHeroes[i].Ciudad + "</li>"
  }
  let listado = <HTMLElement>document.getElementById("listado");
  listado.innerHTML = lis;
}

export function Insert() {
  let cod = Number((<HTMLInputElement>document.getElementById("codigo")).value.toString());
  let nom = (<HTMLInputElement>document.getElementById("nombre")).value.toString();
  let eda = Number((<HTMLInputElement>document.getElementById("edad")).value.toString());
  let ciu = (<HTMLInputElement>document.getElementById("ciudad")).value.toString();
  const oe = new Heroes(cod, nom, eda, ciu);
  ListaHeroes.push(oe);
  Listar();
}