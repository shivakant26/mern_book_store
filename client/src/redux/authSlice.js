import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Instance from "../api/apiConfig";

const initialState = {
  loginData: [],
  registerData: [],
  allUser: [],
  delAuthor: [],
  signleUserData: [],
  updateAuthors: [],
  loading: false,
  error: null,
};

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (data, { rejectWithValue, fulfillWithValue }) => {
    try {
      const response = await Instance.post("/signin", data);
      return fulfillWithValue(response);
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (data, { rejectWithValue, fulfillWithValue }) => {
    debugger;
    try {
      const response = await Instance.post("/signup", data);
      return fulfillWithValue(response);
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

export const allUsers = createAsyncThunk(
  "auth/allUsers",
  async (_, { rejectWithValue, fulfillWithValue }) => {
    try {
      const response = await Instance.get("/users");
      return fulfillWithValue(response);
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

export const deleteAuthor = createAsyncThunk(
  "auth/deleteAuthor",
  async (id, { rejectWithValue, fulfillWithValue }) => {
    try {
      const response = await Instance.delete(`/users/${id}`);
      return fulfillWithValue(response);
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

export const signleAuthor = createAsyncThunk(
  "auth/signleAuthor",
  async (data, { rejectWithValue, fulfillWithValue }) => {
    const { _id, ...object } = data;
    try {
      const response = await Instance.put(`/users/${_id}`, object);
      return fulfillWithValue(response);
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

export const updateAuthor = createAsyncThunk(
  "auth/updateAuthor",
  async (data, { rejectWithValue, fulfillWithValue }) => {
    const { _id, ...object } = data;
    try {
      const response = await Instance.put(`/users/${_id}`, object);
      return fulfillWithValue(response);
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    resetResp: (state) => {
      state.loginData = [];
      state.registerData = [];
      state.delAuthor = [];
      state.updateAuthors = [];
      state.signleUserData = [];
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload.data.role === "admin") {
          localStorage.setItem("admin-token", action.payload.data.token);  
        } else {
          localStorage.setItem("token", action.payload.data.token); 
        }
        sessionStorage.setItem("email",action.payload.data.email)
        state.loginData = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.registerData = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(allUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(allUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.allUser = action.payload;
      })
      .addCase(allUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteAuthor.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteAuthor.fulfilled, (state, action) => {
        state.loading = false;
        state.delAuthor = action.payload;
      })
      .addCase(deleteAuthor.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateAuthor.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateAuthor.fulfilled, (state, action) => {
        state.loading = false;
        state.updateAuthors = action.payload;
      })
      .addCase(updateAuthor.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(signleAuthor.pending, (state) => {
        state.loading = true;
      })
      .addCase(signleAuthor.fulfilled, (state, action) => {
        state.loading = false;
        state.signleUserData = action.payload;
      })
      .addCase(signleAuthor.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetResp } = authSlice.actions;
export default authSlice.reducer;
