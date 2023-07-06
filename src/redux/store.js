import { configureStore } from "@reduxjs/toolkit"
import { reducer } from "./reducer"

// store is created and passed reducer 
const store = configureStore({
    reducer: reducer
})

export default store;