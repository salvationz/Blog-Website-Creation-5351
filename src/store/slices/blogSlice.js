import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchBlogPosts = createAsyncThunk(
  "get_blog",
    async () =>  {
        const response = await axios.get("http://localhost:8000/api/v1/blogs/");
        return response.data;
    }
);

const blogSlice = createSlice({
  name: "blog",
  initialState: {
    posts: [],
    loading: false,
    error: null,
  },
  reducers: {
    clearPosts: (state) => {
      state.posts = [];
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBlogPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.loading = false;
      })
      .addCase(fetchBlogPosts.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export const { clearPosts } = blogSlice.actions;
export const selectBlogPosts = (state) => state.blog.posts;
export default blogSlice.reducer;