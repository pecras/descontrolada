import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-delete-product-modal',
  standalone: true,
  imports: [NgIf],
  templateUrl: './delete-product-modal.component.html',
  styleUrl: './delete-product-modal.component.css'
})
export class DeleteProductModalComponent {
  @Input() isOpen = false;
  @Input() product: any = {};
  @Output() confirm = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();

  onConfirm() {
    this.confirm.emit();
  }

  onCancel() {
    this.cancel.emit();
  }
}