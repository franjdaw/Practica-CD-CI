import { Injectable, computed, signal } from '@angular/core';

export interface Tarea {
  id: number;
  titulo: string;
  completada: boolean;
}

@Injectable({ providedIn: 'root' })
export class Tareas {
  private siguienteId = 1;
  private readonly _tareas = signal<Tarea[]>([]);

  readonly tareas = this._tareas.asReadonly();
  readonly pendientes = computed(() => this._tareas().filter((t) => !t.completada).length);

  agregar(titulo: string): Tarea | null {
    const limpio = titulo.trim();
    if (!limpio) {
      return null;
    }
    const tarea: Tarea = { id: this.siguienteId++, titulo: limpio, completada: false };
    this._tareas.update((lista) => [...lista, tarea]);
    return tarea;
  }

  alternar(id: number): void {
    this._tareas.update((lista) =>
      lista.map((t) => (t.id === id ? { ...t, completada: !t.completada } : t))
    );
  }

  eliminar(id: number): void {
    this._tareas.update((lista) => lista.filter((t) => t.id !== id));
  }
}
