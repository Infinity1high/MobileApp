import * as searchActions from './actions.js';
import { combineReducers } from 'redux';

const initState = {
    pictures: [],
    offset: 0,
    limit: 100,
};

const dataReducer = (state = initState, action) => {
    switch (action.type) {
      case searchActions.LOAD_DATA:
            return {
                ...state,
              pictures: state.pictures.concat(action.payload),
              offset: state.offset + 100,
              limit: state.limit + 100,
            };
        default:
            return state;
    }
};

const reducers = combineReducers({
  dataReducer
});

export default reducers;
