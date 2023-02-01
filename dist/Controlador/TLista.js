"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validarFormulario = void 0;
// const contenedor = document.querySelector('tbody') as unknown as HTMLInputElement;
// let resultados = '';
let listarHeroes = [];
const objProducto = {
    cod: '',
    nom: '',
    eda: '',
    ciu: ''
};
let edit = false;
const formulario = document.querySelector('#form');
const codeInput = document.querySelector('#codeInput');
const nameHeroInput = document.querySelector('#nameHeroInput');
const edadInput = document.querySelector('#edadInput');
const ciudadInput = document.querySelector('#ciudadInput');
// function Insert() {
//   // let cod = Number((<HTMLInputElement>document.getElementById("codeInput")).value.toString());
//   // let nom = (<HTMLInputElement>document.getElementById("nameHeroInput")).value.toString();
//   // let eda = Number((<HTMLInputElement>document.getElementById("edadInput")).value.toString());
//   // let ciu = (<HTMLInputElement>document.getElementById("ciudadInput")).value.toString();
//   const codeInput = document.querySelector('#codeInput') as HTMLInputElement;
//   const nameHeroInput = document.querySelector('#nameHeroInput') as HTMLInputElement;
//   const edadInput = document.querySelector('#edadInput') as HTMLInputElement;
//   const ciudadInput = document.querySelector('#ciudadInput') as HTMLInputElement;
//   const oe = new Heroes(codeInput.valueAsNumber, nameHeroInput.value, edadInput.valueAsNumber, ciudadInput.value);
//   ListaHeroes.push(oe);
//   // Listar();
//   Mostrar();
// }
// export function Listar() {
//   let lis = "";
//   for (let i = 0; i < ListaHeroes.length; i++) {
//     lis = lis + "<li>" + ListaHeroes[i].Codigo + "</li>" +
//       "<li>" + ListaHeroes[i].Nombre + "</li>" +
//       "<li>" + ListaHeroes[i].Edad + "</li>" +
//       "<li>" + ListaHeroes[i].Ciudad + "</li>"
//   }
//   let listado = <HTMLElement>document.getElementById("listado");
//   listado.innerHTML = lis;
//   console.log(ListaHeroes);
//   // console.log(Heroes)
// }
// function Mostrar() {
//   let lis = "";
//   for (let i = 0; i < ListaHeroes.length; i++) {
//     // lis = lis + "<li>" + ListaHeroes[i].Codigo + "</li>" +
//     //   "<li>" + ListaHeroes[i].Nombre + "</li>" +
//     //   "<li>" + ListaHeroes[i].Edad + "</li>" +
//     //   "<li>" + ListaHeroes[i].Ciudad + "</li>"
//     resultados += `
//             <tr class="text-center">
//                 <td>${ListaHeroes[i].Codigo}</td>
//                 <td>${ListaHeroes[i].Nombre}</td>
//                 <td>${ListaHeroes[i].Edad}</td>
//                 <td>${ListaHeroes[i].Ciudad}</td>
//                 <td><a class='btnEditar btn btn-primary'>Editar</a> <a class='btnBorrar btn btn-danger'>Eliminar</a></td>
//             </tr>
//         `;
//   }
//   // let listado = <HTMLElement>document.getElementById("listado");
//   // listado.innerHTML = lis;
//   console.log(ListaHeroes);
//   // Limpiar();
//   contenedor.innerHTML = resultados;
//   // console.log(Heroes)
// }
// const codeInput = document.querySelector('#codeInput') as HTMLInputElement;
// const nameHeroInput = document.querySelector('#nameHeroInput') as HTMLInputElement;
// const edadInput = document.querySelector('#edadInput') as HTMLTextAreaElement;
// const ciudadInput = document.querySelector('#ciudadInput') as HTMLInputElement;
// function Limpiar() {
//   codeInput.value = '';
//   nameHeroInput.value = "";
//   edadInput.value = '';
//   ciudadInput.value = '';
// }
formulario.addEventListener('submit', validarFormulario);
function validarFormulario(e) {
    e.preventDefault();
    if (codeInput.value === '' ||
        nameHeroInput.value === '' ||
        edadInput.value === '' ||
        ciudadInput.value === '') {
        alert('Los campos están vacios.');
        return;
    }
    if (edit) {
        editarProducto();
        edit = false;
    }
    else {
        // objProducto.idProducto = Date.now();
        objProducto.cod = codeInput.value;
        objProducto.nom = nameHeroInput.value;
        objProducto.eda = edadInput.value;
        objProducto.ciu = ciudadInput.value;
        addProducto();
    }
}
exports.validarFormulario = validarFormulario;
function addProducto() {
    listarHeroes.push({
        ...objProducto
    });
    mostrarProducto();
    formulario.reset();
    cleanObjeto();
}
function cleanObjeto() {
    objProducto.cod = '';
    objProducto.nom = '';
    objProducto.eda = '';
    objProducto.ciu = '';
}
function mostrarProducto() {
    const contenedor = document.querySelector('.tbody');
    cleanHTML();
    listarHeroes.forEach(Heroes => {
        const { cod, nom, eda, ciu } = Heroes;
        // const parrafo = document.createElement('tr');
        // parrafo.textContent = `${cod} - ${nom} - ${eda} - ${ciu} - `;
        // const dato1 = document.createElement('td');
        // dato1.textContent = `${cod}`;
        ///////////////////////////////////////
        // let tbody = document.createElement('tbody');
        // contenedor.appendChild(tbody);
        let row_2 = document.createElement('tr');
        let row_2_data_1 = document.createElement('td');
        row_2_data_1.innerHTML = `${cod}`;
        let row_2_data_2 = document.createElement('td');
        row_2_data_2.innerHTML = `${nom}`;
        let row_2_data_3 = document.createElement('td');
        row_2_data_3.innerHTML = `${eda}`;
        let row_2_data_4 = document.createElement('td');
        row_2_data_4.innerHTML = `${ciu}`;
        row_2.appendChild(row_2_data_1);
        row_2.appendChild(row_2_data_2);
        row_2.appendChild(row_2_data_3);
        row_2.appendChild(row_2_data_4);
        /////////////////////////////////
        // parrafo.dataset.id = cod;
        // button editar
        const edit_btn = document.createElement('button');
        edit_btn.onclick = () => cargarProductos(Heroes);
        edit_btn.textContent = 'Editar';
        edit_btn.classList.add('btn', 'btn-success', 'container__btn_editar');
        // parrafo.append(edit_btn);
        // ESTO ES DE LA TABLA CREDADA
        let row_2_data_5 = document.createElement('td');
        row_2_data_5.append(edit_btn);
        row_2_data_5.append(" ");
        // row_2.appendChild(row_2_data_5);
        // button eliminar
        const delete_btn = document.createElement('button');
        delete_btn.onclick = () => eliminarProductos(cod);
        delete_btn.textContent = 'Eliminar';
        delete_btn.classList.add('btn', 'btn-danger', 'container__btn_delete');
        // parrafo.append(delete_btn);
        // ESTO ES DE LA TABLA CREDADA
        row_2_data_5.append(delete_btn);
        row_2.appendChild(row_2_data_5);
        // const hr = document.createElement('hr');
        // contenedor.appendChild(parrafo);
        // contenedor.appendChild(hr);
        contenedor.appendChild(row_2);
    });
    console.log(listarHeroes);
    console.log(codeInput.value, nameHeroInput.value, edadInput.value, ciudadInput.value);
}
function cargarProductos(Heroes) {
    // const { Codigo, Nombre, Edad, Ciudad } = Heroes;
    const { cod, nom, eda, ciu } = Heroes;
    codeInput.value = cod;
    nameHeroInput.value = nom;
    edadInput.value = eda;
    ciudadInput.value = ciu;
    objProducto.cod = codeInput.value = cod;
    // // formulario.querySelector('button[type="submit"]').textContent = 'Aceptar';
    edit = true;
}
function editarProducto() {
    // objProducto.idProducto = id_.value;
    objProducto.cod = codeInput.value;
    objProducto.nom = nameHeroInput.value;
    objProducto.eda = edadInput.value;
    objProducto.ciu = ciudadInput.value;
    listarHeroes.map(Heroes => {
        if (Heroes.cod === objProducto.cod) {
            Heroes.cod = objProducto.cod;
            Heroes.nom = objProducto.nom;
            Heroes.eda = objProducto.eda;
            Heroes.ciu = objProducto.ciu;
        }
    });
    cleanHTML();
    mostrarProducto();
    formulario.reset();
    // formulario.querySelector('btn_Add').textContent = 'Agregar';
    edit = false;
}
function eliminarProductos(cod) {
    listarHeroes = listarHeroes.filter(Heroes => Heroes.cod !== cod);
    cleanHTML();
    mostrarProducto();
}
function cleanHTML() {
    const contenedor = document.querySelector('.tbody');
    // const containerProductos = document.querySelector('.container__productos');
    while (contenedor.firstChild) {
        contenedor.removeChild(contenedor.firstChild);
    }
}
//# sourceMappingURL=TLista.js.map