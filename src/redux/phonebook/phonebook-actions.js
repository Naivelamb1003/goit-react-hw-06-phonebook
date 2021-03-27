
import { v4 as uuidv4 } from "uuid";
import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('todos/add', (name,number) =>{
    return {
        payload: {
                     id: uuidv4(),
                     name,
                     number
                }
    }
}  )

// const addContact = (name,number) =>({
//     type: types.ADD,
//     payload: {
//         id: uuidv4(),
//         name,
//         number
//     }
// });

const deleteContact = createAction('todos/delete');

// const deleteContact = (id) => ({
//     type: types.DELETE,
//     payload: id
// })

const changeFilter = createAction('todos/change_filter');

// const changeFilter = (value) => ({
//     type: types.CHANGE_FILTER,
//     payload: value
// })

const loadFromStorage = createAction('todos/load_storage');

// const loadFromStorage = (contacts) => ({
//     type: types.LOAD_STORAGE,
//     payload: contacts
// })
export default {addContact, deleteContact, changeFilter, loadFromStorage};