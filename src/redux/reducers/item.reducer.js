export const itemReducer = (state = [], action) => {

    // switch on different action types (saga commands)
  switch (action.type) {

    // sets reducer state to action payload
    case 'SET_ITEMS':
      return action.payload;

    // sets reducer state to empty array
    case 'CLEAR_ITEMS':
      return [];

    // sets reducer state to previous state
    // plus action payload
    case 'ADD_ITEM':
      return [...state, action.payload];

    // removes an item from state
    case 'DELETE_ITEM':
      return state; // Update later. :3
    default:
      return state;
  }
};

