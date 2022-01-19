import {
  ERROR_GET_DOC_LIST,
  ERROR_GET_USER_DETAILS,
  START_GET_DOC_LIST,
  START_GET_USER_DETAILS,
  SUCCESS_GET_DOC_LIST,
  SUCCESS_GET_USER_DETAILS,
} from "../../constants/UserConstants";

const initState = {
  docList: [],
  isDocListLoading: false,
  docData: "",
  isDocDataLoading: false,
};

export const doc = (previousState, action) => {
  switch (action.type) {
    case START_GET_DOC_LIST:
      return {
        ...previousState,
        isDocListLoading: true,
        docList: [],
      };

    case SUCCESS_GET_DOC_LIST:
      return {
        ...previousState,
        isDocListLoading: false,
        docList: action.data,
      };

    case ERROR_GET_DOC_LIST:
      return {
        ...previousState,
        isDocListLoading: false,
      };

    case START_GET_USER_DETAILS:
      return {
        ...previousState,
        isDocDataLoading: true,
        docData: {},
      };

    case SUCCESS_GET_USER_DETAILS:
      return {
        ...previousState,
        isDocDataLoading: false,
        docData: action.data,
      };

    case ERROR_GET_USER_DETAILS:
      return {
        ...previousState,
        isDocDataLoading: false,
      };
    default:
      return previousState || initState;
  }
};
