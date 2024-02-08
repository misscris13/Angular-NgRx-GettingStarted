import { createAction, props } from "@ngrx/store";
import { Product } from "src/app/products/product";

export const toggleProductCode = createAction(
  "[Product Page] Toggle Product Code"
);

export const loadProducts = createAction(
  "[Product Page] Load"
);

export const setCurrentProduct = createAction(
  "[Product Page] Set Current Product",
  props<{ currentProductId: number }>()
);

export const clearCurrentProduct = createAction(
  "[Product Page] Clear Current Product"
);

export const initCurrentProduct = createAction(
  "[Product Page] Init Current Product"
);

export const updateProduct = createAction(
  "[Product Page] Update",
  props<{ product: Product }>()
);

export const createProduct = createAction(
  "[Product Page] Create",
  props<{ product: Product }>()
);

export const deleteProduct = createAction(
  "[Product Page] Delete",
  props<{ productId: number }>()
);
