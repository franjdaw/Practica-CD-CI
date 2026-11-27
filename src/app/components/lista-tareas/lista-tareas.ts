import { Component, input, output } from '@angular/core';

import { Tarea } from '../../services/tareas';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.html',
  styleUrl: './lista-tareas.css'
})
export class ListaTareas {
  readonly tareas = input<Tarea[]>([]);
  readonly alternar = output<number>();
  readonly eliminar = output<number>();
}
