import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './pages/clients/clients.component';
import { ProductsComponent } from './pages/products/products.component';
import { SellsComponent } from './pages/sells/sells.component';
import { ValidateComponent } from './pages/validate/validate.component';

const routes: Routes = [
  {
    path: 'clients',
    component: ClientsComponent,
  },
  {
    path: 'clients/validate',
    component: ValidateComponent,
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'sells',
    component: SellsComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'sells'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
