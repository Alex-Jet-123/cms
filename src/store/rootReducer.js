import {combineReducers} from "redux";

import sorting from "./reducers/sorting";
import loading from "./reducers/loading";
import status from "./reducers/status";
import page from "./reducers/page";
import instruments from "./reducers/instruments";
import list from "./reducers/list";
import favorites from "./reducers/favorites";

export default combineReducers({
    sorting,
    loading,
    status,
    page,
    instruments,
    list,
    favorites
})