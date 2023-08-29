import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Instance from "../api/apiConfig";

const initialState = {
  allBook: [],
  del_book : [],
  newBook : [],
  updateBookData : [],
  singleBookData : null,
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

  export const addNewBook = createAsyncThunk(
    "book/addNewBook",
    async (data, { rejectWithValue, fulfillWithValue }) => {
      try {
        const response = await Instance.post("/book",data);
        return fulfillWithValue(response);
      } catch (error) {
        return rejectWithValue(error.response);
      }
    }
  );

  export const updateBook = createAsyncThunk(
    "book/updateBook",
    async ({ editableId, formData }, { rejectWithValue, fulfillWithValue }) => {
      try {
        const response = await Instance.put(`/book/${editableId}`,formData);
        return fulfillWithValue(response);
      } catch (error) {
        return rejectWithValue(error.response);
      }
    }
  );

  export const singleBook = createAsyncThunk(
    "book/singleBook",
    async (id, { rejectWithValue, fulfillWithValue }) => {
      try {
        const response = await Instance.get(`/book/${id}`);
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
      state.del_book = [];
      state.newBook = [];
      state.singleBookData = null;
      state.updateBookData = [];
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
      })
      .addCase(addNewBook.pending, (state) => {
        state.loading = true;
      })
      .addCase(addNewBook.fulfilled, (state, action) => {
        state.loading = false;
        state.newBook = action.payload;
      })
      .addCase(addNewBook.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateBook.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateBook.fulfilled, (state, action) => {
        state.loading = false;
        state.updateBookData = action.payload;
      })
      .addCase(updateBook.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(singleBook.pending, (state) => {
        state.loading = true;
      })
      .addCase(singleBook.fulfilled, (state, action) => {
        state.loading = false;
        state.singleBookData = action.payload;
      })
      .addCase(singleBook.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetBookApi } = bookSlice.actions;
export default bookSlice.reducer;
