import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Instance from "../api/apiConfig";

const initialState = {
  allBook: [],
  del_book : [],
  loading: false,
  error: null,
};

  export const getallBook = createAsyncThunk(
    "book/getallBook",
    async (_, { rejectWithValue, fulfillWithValue }) => {
      try {
        const response = await Instance.get("/book");
        return fulfillWithValue(response);
      } catch (error) {
        return rejectWithValue(error.response);
      }
    }
  );

  export const deleteBook = createAsyncThunk(
    "book/deleteBook",
    async (id, { rejectWithValue, fulfillWithValue }) => {
      try {
        const response = await Instance.delete(`/book/${id}`);
        return fulfillWithValue(response);
      } catch (error) {
        return rejectWithValue(error.response);
      }
    }
  );

const bookSlice = createSlice({
  name: "book",
  initialState: initialState,
  reducers: {
    resetBookApi: (state) => {
      state.getallBook = [];
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getallBook.pending, (state) => {
        state.loading = true;
      })
      .addCase(getallBook.fulfilled, (state, action) => {
        state.loading = false;
        state.allBook = action.payload;
      })
      .addCase(getallBook.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteBook.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteBook.fulfilled, (state, action) => {
        state.loading = false;
        state.del_book = action.payload;
      })
      .addCase(deleteBook.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetBookApi } = bookSlice.actions;
export default bookSlice.reducer;
