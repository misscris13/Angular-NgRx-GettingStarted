import { createAction, props } from "@ngrx/store";
import { Product } from "../../product";

export const loadProductsSuccess = createAction(
  "[Product API] Load Success",
  props<{ products: Product[] }>()
);

export const loadProductsFail = createAction(
  "[Product API] Load Fail",
  props<{ error: string }>()
);

export const updateProductSuccess = createAction(
  "[Product API] Update Success",
  props<{ product: Product }>()
);

export const updateProductFail = createAction(
  "[Product API] Update Fail",
  props<{ error: string }>()
);

export const createProductSuccess = createAction(
  "[Product API] Create Success",
  props<{ product: Product }>()
);

export const createProductFail = createAction(
  "[Product API] Create Fail",
  props<{ error: string }>()
);

export const deleteProductSuccess = createAction(
  "[Product API] Delete Success",
  props<{ productId: number }>()
);

export const deleteProductFail = createAction(
  "[Product API] Delete Fail",
  props<{ error: string }>()
);
