import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Instance from "../api/apiConfig";

const initialState = {
  loginData: [],
  registerData : [],
  allUser:[],
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

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    resetResp: (state) => {
      state.loginData = [];
      state.registerData = [];
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
        localStorage.setItem("token",action.payload.data.token)
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
      });
  },
});

export const { resetResp } = authSlice.actions;
export default authSlice.reducer;
