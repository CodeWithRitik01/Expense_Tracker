import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const INITIALSTATE = {
    transactions:[]
}

export const getInitialStateAsync = createAsyncThunk("api/trans",
    () => {
        const data = axios.get("https://expense-tracker-server-udpa.onrender.com/transactions");
        return data;
    }
)

export const addTransactionAsync = createAsyncThunk("api/add", async(payload) =>{
    const {type, category, amount} = payload
    console.log(type, category, amount)
    const date = new Date();
    const data = { type, category, amount, date };

    const response = await axios.post(
        "https://expense-tracker-server-udpa.onrender.com/transactions",
        data
        
    );
        return response;
}
)

const transactionSlice = createSlice({
    name:"transactions", 
    initialState:INITIALSTATE,
    reducers:{

    },

    extraReducers:(builder)=>{
        builder.addCase(getInitialStateAsync.fulfilled, (state, action)=>{
            state.transactions = [...action.payload.data]
        })
    }
})

export const transactionReducer = transactionSlice.reducer;
export const actions = transactionSlice.actions;

export const transactionSelector = (state)=> state.transactionReducer;