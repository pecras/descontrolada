import { Component } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { ProductService } from '../Services/product.service';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';
import { Produto } from '../../Model/produto.model';


@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    CurrencyPipe,
    NgxMaskDirective,
     NgxMaskPipe
  ],
   templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent {
  product: Produto = {
   
    name: '',
    price: 0,
    type: 'organic',
    quantity: 0,
    description: '',
   
  };

  



  constructor(private productService: ProductService ) {}

  formattedPrice: string = '';



  


  onSubmit() {
    console.log(this.product)
    this.productService.addProduct(this.product);
    this.product = {
     
      name: '',
      price: 0,
      type: 'organic',
      quantity: 0,
      description: '',
      
    };
  }
  
   
}
