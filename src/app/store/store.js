// store.js

import { createStore } from 'redux';

const initialState = {
  formData: {}, // Initially, there's no form data
  itemList:[]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_FORM_DATA':
      return {
        ...state,
        formData: action.payload,
      };
      case 'ADD_ITEM':
        return {
          ...state,
          itemList: [...state.itemList, action.payload],
        };
      default:
        return state;
    
  }
};

const store = createStore(reducer);

export default store;
