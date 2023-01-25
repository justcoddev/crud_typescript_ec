"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Insert = exports.Listar = exports.ListaHeroes = void 0;
const Heroe_1 = require("../Entidades/Heroe");
let ListaHeroes = [
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
exports.ListaHeroes = ListaHeroes;
function Listar() {
    let lis = "";
    for (let i = 0; i < ListaHeroes.length; i++) {
        lis = lis + "<li>" + ListaHeroes[i].Codigo + "</li>" +
            "<li>" + ListaHeroes[i].Nombre + "</li>" +
            "<li>" + ListaHeroes[i].Edad + "</li>" +
            "<li>" + ListaHeroes[i].Ciudad + "</li>";
    }
    let listado = document.getElementById("listado");
    listado.innerHTML = lis;
}
exports.Listar = Listar;
function Insert() {
    let cod = Number(document.getElementById("codigo").value.toString());
    let nom = document.getElementById("nombre").value.toString();
    let eda = Number(document.getElementById("edad").value.toString());
    let ciu = document.getElementById("ciudad").value.toString();
    const oe = new Heroe_1.Heroes(cod, nom, eda, ciu);
    ListaHeroes.push(oe);
    Listar();
}
exports.Insert = Insert;
