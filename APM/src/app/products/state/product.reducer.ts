import { createReducer, on } from '@ngrx/store';
import { Product } from '../product';
import { ProductApiActions, ProductPageActions } from './actions';

export interface ProductState {
  showProductCode: boolean;
  currentProductId: number | null;
  products: Product[];
  error: string;
}

const initialState: ProductState = {
  showProductCode: true,
  currentProductId: null,
  products: [],
  error: '',
};

export const productReducer = createReducer<ProductState>(
  initialState,
  on(ProductPageActions.toggleProductCode, (state): ProductState => {
    return {
      ...state,
      showProductCode: !state.showProductCode,
    };
  }),

  on(ProductPageActions.setCurrentProduct, (state, action): ProductState => {
    return {
      ...state,
      currentProductId: action.currentProductId,
    };
  }),

  on(ProductPageActions.clearCurrentProduct, (state): ProductState => {
    return {
      ...state,
      currentProductId: null,
    };
  }),

  on(ProductPageActions.initCurrentProduct, (state): ProductState => {
    return {
      ...state,
      currentProductId: 0,
    };
  }),

  on(ProductApiActions.loadProductsSuccess, (state, action): ProductState => {
    return {
      ...state,
      products: action.products,
      error: '',
    };
  }),

  on(ProductApiActions.loadProductsFail, (state, action): ProductState => {
    return {
      ...state,
      products: [],
      error: action.error,
    };
  }),

  on(ProductApiActions.updateProductSuccess, (state, action): ProductState => {
    const updatedProducts = state.products.map((item) =>
      action.product.id === item.id ? action.product : item
    );

    return {
      ...state,
      products: updatedProducts,
      currentProductId: action.product.id,
      error: '',
    };
  }),

  on(ProductApiActions.updateProductFail, (state, action): ProductState => {
    return {
      ...state,
      error: action.error,
    };
  }),

  on(ProductApiActions.createProductSuccess, (state, action): ProductState => {
    return {
      ...state,
      products: [...state.products, action.product],
      currentProductId: action.product.id,
      error: '',
    };
  }),

  on(ProductApiActions.createProductFail, (state, action): ProductState => {
    return {
      ...state,
      error: action.error,
    };
  }),

  on(ProductApiActions.deleteProductSuccess, (state, action): ProductState => {
    const updatedProducts = state.products.filter(
      (item) => item.id !== action.productId
    );

    return {
      ...state,
      products: updatedProducts,
      currentProductId: null,
      error: '',
    };
  }),

  on(ProductApiActions.deleteProductFail, (state, action): ProductState => {
    return {
      ...state,
      error: action.error,
    };
  })
);
