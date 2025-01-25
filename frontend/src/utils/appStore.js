import {configureStore} from '@reduxjs/toolkit'
import cartReducer from './cartSlice'
const appStore = configureStore({

    // combining  the slice reducers into the root reducer

    reducer:{
        cart:cartReducer,
    },

});

export default appStore;