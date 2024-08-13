import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductListComponent } from './product-list/product-list.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'products', component: ProductListComponent },
  { path: '**', redirectTo: '/login' }
];
