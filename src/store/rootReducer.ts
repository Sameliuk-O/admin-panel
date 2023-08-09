import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { allTemplatesApi } from '../services/allTemplatesApi';

const rootReducer = combineReducers({
  [allTemplatesApi.reducerPath]: allTemplatesApi.reducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
export default persistedReducer;
