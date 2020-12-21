export const initialState = {
  user: null,
  basket: [],
};

export const actionTypes = {
  SET_USER: "SET_USER",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    case 'ADD_TO_BASKET':
        return{
          ...state,
          basket:[...state.basket, action.item],
        }
        default:
      return state;
  }
  

};









export default reducer;
