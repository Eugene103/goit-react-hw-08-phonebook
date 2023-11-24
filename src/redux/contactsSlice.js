import { createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "./operations";

const contactsSlice = createSlice({
    name: 'contacts', 
    initialState: {
      contacts: [],
      isLoading: false, 
      error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchContacts.pending, (state, action) => {
        state.isLoading = true
    })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.error = null
        state.isLoading = false
        state.contacts = action.payload
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
        alert(state.error)
      })
    .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.push(action.payload)
      })
      .addCase(addContact.rejected, (state,action) => {
        state.isLoading = false
        state.error = action.payload
        alert(state.error)
      })
    .addCase(deleteContact.fulfilled, (state, action) => {
      const index = state.contacts.findIndex(contact => contact.id === action.payload.id);
      state.contacts.splice(index, 1);
    })
      .addCase(deleteContact.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
        alert(state.error)
      })
    }
})

export const contactsReducer = contactsSlice.reducer;