import { configureStore } from "@reduxjs/toolkit";
import blogSlice from "./slices/blogSlice";

export const store = configureStore({
  reducer: {
    // auth: authSlice,
    // courses: coursesSlice,
    blog: blogSlice,
    // ui: uiSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
});

export default store;