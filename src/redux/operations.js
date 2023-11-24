import { createAsyncThunk } from "@reduxjs/toolkit";
import axios  from "axios";

axios.defaults.baseURL = "https://655fa05b879575426b4598d2.mockapi.io"

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async () => {
    const responce = await axios.get("/contacts")
    return responce.data
})

export const addContact = createAsyncThunk("contacts/addContact", async (newContact) => {
    const responce = await axios.post("/contacts", newContact)
    return responce.data
})

export const deleteContact = createAsyncThunk("contacts/deleteContact", async (id) => {
    const responce = await axios.delete(`/contacts/${id}`)
    return responce.data
})
