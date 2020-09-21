import * as ActionConstant from "./actionConstant";

export const getData = (payload) => {
  return {
    type: ActionConstant.GET_DATA,
    payload,
  };
};

export const filterData = (payload) => {
  return {
    type: ActionConstant.FILTER_DATA,
    payload,
  };
};

export const clearFilter = (payload) => {
  return {
    type: ActionConstant.FILTER_DATA,
    payload,
  };
};

export const UPDATE_DATA = (payload) => {
  return {
    type: ActionConstant.UPDATE_DATA,
    payload,
  };
};

export const deleteRecord = (payload) => {
  return {
    type: ActionConstant.DELETE,
    payload,
  };
};

export const filterByName = (payload) => {
  return {
    type: ActionConstant.FILTER,
    payload,
  };
};
