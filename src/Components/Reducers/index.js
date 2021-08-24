import { combineReducers } from "redux";
//import reducersFunctions from "./reducersFunctions";

let initialState = {
  users: [],
  userName: "",
  userAge: "",
  userGender: "",
};

const users = (state = [...initialState.users], actions) => {
  console.log(actions.payload);
  switch (actions.type) {
    case "ADD_USER":
      console.log(actions.payload);
      return [...state, { ...state.users, ...actions.payload }];
    default:
      return state;
  }
};

let userName = (state = initialState.userName, actions) => {
  switch (actions.type) {
    case "ADD_USERNAME":
      return actions.payload; //[...state], (userName = actions.payload);
    default:
      return state;
  }
};

let userAge = (state = initialState.userAge, actions) => {
  switch (actions.type) {
    case "ADD_USERAGE":
      return [...state], (userAge = actions.payload);
    default:
      return state;
  }
};

let userGender = (state = initialState.userGender, actions) => {
  switch (actions.type) {
    case "ADD_USERGENDER":
      return [...state], (userGender = actions.payload);
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  users,
  userName,
  userAge,
  userGender,
});

export default rootReducer;
