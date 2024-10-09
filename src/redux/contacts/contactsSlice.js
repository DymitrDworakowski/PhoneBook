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
        state.items = action.payload; // Перезаписуємо старий масив контактів
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
        state.items = state.items.filter(contact => contact.id !== action.payload.id);
    })
      .addCase(deleteContact.rejected, handleRejected)
      .addCase(editContact.pending, handlePending)
      .addCase(editContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.map(contact =>
          contact.id === action.payload._id ? action.payload : contact
        );
    })
      .addCase(editContact.rejected, handleRejected)
      .addCase(statusFavorite.pending, handlePending)
      .addCase(statusFavorite.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const statusContact = action.payload; // Оновлений контакт
        // console.log('Updated favorite status:', statusContact); 
        const index = state.items.findIndex(
          (contact) => contact._id === statusContact._id // Переконайся, що використовуєш правильне поле
        );
        if (index !== -1) {
          // Якщо контакт існує у списку, замініть його оновленим контактом
          state.items[index] = statusContact; // Використовуй присвоєння, щоб оновити статус
        }
    })
      .addCase(statusFavorite.rejected, handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
