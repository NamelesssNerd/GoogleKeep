import { createSlice } from '@reduxjs/toolkit'
let bininitial = []
let puranoData = JSON.parse(localStorage.getItem("bin"));
if (puranoData == null) {
    const jsonparse = []
    localStorage.setItem("bin", JSON.stringify(jsonparse))
} else {
    bininitial = puranoData
}
const binSlices = createSlice({
    name: "bin",
    initialState: bininitial,
    reducers: {
        addBinNotes(state, action) {
            state.push(action.payload)
        },
        removeBinNotes(state, action) {
            state.splice(action.payload, 1)
        }
    }
});
export const { addBinNotes, removeBinNotes } = binSlices.actions
export default binSlices.reducer