import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importar FormsModule
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table'; // Importar MatTableModule
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'; // Importar NgbModal
import { CurrencyPipe } from '@angular/common'; // Importar CurrencyPipe si es necesario
import { ProductModalComponent } from '../product-modal/product-modal.component'; // Importar el modal

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
}

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule, MatTableModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [CurrencyPipe] // Proveer CurrencyPipe si es necesario
})
export class ProductListComponent {
  selectedCategory: string = '';
  itemsPerPage: number = 10;
  products: Product[] = []; // Definir productos como un array de Product
  filteredProducts: Product[] = []; // Definir productos filtrados como un array de Product

  constructor(private currencyPipe: CurrencyPipe, private modalService: NgbModal) {
    // Inicializar con algunos datos de ejemplo si es necesario
    this.products = [
      { id: 1, name: 'Product 1', price: 100, category: 'Category 1' },
      { id: 2, name: 'Product 2', price: 200, category: 'Category 2' },
      // Agregar más productos aquí
    ];
    this.filteredProducts = this.products; // Inicializar filteredProducts
  }

  filterProducts(): void {
    this.filteredProducts = this.products.filter((product: Product) =>
      this.selectedCategory === '' || product.category === this.selectedCategory
    );
  }

  openModal(product: Product): void {
    // Aquí debes definir la lógica para abrir el modal
    // Suponiendo que tienes un componente de modal llamado `ProductModalComponent`
    const modalRef = this.modalService.open(ProductModalComponent);
    modalRef.componentInstance.product = product; // Pasar el producto al modal
  }
}
