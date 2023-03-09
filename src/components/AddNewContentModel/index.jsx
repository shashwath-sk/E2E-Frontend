import React from 'react';
import PropTypes from 'prop-types';
import { ADD_CONTENT } from '../../constants/apiEndPoint';
import makeRequest from '../../utils/makeRequest';
import ContentTypeContext from '../../context/contentTypeContext';
import './Modal.css';

export default function Modal({show,onClose}) {
    const[name,setName] = React.useState('');
    const {ContentType,setContentType} = React.useContext(ContentTypeContext);
    if (!show) {
        return null;
    }
    const addContenthandler = async() => {
        const response = await makeRequest(ADD_CONTENT,{},{data:{name:name}});
        setContentType([...ContentType,response]);
        onClose();
    };
    return (
        <div className="modal" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className='modal-header'>
                    <span className='modal-title'>Create a new content type</span>
                </div>
                <div className='modal-body'>
                    <span>Name of the content type</span>
                    <input type="text" onChange={(event)=>{setName(event.target.value);}}/>
                </div>
                <div className='modal-footer'>
                    <button onClick={onClose} className='modal-close-button'>Close</button>
                    <button className='modal-create-button' onClick={addContenthandler} >Create</button>
                </div>
            </div>
        </div>
    );
}

Modal.propTypes={
    show: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};