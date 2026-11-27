import { TestBed } from '@angular/core/testing';

import { Tareas } from './tareas';

describe('Tareas (servicio)', () => {
  let service: Tareas;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Tareas);
  });

  it('empieza sin tareas y sin pendientes', () => {
    expect(service.tareas()).toEqual([]);
    expect(service.pendientes()).toBe(0);
  });

  it('agrega una tarea recortando espacios y le asigna id', () => {
    const tarea = service.agregar('  Estudiar CI/CD  ');
    expect(tarea).toEqual({ id: 1, titulo: 'Estudiar CI/CD', completada: false });
    expect(service.tareas().length).toBe(1);
    expect(service.pendientes()).toBe(1);
  });

  it('no agrega tareas vacías', () => {
    expect(service.agregar('   ')).toBeNull();
    expect(service.tareas().length).toBe(0);
  });

  it('alterna el estado de completada y actualiza los pendientes', () => {
    const t = service.agregar('A')!;
    service.agregar('B');
    service.alternar(t.id);
    expect(service.tareas()[0].completada).toBeTrue();
    expect(service.tareas()[1].completada).toBeFalse();
    expect(service.pendientes()).toBe(1);
    service.alternar(t.id);
    expect(service.pendientes()).toBe(2);
  });

  it('elimina una tarea por id', () => {
    const a = service.agregar('A')!;
    service.agregar('B');
    service.eliminar(a.id);
    expect(service.tareas().map((t) => t.titulo)).toEqual(['B']);
  });
});
