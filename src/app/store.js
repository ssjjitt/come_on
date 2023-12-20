import { configureStore } from '@reduxjs/toolkit';
import collectionReducer from '../features/collection/collectionSlice';
//import searchReducer from '../features/search/searchSlice';
import wishlistReducer from '../features/wishlist/wishlistSlice';

// используем redux-toolkit, ура требование выполнено
export const store = configureStore({ // хранилище redux
  reducer: { // редюсер управляет состоянием 
    collection: collectionReducer,
    //search: searchReducer,
    wishlist: wishlistReducer,
  },
});