import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

export interface User {
  id: number;
  name: string;
  email: string;
  address: { city: string };
}

interface UserState {
  users: User[];
  loading: boolean;
}

const initialState: UserState = {
  users: [],
  loading: false,
};

// Fetch users from API
export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  return (await response.json()) as User[];
});

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload);
    },
    updateUser: (state, action: PayloadAction<User>) => {
      const index = state.users.findIndex((u) => u.id === action.payload.id);
      if (index !== -1) state.users[index] = action.payload;
    },
    deleteUser: (state, action: PayloadAction<number>) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      });
  },
});

export const { addUser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
