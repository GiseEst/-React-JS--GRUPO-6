import React, { useState } from 'react';

const TaskForm = ({ onAddTask }) => {
  // Estado local para gestionar la entrada del usuario
  const [newTask, setNewTask] = useState('');

  // Manejar cambios en el input
  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  // Manejar el envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault();

    // Validar que la tarea no esté vacía
    if (newTask.trim() === '') {
      alert('Por favor, ingresa una tarea válida.');
      return;
    }

    // Enviar la nueva tarea a la lista principal
    onAddTask(newTask);

    // Limpiar el input después de agregar la tarea
    setNewTask('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nueva Tarea:
        <input
          type="text"
          value={newTask}
          onChange={handleInputChange}
        />
      </label>
      <button type="submit">Agregar Tarea</button>
    </form>
  );
};

export default TaskForm;