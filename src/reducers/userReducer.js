import { GET_USER_SUCESS, SET_USER_NAME } from '../actions/userActions';

const INITIAL_STATE = {
  user: {},
};

function pokeReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_USER_SUCESS:
      return { ...state, user: action.payload };
    case SET_USER_NAME:
      console.log(action);
      return {
        ...state,
        user: {
          ...state.user,
          name: { ...state.user.name, first: action.payload },
        },
      };
    default:
      return state;
  }
}

export default pokeReducer;
