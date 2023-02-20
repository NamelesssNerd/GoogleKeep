import { createSlice } from '@reduxjs/toolkit'


const initialState = []
if (localStorage.getItem("view") == null) {
    initialState[0] = true
} else {
    initialState[0] = localStorage.getItem("view")
}

const ViewSlices = createSlice({
    name: "view",
    initialState: initialState,
    reducers: {
        setCon(state, action) {
            state[0] = action.payload
        }
    }
});

export const { setCon } = ViewSlices.actions

export default ViewSlices.reducer