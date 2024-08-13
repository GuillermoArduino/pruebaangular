import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing'; // Importa RouterTestingModule
import { ReactiveFormsModule } from '@angular/forms'; // Importa ReactiveFormsModule si estás utilizando formularios reactivos
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginComponent, RouterTestingModule, ReactiveFormsModule] // Importa el componente y módulos necesarios
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Agrega otras pruebas aquí
});
