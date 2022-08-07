import {
  Action,
  configureStore,
  ThunkAction,
} from '@reduxjs/toolkit';
import productReducer from '../features/productReducer';

export const store = configureStore({
  reducer: {
    reducer: productReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
