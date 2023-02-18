import { configureStore } from "@reduxjs/toolkit";
import homeSlices from "./homeSlices";
import BinSlices from "./BinSlices";
const store = configureStore({
    reducer: {
        home: homeSlices,
        bin: BinSlices
    }
})

export default store