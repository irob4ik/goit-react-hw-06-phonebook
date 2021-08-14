import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from "redux-persist";
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import contactsReducer from './phonebook-reducer';

const middlware = (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
}).concat(logger);

const contactsPersistConfig = {
    key: 'contacts',
    version: 1,
    storage,
    blacklist: ['filter'],
};

const store = configureStore({
    reducer: {
        contacts: persistReducer(contactsPersistConfig, contactsReducer)
    },
    middlware,
    devTools: process.env.NODE_ENV === 'development',
});

let persistor = persistStore(store);

const storeNpersistor = { store, persistor };
export default storeNpersistor;