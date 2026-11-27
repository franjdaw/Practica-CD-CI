import { Component, output, signal } from '@angular/core';

@Component({
  selector: 'app-tarea-form',
  templateUrl: './tarea-form.html',
  styleUrl: './tarea-form.css'
})
export class TareaForm {
  readonly texto = signal('');
  readonly nuevaTarea = output<string>();

  actualizar(valor: string): void {
    this.texto.set(valor);
  }

  enviar(): void {
    const valor = this.texto().trim();
    if (!valor) {
      return;
    }
    this.nuevaTarea.emit(valor);
    this.texto.set('');
  }
}
