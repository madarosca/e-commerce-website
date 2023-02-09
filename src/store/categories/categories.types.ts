export enum CATEGORIES_ACTION_TYPES {
	SET_CATEGORIES = 'categories/SET_CATEGORIES',
	FETCH_CATEGORIES_START = 'categories/FETCH_CATEGORIES_START',
	FETCH_CATEGORIES_SUCCESS = 'categories/FETCH_CATEGORIES_SUCCESS',
	FETCH_CATEGORIES_FAILED = 'categories/FETCH_CATEGORIES_FAILED',
}

export type CategoryItem = {
	id: number;
	imageUrl: string;
	name: string;
	price: number;
	whishlist?: boolean;
};

export type Category = {
	title: string;
	imageUrl: string;
	items: CategoryItem[];
};

export type CategoryMap = {
	[key: string]: CategoryItem[];
};
