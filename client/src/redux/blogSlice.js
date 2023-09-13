import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Instance from "../api/apiConfig";

const initialState = {
  allBlog:null,
  loading: false,
  error: null,
};

  export const getallBlog = createAsyncThunk(
    "book/getallBlog",
    async (_, { rejectWithValue, fulfillWithValue }) => {
      try {
        const response = await Instance.get("/blog");
        return fulfillWithValue(response);
      } catch (error) {
        return rejectWithValue(error.response);
      }
    }
  );


const bookSlice = createSlice({
  name: "blog",
  initialState: initialState,
  reducers: {
    resetBookApi: (state) => {
      state.allBlog = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getallBlog.pending, (state) => {
        state.loading = true;
      })
      .addCase(getallBlog.fulfilled, (state, action) => {
        state.loading = false;
        state.allBlog = action.payload.data;
      })
      .addCase(getallBlog.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetBookApi } = bookSlice.actions;
export default bookSlice.reducer;
