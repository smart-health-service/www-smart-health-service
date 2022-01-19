import { combineReducers } from "redux";
import { user } from "./User/UserReducer";
import { doc } from "./User/docReducers";

export default combineReducers({ user, doc });
