import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../../redux/phonebook-actions';
import styles from './filter.module.css'

export default function Filter() {
    const value = useSelector(state => state.contacts.filter);
    const dispatch = useDispatch();

    return (
        <label htmlFor="filter" className={styles.filterLabel}>Find contacts by name
            <input
                className={styles.filterInput}
                type="text"
                value={value}
                onChange={(e) => dispatch(actions.changeFilter(e.currentTarget.value))}
                id="filter"
            />
        </label>
    )
};