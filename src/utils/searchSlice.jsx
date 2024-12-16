import { createSlice } from "@reduxjs/toolkit";
import { astrologersData } from "./AstrologerData";

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        serachTerm: '',
        astrologerData: [],
        filteredData : []
    },
    reducers: {
        setAstrologerData: (state, action) => {
            state.astrologerData = action.payload
        },
        setSearchQuery: (state, action) => {
            state.serachTerm = action.payload
            state.filteredData = state.astrologerData.filter((astrologer) => 
            astrologer.name.toLowerCase().includes(state?.serachTerm?.toLowerCase()))
        }
    }
})


export const {setAstrologerData, setSearchQuery}  = searchSlice.actions;

export default searchSlice.reducer;