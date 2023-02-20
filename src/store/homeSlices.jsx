import { createSlice } from '@reduxjs/toolkit'
const homeinitial = []
const homeSlice = createSlice({
    name: "home",
    initialState: homeinitial,
    reducers: {
        addHomeNotes(state, action) {
            console.log(action.payload)
         },
        removeHomeNotes(state, action) { }
    }
});
export const { addHomeNotes, removeHomeNotes } = homeSlice.actions

export default homeSlice.reducer 