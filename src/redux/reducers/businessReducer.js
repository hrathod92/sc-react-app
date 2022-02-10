import { ActionTypes } from "../contents/action-types";

const initialState = {
    businesses: [],
}
export const businessReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_BUSINESS:
            return {...state, businesses: payload};
        default:
            return state;
    }
}
