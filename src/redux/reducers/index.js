import { combineReducers } from "redux"
import { businessReducer } from "./businessReducer"

const reducers = combineReducers({
    allBusinesses: businessReducer,
});

export default reducers;