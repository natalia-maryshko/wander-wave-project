/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Post } from '../types/Post';
import axiosInstance from '../api/axiosInstance';
import { PostData } from '../types/PostDetails';

type PostsState = {
  posts: Post[];
  loading: boolean;
  error: boolean;
  createLoading: boolean;
  createError: boolean;
};

const initialState: PostsState = {
  posts: [],
  loading: false,
  error: false,
  createLoading: false,
  createError: false,
};

export const init = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await axiosInstance.get(
    'http://127.0.0.1:8008/api/platform/posts/',
  );
  return response.data;
});

export const createPost = createAsyncThunk(
  'posts/createPost',
  async (postData: PostData, { getState }) => {
    const token = localStorage.getItem('access');
    const headers = { Authorization: `Bearer ${token}` };

    const formData = new FormData();
    formData.append('title', postData.title);
    formData.append('content', postData.content);
    formData.append('location', postData.location.toString());
    postData.hashtags.forEach((tag, index) => {
      formData.append(`hashtags`, tag.toString());
    });

    if (postData.photo) {
      formData.append('photo', postData.photo);
    }

    const postResponse = await axiosInstance.post(
      'http://127.0.0.1:8008/api/platform/posts/',
      formData,
      {
        headers: {
          ...headers,
          'Content-Type': 'multipart/form-data'
        },
      },
    );

    return postResponse.data;
  },
);

export const deletePost = createAsyncThunk(
  'posts/deletePost',
  async (postId: number, { rejectWithValue }) => {
    try {
      await axiosInstance.delete(
        `http://127.0.0.1:8008/api/platform/posts/${postId}/`
      );
      return postId;
      ;
    } catch (error) {
      return rejectWithValue('Failed to delete post');
    }
  }
);

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(init.pending, state => {
      state.loading = true;
      state.error = false;
    });

    builder.addCase(init.rejected, state => {
      state.loading = false;
      state.error = true;
    });

    builder.addCase(init.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = action.payload;
    });

    builder.addCase(createPost.pending, state => {
      state.createLoading = true;
      state.createError = false;
    });

    builder.addCase(createPost.rejected, state => {
      state.createLoading = false;
      state.createError = true;
    });

    builder.addCase(createPost.fulfilled, (state, action) => {
      state.createLoading = false;
      state.posts.push(action.payload);
    });

    builder.addCase(deletePost.fulfilled, (state, action) => {
      state.posts = state.posts.filter(post => post.id !== action.payload);
    });
  },
});

export default postsSlice.reducer;
