import { configureStore, combineReducers } from '@reduxjs/toolkit'
import phonebookReducer from './phonebook/phonebook-reducer';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'hi',
    storage,
}

const rootReducer = combineReducers({
    phonebook: phonebookReducer
})
const persistedReducer = persistReducer(persistConfig,rootReducer )

const store = configureStore ({
    reducer:persistedReducer,
    devTools: process.env.NODE_ENV === 'development', 
})

const persistor = persistStore(store);

export default {store, persistor };