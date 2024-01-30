import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { cartReducer } from './cart.reducer';
import { StoreModule } from '@ngrx/store';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [AppComponent, CartComponent, ProductListComponent],
  imports: [BrowserModule, StoreModule.forRoot({ cart: cartReducer })],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
