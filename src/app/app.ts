import { Component, inject } from '@angular/core';

import { ListaTareas } from './components/lista-tareas/lista-tareas';
import { TareaForm } from './components/tarea-form/tarea-form';
import { Tareas } from './services/tareas';

const tituloApp = 'Gestor de tareas 2.0 🚀';

@Component({
  selector: 'app-root',
  imports: [TareaForm, ListaTareas],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly titulo = tituloApp;
  protected readonly servicio = inject(Tareas);
}
