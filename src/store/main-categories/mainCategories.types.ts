import { Key } from 'react';

export enum MAIN_CATEGORIES_ACTION_TYPES {
	FETCH_MAIN_CATEGORIES_START = 'mainCategories/FETCH_MAIN_CATEGORIES_START',
	FETCH_MAIN_CATEGORIES_SUCCESS = 'mainCategories/FETCH_MAIN_CATEGORIES_SUCCESS',
	FETCH_MAIN_CATEGORIES_FAILED = 'mainCategories/FETCH_MAIN_CATEGORIES_FAILED',
}

export type MainCategory = {
	id: Key;
	title: string;
	imageUrl: string;
	route: string;
};
