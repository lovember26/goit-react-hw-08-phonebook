import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: [], isLoading: false, error: null },
  extraReducers: builder => {
    builder.addCase(fetchContacts.pending, handlePending);
    builder.addCase(fetchContacts.fulfilled, (state, action) => {
      resetState(state);
      state.contacts = action.payload;
    });
    builder.addCase(fetchContacts.rejected, handleRejected);
    builder.addCase(addContact.pending, handlePending);
    builder.addCase(addContact.fulfilled, (state, action) => {
      resetState(state);
      state.contacts.push(action.payload);
    });
    builder.addCase(addContact.rejected, handleRejected);
    builder.addCase(deleteContact.pending, state => {
      state.isLoading = false;
    });
    builder.addCase(deleteContact.fulfilled, (state, action) => {
      resetState(state);
      const index = state.contacts.findIndex(
        contact => contact.id === action.payload.id
      );
      state.contacts.splice(index, 1);
    });
    builder.addCase(deleteContact.rejected, handleRejected);
  },
});

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const resetState = state => {
  state.isLoading = false;
  state.error = null;
};

export const { fetchingSuccess, fetchingError, fetchingInProgress } =
  contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
