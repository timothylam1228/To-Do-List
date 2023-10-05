import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import todoListReducer from "../features/todolist/todoListSlice"
import storage from "redux-persist/lib/storage"
import { persistReducer, persistStore } from "redux-persist"

const persistConfig = {
  key: "root",
  storage,
}

const persistedReducer = persistReducer(persistConfig, todoListReducer)

export const store = configureStore({
  reducer: persistedReducer,
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
export const persistor = persistStore(store)
