import React from 'react';
import { connect } from 'react-redux';
import actions from '../../redux/phonebook-actions';
import styles from './filter.module.css'

const Filter = ({ value, onChange }) => (
    <label htmlFor="filter" className={styles.filterLabel}>Find contacts by name
        <input
            className={styles.filterInput}
            type="text"
            value={value}
            onChange={onChange}
            id="filter"
        />
    </label>
);

const mapStateToProps = (state) => ({
    value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
    onChange: (e) => dispatch(actions.changeFilter(e.currentTarget.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
