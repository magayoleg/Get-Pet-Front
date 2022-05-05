import { GET_ALL_PETS } from '../types/getAllPetsTypes';

// eslint-disable-next-line default-param-last
const getAllPetsReducer = (state = false, action) => {
  switch (action.type) {
    case GET_ALL_PETS:
      return action.payload;

    default:
      return state;
  }
};

export default getAllPetsReducer;