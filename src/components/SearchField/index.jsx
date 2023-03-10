import * as React from 'react';
import search1 from '../../assets/search/search1.png';
import PropTypes from 'prop-types';
import './SearchField.css';

export default function SearchField( { placeholder } ) {
    return(
        <div className='filter-container'>
            <input type="text" placeholder={placeholder} />
            <img src={search1} alt="search" />
        </div>
    );

}


SearchField.propTypes = {
    placeholder: PropTypes.string,
};