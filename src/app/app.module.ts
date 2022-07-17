import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SellsComponent } from './pages/sells/sells.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { ProductsComponent } from './pages/products/products.component';
import { ValidateComponent } from './pages/validate/validate.component';

@NgModule({
  declarations: [
    AppComponent,
    SellsComponent,
    ClientsComponent,
    ProductsComponent,
    ValidateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
