import { GET_USER_SUCESS, SET_USER_NAME, RESET_USER } from '../actions/userActions';

const INITIAL_STATE = {
  user: {},
};

function pokeReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case RESET_USER:
      return { user: {} };
    case GET_USER_SUCESS:
      return { ...state, user: action.payload };
    case SET_USER_NAME:
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
