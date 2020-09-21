import { initialState } from "./../component/Data";
import * as ActionConstant from "./actionConstant";

const Reducer = (state = initialState, action) => {
  let stateData = [...initialState];
  switch (action.type) {
    case ActionConstant.GET_DATA:
      return [...state];

    case ActionConstant.FILTER_DATA:
      return filterData(stateData, action.payload);

    case ActionConstant.CLEAR_FILTER:
      return stateData;

    case ActionConstant.UPDATE_DATA:
      return updateMessage(state, action.payload);

    case ActionConstant.DELETE:
      return deleteRecords(state, action.payload);

    case ActionConstant.FILTER:
      return filterByName(stateData, action.payload);

    default:
      return state;
  }
};

const filterData = (state, payload) => {
  let data = [...state];
  if (payload) {
    if (payload.skills && payload.skills.length) {
      data = filterSkills(data, payload.skills);
    }
    if (payload.technology && payload.technology.length) {
      data = filterTech(data, payload.technology);
    }
    if (payload.location && payload.location.length) {
      data = filterLocation(data, payload.location);
    }
    if (payload && payload.exp) {
      data = filterByExperience(data, payload.exp);
    }
  }
  return data;
};

const filterSkills = (state, skills) => {
  return state.filter((item) => {
    if (skills.every((skill) => item.skills.includes(skill))) {
      return item;
    }
  });
};

const filterTech = (state, technologies) => {
  return state.filter((item) => {
    if (technologies.every((tech) => item.technologies.includes(tech))) {
      return item;
    }
  });
};

const filterLocation = (state, locationList) => {
  return state.filter((item) => {
    if (locationList.every((location) => item.location.includes(location))) {
      return item;
    }
  });
};

const filterByExperience = (state, exp) => {
  return state.filter((item) => item.exp >= exp);
};

const updateMessage = (state, payload) => {
  let newState = [...state];
  let index = newState.findIndex((emp) => emp.id === payload.id);
  newState[index].message = payload.message;
  return newState;
};

const deleteRecords = (state, payload) => {
  return [...state].filter((empRecord) => !payload.includes(empRecord.id));
};

const filterByName = (state, payload) => {
  if (!payload || payload === "") return state;
  console.log(
    [...state].filter((emp) =>
      emp.name.toLowerCase().includes(payload.toLowerCase())
    )
  );
  return [...state].filter((emp) =>
    emp.name.toLowerCase().includes(payload.toLowerCase())
  );
};

export default Reducer;
