import { createSlice } from '@reduxjs/toolkit'
const bininitial = []
const binSlices = createSlice({
    name: "bin",
    initialState: bininitial,
    reducers: {
        addBinNotes(state, action) { },
        removeBinNotes(state, action) { }
    }
});
export const { addBinNotes, removeBinNotes } = binSlices.actions
export default binSlices.reducer