export const GET_USER_SUCESS = 'GET_USER_SUCESS';
export const SET_USER_NAME = 'SET_USER_NAME';

export const getUserSucess = (payload) => ({
  type: GET_USER_SUCESS,
  payload,
});

export const setUserName = (payload) => ({
  type: SET_USER_NAME,
  payload,
});

// export const getPokemonsThunk = () => async (dispatch) => {
//   try {
//     const pokemons = await getAllPokemons();
//     dispatch(getPokemonsSucess(pokemons));
//   } catch (error) {
//     dispatch(getPokemonsError(error));
//   }
// };
