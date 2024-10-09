import { createSlice } from "@reduxjs/toolkit";
import {
  fetchContacts,
  addContact,
  deleteContact,
  editContact,
  statusFavorite,
} from "./operations";

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload; 
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter(contact => contact._id !== action.payload._id);
    })
      .addCase(deleteContact.rejected, handleRejected)
      .addCase(editContact.pending, handlePending)
      .addCase(editContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.map(contact =>
          contact._id === action.payload._id ? action.payload : contact
        );
    })
      .addCase(editContact.rejected, handleRejected)
      .addCase(statusFavorite.pending, handlePending)
      .addCase(statusFavorite.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const statusContact = action.payload; 
        const index = state.items.findIndex(
          (contact) => contact._id === statusContact._id 
        );
        if (index !== -1) {
          state.items[index] = statusContact; 
        }
    })
      .addCase(statusFavorite.rejected, handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
