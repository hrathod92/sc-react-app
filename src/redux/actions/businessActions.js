import { ActionTypes } from "../contents/action-types";
export const setBusinesses = (businesses) => {
    return {
        type: ActionTypes.SET_BUSINESS,
        payload: businesses
    }
}

export const selectedBusiness = (business) => {
    return {
        type: ActionTypes.SELECTED_BUSINESS,
        payload: business
    }
}