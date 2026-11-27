import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareaForm } from './tarea-form';

describe('TareaForm (componente)', () => {
  let component: TareaForm;
  let fixture: ComponentFixture<TareaForm>;
  let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [TareaForm] }).compileComponents();
    fixture = TestBed.createComponent(TareaForm);
    component = fixture.componentInstance;
    el = fixture.nativeElement;
    fixture.detectChanges();
  });

  function escribir(valor: string): void {
    const input = el.querySelector('input') as HTMLInputElement;
    input.value = valor;
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();
  }

  it('deshabilita el botón mientras el campo está vacío', () => {
    const boton = el.querySelector('button') as HTMLButtonElement;
    expect(boton.disabled).toBeTrue();
    escribir('Algo');
    expect(boton.disabled).toBeFalse();
  });

  it('emite la tarea al enviar el formulario y limpia el campo', () => {
    const emitidas: string[] = [];
    component.nuevaTarea.subscribe((t) => emitidas.push(t));
    escribir('  Hacer la práctica  ');
    (el.querySelector('form') as HTMLFormElement).dispatchEvent(new Event('submit'));
    fixture.detectChanges();
    expect(emitidas).toEqual(['Hacer la práctica']);
    expect((el.querySelector('input') as HTMLInputElement).value).toBe('');
  });

  it('no emite nada si solo hay espacios', () => {
    const emitidas: string[] = [];
    component.nuevaTarea.subscribe((t) => emitidas.push(t));
    escribir('    ');
    component.enviar();
    expect(emitidas).toEqual([]);
  });
});
