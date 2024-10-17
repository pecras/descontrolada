import { Routes } from '@angular/router';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductListComponent } from './product-list/product-list.component';


export const routes: Routes = [
  { path: 'cadastro', component: ProductFormComponent },
  { path: 'lista', component: ProductListComponent },
  { path: '', redirectTo: '/cadastro', pathMatch: 'full' }
];