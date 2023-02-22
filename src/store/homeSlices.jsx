import { createSlice } from '@reduxjs/toolkit'
let homeinitial = []
let puranoData = JSON.parse(localStorage.getItem("note"));
if (puranoData == null) {
    const jsonparse = []
    localStorage.setItem("note", JSON.stringify(jsonparse))
} else {
    homeinitial = puranoData
}
const homeSlice = createSlice({
    name: "home",
    initialState: homeinitial,
    reducers: {
        addHomeNotes(state, action) {
            state.unshift(action.payload)
        },
        removeHomeNotes(state, action) {
            state.splice(action.payload, 1)
        }
    }
});
export const { addHomeNotes, removeHomeNotes } = homeSlice.actions

export default homeSlice.reducer 