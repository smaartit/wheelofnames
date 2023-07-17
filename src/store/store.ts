import { configureStore } from "@reduxjs/toolkit";
import wheelSlice from "../slice/wheelSlice";
const store = configureStore({
    reducer: {wheel: wheelSlice.reducer}
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;