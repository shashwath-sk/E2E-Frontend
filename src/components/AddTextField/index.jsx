import * as React from 'react';
import PropTypes from 'prop-types';
import './AddTextField.css';

export default function AddTextField( { style,placeholder,placeholder2,contentId,setShowModal,setEntity,handleClick } ) {
    console.log(placeholder,style,placeholder2);
    const handleClickDynamically=()=>{
        if(handleClick)
        {
            handleClick(contentId,'version');
        }
        else
        {
            setEntity(true);
            setShowModal(true);
        }
    };
    return(
        <div className={`${style}`} onClick={()=>handleClickDynamically()} >
            <h3>{placeholder}</h3>
            {placeholder2&&<h3>{placeholder2}</h3>}

        </div>
    );

}


AddTextField.propTypes = {
    placeholder: PropTypes.string,
    style: PropTypes.string,
    placeholder2: PropTypes.string,
    contentId: PropTypes.string,
    handleClick: PropTypes.func,
    setShowModal: PropTypes.func,
    setEntity: PropTypes.func,
};