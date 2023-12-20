import React from 'react';
import { createRoot } from 'react-dom/client'; 
import { store } from './app/store';
import { Provider } from 'react-redux';
import App from './App';
import { fetchCollection } from './features/collection/collectionSlice';
import { fetchWishlist } from './features/wishlist/wishlistSlice';

store.dispatch(fetchCollection());
store.dispatch(fetchWishlist());

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
