import { combineReducers, configureStore } from "@reduxjs/toolkit"; // 1. import combineReducers

// Import App Config
import {isDevelopment} from '@app/App_Config';

// Import Redux Slice
import StatusSlice from '@app/Redux/Components/Status';

// 4. Create a Main Store
const Store = configureStore({
    reducer: combineReducers({
        status: StatusSlice.reducer,
    }),
    devTools: isDevelopment,
    preloadedState: {
        status: {
            InternetStatus: true,
        },
    },
})


// Export the Store
export default Store; // 2. export default Store