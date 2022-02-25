import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userslice";
import cartSlice from "./cartSlice";
import storage from 'redux-persist/lib/storage'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'


const persistConfig = {
    key: 'root',
    storage,
  }
const persistConfigCart = {
    key: 'cart',
    storage,
  }
   


  const persistUser = persistReducer(persistConfig, userSlice)
  const persistCart = persistReducer(persistConfigCart, cartSlice)

export const store = configureStore({
    reducer:{
        user:persistUser,
        cart:persistCart
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }),
})

let persistor = persistStore(store)

export {persistor}
