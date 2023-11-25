import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {
    const responce = await axios.get("/contacts")
    return responce.data
})

export const addContact = createAsyncThunk(
	'contacts/fetchPost',
	async ({ name, number }, thunkAPI) => {
		try {
			const response = await axios.post('/contacts', { name, number });
			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);

export const deleteContact = createAsyncThunk("contacts/deleteContact", async (id) => {
    const responce = await axios.delete(`/contacts/${id}`)
    return responce.data
})
