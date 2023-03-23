import { USER_ACTION_TYPES } from "./user.types";

const INITIAL_STATE = {
    currentUser: null // Set's an initial state to use as a default for the userReducer
}

export const userReducer = (state = INITIAL_STATE, action) => { // Sets the state defined above as a default value and passes in an action, which is an object that has a type and payload keys
    const { type, payload } = action; // Deconstructs the type and payload keys from the action object being passed in

    switch (type) { // Uses a switch statement to see if the type key in the action matches based on what we want it to do
        case USER_ACTION_TYPES.SET_CURRENT_USER: // In this case
            return { // Return the state and set the currentUser to be whatever the payload is set to
                ...state,
                currentUser: payload
            }
        default: // If nothing above is passed in as the action type, then return the state as it was
            return state;
    }
}