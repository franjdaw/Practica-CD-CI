import { Component, inject } from '@angular/core';

import { ListaTareas } from './components/lista-tareas/lista-tareas';
import { TareaForm } from './components/tarea-form/tarea-form';
import { Tareas } from './services/tareas';

@Component({
  selector: 'app-root',
  imports: [TareaForm, ListaTareas],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // Error a propósito: tituloApp no está declarada
  protected readonly titulo = tituloApp;
  protected readonly servicio = inject(Tareas);
}
