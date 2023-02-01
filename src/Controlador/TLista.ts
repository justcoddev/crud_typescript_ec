import { Heroe } from '../Entidades/heroe';
// export { ListarHeroes, cargarProductos, editarProducto, eliminarProductos, validarFormulario };
export { validarFormulario };
// const contenedor = document.querySelector('tbody') as unknown as HTMLInputElement;
// let resultados = '';
let listarHeroes: { cod: string; nom: string; eda: string; ciu: string; }[] = [];
const objProducto = {
  cod: '',
  nom: '',
  eda: '',
  ciu: ''
}



let edit = false;
const formulario = document.querySelector('#form') as HTMLFormElement;
const codeInput = document.querySelector('#codeInput') as HTMLInputElement;
const nameHeroInput = document.querySelector('#nameHeroInput') as HTMLInputElement;
const edadInput = document.querySelector('#edadInput') as HTMLInputElement;
const ciudadInput = document.querySelector('#ciudadInput') as HTMLInputElement;
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



// function eliminarProductos(cod: number) {
//   ListarHeroes = ListarHeroes.filter(heroes => heroes.Codigo !== cod);

//   cleanHTML();
//   mostrarProducto();
// }





formulario.addEventListener('submit', validarFormulario);

function validarFormulario(e: { preventDefault: () => void; }) {
  e.preventDefault();

  if (codeInput.value === '' ||
    nameHeroInput.value === '' ||
    edadInput.value === '' ||
    ciudadInput.value === '') {
    alert('Los campos están vacios.');
    return;
  }

  if (edit) {
    // editarProducto();
    edit = false;

  } else {
    // objProducto.idProducto = Date.now();
    objProducto.cod = codeInput.value;
    objProducto.nom = nameHeroInput.value;
    objProducto.eda = edadInput.value;
    objProducto.ciu = ciudadInput.value;
    addProducto();
  }
}


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
  const contenedor = document.querySelector('.tbody') as HTMLBodyElement;
  cleanHTML();

  listarHeroes.forEach(Heroes => {
    const { cod, nom, eda, ciu } = Heroes;

    const parrafo = document.createElement('p');
    parrafo.textContent = `${cod} - ${nom} - ${eda} - ${ciu} - `;
    // parrafo.textContent = `${codeInput.value} - ${nameHeroInput.value} - ${edadInput.value} - ${ciudadInput.value} - `;
    // estaba id aqui debajo

    parrafo.dataset.id = cod;

    // button editar
    const edit_btn = document.createElement('button');
    edit_btn.onclick = () => cargarProductos(Heroes);
    edit_btn.textContent = 'Editar';
    edit_btn.classList.add('btn', 'container__btn_editar');
    parrafo.append(edit_btn);

    // button eliminar
    const delete_btn = document.createElement('button');
    // delete_btn.onclick = () => eliminarProductos(Codigo);
    delete_btn.textContent = 'Eliminar';
    delete_btn.classList.add('btn', 'container__btn_delete');
    parrafo.append(delete_btn);

    const hr = document.createElement('hr');

    contenedor.appendChild(parrafo);
    contenedor.appendChild(hr);

  });
  console.log(listarHeroes);
  console.log(codeInput.value, nameHeroInput.value, edadInput.value, ciudadInput.value);
}


function cargarProductos(Heroes: { cod: string; nom: string; eda: string; ciu: string; }) {
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


function cleanHTML() {
  const contenedor = document.querySelector('.tbody') as HTMLBodyElement;
  // const containerProductos = document.querySelector('.container__productos');
  while (contenedor.firstChild) {
    contenedor.removeChild(contenedor.firstChild);
  }
}



// function editarProducto() {
//   // objProducto.idProducto = id_.value;
//   objProducto.cod = codeInput.value;
//   objProducto.nom = nameHeroInput.value;
//   objProducto.eda = edadInput.value;
//   objProducto.ciu = ciudadInput.value;

//   ListarHeroes.map(Heroes => {

//     if (Heroes.Codigo === parseInt(objProducto.cod)) {
//       Heroes.Codigo = parseInt(objProducto.cod);
//       Heroes.Nombre = objProducto.nom;
//       Heroes.Edad = parseInt(objProducto.eda);
//       Heroes.Ciudad = objProducto.ciu;
//     }

//   });

//   cleanHTML();
//   mostrarProducto();

//   formulario.reset();

//   // formulario.querySelector('btn_Add').textContent = 'Agregar';

//   edit = false;
// }

