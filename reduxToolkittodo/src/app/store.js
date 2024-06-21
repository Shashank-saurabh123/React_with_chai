import {configureStore} from '@reduxjs/toolkit'

// stores ko sare reducers ki knowledge chahiye 

import todoReducer from '../features/todo/todoSlice';

export const store=configureStore({
    reducer: todoReducer
})

// import {configureStore} from '@reduxjs/toolkit';
// import todoReducer from '../features/todo/todoSlice';

// export const store = configureStore({
//     reducer: todoReducer
// })