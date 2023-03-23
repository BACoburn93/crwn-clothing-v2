import createAction from "../../utils/reducer/reducer.utils"; // Rens a function that accepts two arguments, the first is set to the key of type and the second is set to the key of payload

import { USER_ACTION_TYPES } from "./user.types"; // Imports the USER_ACTION_TYPES object which is used to reference the strings for the type when we call the action. Not necessary, but typical practice to do rather than hard code the strings

export const setCurrentUser = (user) => createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user); // Create a function called setCurrentUser that accepts a user data and returns an object where type is set to the string inside of the switch statement and a a payload key which is the user that is being passed in





