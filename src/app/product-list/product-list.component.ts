import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../Services/product.service';
import { Observable } from 'rxjs';
import { DeleteProductModalComponent } from '../delete-product-modal/delete-product-modal.component';
import { EditProductModalComponent } from '../edit-product-modal/edit-product-modal.component';





interface Product {
  id?: number;  // Agora id é opcional
  name: string;
  price: number;
  type: 'organic' | 'non-organic';
  quantity: number;
  date?: string;
  description?: string;
}

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule,EditProductModalComponent, DeleteProductModalComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  Production$: Observable<any> = new Observable<any>;


  displayedProducts: Product[] = [];
  currentPage = 1;
  pageSize = 5;
  totalItems = 0;
  totalPages = 0;
  startIndex = 0;
  endIndex = 0;


  isEditModalOpen = false;
  isDeleteModalOpen = false;
  selectedProduct: Product | null = null;


  constructor(private productService: ProductService) {}


  

  ngOnInit() {
    this.getProducts();
    
  }

  getProducts() {
  this.productService.getAll().subscribe(products =>{
    products
  } )

    this.productService.getAll().subscribe(products => {
      this.products = products;
      this.totalItems = this.products.length
     
      this.totalPages = Math.ceil(this.totalItems / this.pageSize);
      this.updateDisplayedProducts();
    });
  }

  updateDisplayedProducts() {
    this.startIndex = (this.currentPage - 1) * this.pageSize;
    this.endIndex = Math.min(this.startIndex + this.pageSize, this.totalItems);
    this.displayedProducts = this.products.slice(this.startIndex, this.endIndex);
  }

  editProduct(product: Product) {
    this.selectedProduct = { ...product }; 
  } 

  openEditModal(product: Product) {
    this.selectedProduct = product;
    this.isEditModalOpen = true;
  }

  closeEditModal() {
    this.isEditModalOpen = false;
    this.selectedProduct = null;
  }

  saveEditedProduct(editedProduct: Product) {
    this.productService.updateProduct(editedProduct).subscribe(() => {
      this.getProducts();
      this.closeEditModal();
    });
  }



  openDeleteModal(product: Product) {
    this.selectedProduct = product;
    this.isDeleteModalOpen = true;
  }

  closeDeleteModal() {
    this.isDeleteModalOpen = false;
    this.selectedProduct = null;
  }

  confirmDelete() {
    if (this.selectedProduct?.id) {
      this.productService.deleteProduct(this.selectedProduct.id).subscribe(() => {
        this.getProducts();
        this.closeDeleteModal();
      });
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.getProducts(); // Buscar os produtos da página anterior
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.getProducts(); // Buscar os produtos da página anterior
    }
  }
}
