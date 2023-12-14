import {createSlice} from '@reduxjs/toolkit';


const cartSlice = createSlice({
    name:'Cart',
    initialState:["abc"],
    reducers:{
        addItem:(state,action)=>{
            state = [...state,action.payload]
        },

    }
});

export const { addItem } = cartSlice.actions;
export default cartSlice.reducer;