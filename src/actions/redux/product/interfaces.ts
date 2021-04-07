import { Action } from 'redux';

export interface ProductState {
	products: Product[];
	filter: ProductFilter;
	loading: boolean;
	success: boolean;
	error: boolean;
}

export enum TypesNames {
	GET_PRODUCTS = 'GET_PRODUCTS',
	SET_PRODUCTS = 'SET_PRODUCTS',
	SET_FILTER = 'SET_FILTER',
	SET_FILTER_BY_ID = 'SET_FILTER_BY_ID',
	CREATE_PRODUCT = 'CREATE_PRODUCT',
	UPDATE_PRODUCT = 'UPDATE_PRODUCT',
	DELETE_PRODUCT='DELETE_PRODUCT',
	SET_PRODUCT = 'SET_PRODUCT',
	PRODUCT_ERROR = 'PRODUCT_ERROR',
	LOAD_PRODUCT = 'LOAD_PRODUCT',
	DELETE_PRODUCT_SAGA="DELETE_PRODUCT_SAGA"
}

export interface ActionCreator {
	getProducts: () => Action<TypesNames.GET_PRODUCTS>;
	setProducts: (products: Product[]) => SetProductsAction;
	setFilter: (filter: ProductFilter) => SetFilterProductAction;
	setFilterById:(filterById:ProductFilter)=>SetFilterProductByIdAction
	createProduct: (product: Product) => CreateProductAction;
	updateProduct: (product: Product) => UpdateProductAction;
	setProduct: (product: Product) => SetProductAction;
	loadProduct: () => Action<TypesNames.LOAD_PRODUCT>;
	deleteProduct:(productId:string)=>DeleteProductAction;
	deleteProductSaga:(productId:string)=>DeleteProductSagaAction;
}

export interface SetProductsAction extends Action<TypesNames.SET_PRODUCTS> {
	products: Product[];
}

export interface SetFilterProductAction extends Action<TypesNames.SET_FILTER> {
	filter: ProductFilter;
}
export interface SetFilterProductByIdAction extends Action<TypesNames.SET_FILTER_BY_ID> {
	filterTextById: ProductFilter;
}
export interface CreateProductAction extends Action<TypesNames.CREATE_PRODUCT> {
	product: Product;
}
export interface UpdateProductAction extends Action<TypesNames.UPDATE_PRODUCT> {
	product: Product;
}
export interface SetProductAction extends Action<TypesNames.SET_PRODUCT> {
	product: Product;
}
export interface DeleteProductAction extends Action<TypesNames.DELETE_PRODUCT> {
	productId: string;
}
export interface DeleteProductSagaAction extends Action<TypesNames.DELETE_PRODUCT_SAGA> {
	productId: string;
}
export class Product {
	id: string;
	isInStock: boolean;
	price: string;
	picture: string;
	name: string;
	group: string;
	description: string;
	registered: string;
}

export interface ProductFilter {
	inStockOnly: boolean;
	filterText: string;
	filterTextById:string;
}
