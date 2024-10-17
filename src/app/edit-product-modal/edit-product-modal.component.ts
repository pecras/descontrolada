import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-edit-product-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-product-modal.component.html',
  styleUrl: './edit-product-modal.component.css'
})
export class EditProductModalComponent {
  @Input() isOpen = false;
  @Input() product: any = {};
  @Output() save = new EventEmitter<any>();
  @Output() cancel = new EventEmitter<void>();

  editedProduct: any = {};

  ngOnChanges() {
    if (this.product) {
      this.editedProduct = { ...this.product };
    }
  }

  onSubmit() {
    this.save.emit(this.editedProduct);
  }

  onCancel() {
    this.cancel.emit();
  }
}