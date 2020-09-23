//
// Lista de tareas
//

//llamar a al formulario
const formulario = document.getElementById('new-task-form');
//llamar a la lista
const lista = document.getElementById('task-list');
//contador para genrar los ids
let count = 0;
//array para introducir los objetos de cada tarea
const tareas = [];
//funcion agregar checkbox mediante formularios 
formulario.addEventListener('submit', (event) => {
  // Se cancela el comportamiento default del formulario.
  event.preventDefault();
  // Texto introducido por el usuario (formulario.elements[].value)
  //cada elemento de las lista de tareas
  const item = document.createElement('li');
  item.className = 'task-list_item';
  lista.appendChild(item);
  //checkbox
  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.setAttribute('id', `tarea-${count}`);
  item.appendChild(checkbox);
  //label
  const label = document.createElement('label');
  label.setAttribute('for', `tarea-${count}`);
  label.innerHTML = formulario.elements[0].value;
  item.appendChild(label);
  //objeto fe cada tarea
  const miTarea = {
    id: count,
    nombre: formulario.elements[0].value,
    completo: false,
    //fecha
    date: formulario.elements[0].value,
  }
  //se añade cada objeto al array
  tareas.push(miTarea);
  console.log(tareas);
  //se le suma al contador
  count++;
  //se resetea el apartado
  formulario.elements[0].value = '';
})

