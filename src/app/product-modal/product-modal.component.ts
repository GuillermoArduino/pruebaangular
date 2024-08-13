import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'; // Añadido para manejar el modal
import { CurrencyPipe } from '@angular/common'; // Importar CurrencyPipe si es necesario

@Component({
  selector: 'app-product-modal',
  standalone: true,
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.css'],
  providers: [CurrencyPipe] // Proveer CurrencyPipe si es necesario
})
export class ProductModalComponent {
  @Input() product: any; // Asegúrate de que el tipo sea el adecuado

  constructor(public activeModal: NgbActiveModal) {}

  dismiss() {
    this.activeModal.dismiss('Cross click');
  }
}
