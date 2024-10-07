import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ProductsComponent } from './components/products/products.component';
import { ContactComponent } from './components/contact/contact.component';
import { HttpClientModule} from '@angular/common/http';
import { ProductListComponent } from './components/products/product-list/product-list.component';
import { ProductItemComponent } from './components/products/product-list/product-item/product-item.component';
import { PanierComponent } from './components/panier/panier.component';
import { LoadingComponent } from './components/loading/loading.component';
import { InventoryStatusPipe } from './pipes/inventory-status.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AlertComponent } from './components/alert/alert.component';
import { ProductFilterComponent } from './components/products/product-filter/product-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProductsComponent,
    ContactComponent,
    ProductListComponent,
    ProductItemComponent,
    PanierComponent,
    LoadingComponent,
    InventoryStatusPipe,
    AlertComponent,
    ProductFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
