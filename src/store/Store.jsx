import { configureStore } from "@reduxjs/toolkit";
import homeSlices from "./homeSlices";
import BinSlices from "./BinSlices";
import ViewSlices from "./ViewSlices";
const store = configureStore({
    reducer: {
        home: homeSlices,
        bin: BinSlices,
        view: ViewSlices
    }
})

export default store