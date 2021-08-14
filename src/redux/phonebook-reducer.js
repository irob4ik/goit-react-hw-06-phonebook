import { combineReducers } from "redux";
import { createReducer } from '@reduxjs/toolkit';
import actions from './phonebook-actions';

const INITIAL_STATE = [
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' }
];

const items = createReducer(INITIAL_STATE, {
    [actions.addContact]: (state, { payload }) => [...state, payload],
    [actions.deleteContact]: (state, { payload }) =>
        state.filter(({number}) => number !== payload),
})

const filter = createReducer('', {
    [actions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
    items,
    filter
})