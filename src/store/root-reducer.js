import { combineReducers } from "redux"; // import combineReducers

import { userReducer } from "./user/user.reducer"; // import userReducer defined within the user directory
import { categoriesReducer } from "./categories/category.reducer";

export const rootReducer = combineReducers({ // Define a varuable that is the root for all of the reducers using the combineReducers function and sets it as an object where the values are the reducers defined within the app
    user: userReducer,
    categories: categoriesReducer
});