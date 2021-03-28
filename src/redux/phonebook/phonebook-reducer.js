import { combineReducers } from 'redux';
import {createReducer} from '@reduxjs/toolkit';
import actions from './phonebook-actions'

const contacts = createReducer([], {
    [actions.addContact]: (state, {payload}) => [...state, payload],
    [actions.deleteContact]: (state, {payload}) => state.filter(el => el.id !== payload),
})

const filter = createReducer('', {
    [actions.changeFilter]: (_, {payload}) => payload,
    
})


// const contacts = (state = [], {type,payload} ) =>{
//     switch (type) {
//         case types.ADD:
//             return [...state, payload];
//         case types.DELETE: 
//             return state.filter(el => el.id != payload);
//         case types.LOAD_STORAGE:
//             return [...payload];
//         default:
//             return state;
//     }
// };

// const filter = (state = '', {type, payload}) => {
//     switch (type) {
//     case types.CHANGE_FILTER:
//         return payload;
//     default:
//         return state;
//     }
// };

export default combineReducers ({
    contacts,
    filter,

});