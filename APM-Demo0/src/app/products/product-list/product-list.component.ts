import { Component, OnInit } from '@angular/core';

import { Product } from '../product';
import { ProductService } from '../product.service';
import { Store } from '@ngrx/store';
import { State, getShowProductCode, getCurrentProduct, getProducts, getError } from '../state/product.reducer'; // import from product since it's extended there
import * as ProductActions from "../state/product.actions";
import { Observable } from 'rxjs';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle = 'Products';
  errorMessage$: Observable<string>;

  displayCode: boolean;
  displayCode$: Observable<boolean>;

  products: Product[];
  products$: Observable<Product[]>;

  // Used to highlight the selected product in the list
  selectedProduct: Product | null;
  selectedProduct$: Observable<Product>;

  constructor(private productService: ProductService,
    private store: Store<State>) { }

  ngOnInit(): void {

    this.products$ = this.store.select(getProducts);

    this.errorMessage$ = this.store.select(getError);

    this.store.dispatch(ProductActions.loadProducts());

    this.selectedProduct$ = this.store.select(getCurrentProduct);

    this.displayCode$ = this.store.select(getShowProductCode);
  }

  checkChanged(): void {
    this.store.dispatch(ProductActions.toggleProductCode());
  }

  newProduct(): void {
    this.store.dispatch(ProductActions.initCurrentProduct());
  }

  productSelected(product: Product): void {
    this.store.dispatch(ProductActions.setCurrentProduct({ currentProductId : product.id }))
  }

}
