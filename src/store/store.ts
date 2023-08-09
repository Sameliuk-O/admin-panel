import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { FLUSH, PAUSE, PERSIST, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist';

import persistedReducer from './rootReducer';
import { allTemplatesApi } from '../services/allTemplatesApi';

const store = configureStore({
  middleware: (getDefaultMiddleware) => {
    const customMiddleware = [allTemplatesApi.middleware];

    const middlewareConfig = {
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    };

    return getDefaultMiddleware(middlewareConfig).concat(customMiddleware);
  },
  reducer: persistedReducer,
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);
export default store;
