import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'; // Importa NgbActiveModal
import { ProductModalComponent } from './product-modal.component';

describe('ProductModalComponent', () => {
  let component: ProductModalComponent;
  let fixture: ComponentFixture<ProductModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductModalComponent],
      providers: [
        { provide: NgbActiveModal, useValue: jasmine.createSpyObj('NgbActiveModal', ['close', 'dismiss']) } // Mock de NgbActiveModal
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Agrega otras pruebas aquí
});
