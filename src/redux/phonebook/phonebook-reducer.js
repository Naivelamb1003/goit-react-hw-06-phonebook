import { combineReducers } from 'redux';
import types from './phonebook-types'

const contacts = (state = [], {type,payload} ) =>{
    switch (type) {
        case types.ADD:
            return [...state, payload];
        case types.DELETE: 
            return state.filter(el => el.id != payload);
        case types.LOAD_STORAGE:
            return [...payload];
        default:
            return state;
    }
};

const filter = (state = '', {type, payload}) => {
    switch (type) {
    case types.CHANGE_FILTER:
        return payload;
    default:
        return state;
    }
};

export default combineReducers ({
    contacts,
    filter,

});