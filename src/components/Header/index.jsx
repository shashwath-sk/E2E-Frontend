import * as React from 'react';
import PropTypes from 'prop-types';
import './Header.css';

export default function Header( { textValue } ) {
    return(
        <div className='header'>
            <h1>{textValue}</h1>
        </div>
    );

}


Header.propTypes = {
    textValue: PropTypes.string.isRequired,
};