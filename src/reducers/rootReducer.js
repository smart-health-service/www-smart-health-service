import { combineReducers } from "redux";
import { user } from "./User/UserReducer";
import { doc } from "./User/docReducers";
import { appointment } from "./appointment/appointmentReducer";

export default combineReducers({ user, doc, appointment });
