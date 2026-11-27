import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTareas } from './lista-tareas';
import { Tarea } from '../../services/tareas';

describe('ListaTareas (componente)', () => {
  let component: ListaTareas;
  let fixture: ComponentFixture<ListaTareas>;
  let el: HTMLElement;

  const datos: Tarea[] = [
    { id: 1, titulo: 'Configurar CI', completada: true },
    { id: 2, titulo: 'Configurar CD', completada: false }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [ListaTareas] }).compileComponents();
    fixture = TestBed.createComponent(ListaTareas);
    component = fixture.componentInstance;
    el = fixture.nativeElement;
  });

  it('muestra un mensaje cuando no hay tareas', () => {
    fixture.detectChanges();
    expect(el.querySelector('.vacio')?.textContent).toContain('No hay tareas');
    expect(el.querySelectorAll('li').length).toBe(0);
  });

  it('pinta una fila por tarea y tacha las completadas', () => {
    fixture.componentRef.setInput('tareas', datos);
    fixture.detectChanges();
    const filas = el.querySelectorAll('li');
    expect(filas.length).toBe(2);
    expect(filas[0].textContent).toContain('Configurar CI');
    expect(filas[0].classList).toContain('completada');
    expect(filas[1].classList).not.toContain('completada');
  });

  it('emite alternar al marcar el checkbox y eliminar al pulsar ✕', () => {
    const alternadas: number[] = [];
    const eliminadas: number[] = [];
    component.alternar.subscribe((id) => alternadas.push(id));
    component.eliminar.subscribe((id) => eliminadas.push(id));
    fixture.componentRef.setInput('tareas', datos);
    fixture.detectChanges();

    (el.querySelectorAll('input[type=checkbox]')[1] as HTMLInputElement).dispatchEvent(new Event('change'));
    (el.querySelectorAll('button.eliminar')[0] as HTMLButtonElement).click();

    expect(alternadas).toEqual([2]);
    expect(eliminadas).toEqual([1]);
  });
});
