function agregarTarea() {
    // obtenemos el valor del campos de la tarea
    const nuevaTareaValor = document.getElementById("new_task").value;
    
    // se valida que no este vacio en valor
    if(nuevaTareaValor === "") {
        alert("Por favor, ingrese una nueva tarea");
        return;
    }

    // obtenermos la lista del DOM
    const listaTareas = document.getElementById("task_list");
    // creamos la tarea
    const nuevaTarea = document.createElement("li");
    nuevaTarea.textContent = nuevaTareaValor + " ";
    // añadimos la tarea a la lista
    listaTareas.appendChild(nuevaTarea);
    // limpiamos en input
    document.getElementById("new_task").value = "";

    // crear boton eliminar
    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.onclick = function() {
        nuevaTarea.remove();
    }
    nuevaTarea.appendChild(botonEliminar);
}