import React from 'react';
import PropTypes from 'prop-types';
import { ADD_CONTENT,UPDATE_CONTENT_NAME , ADD_NEW_FIELD,UPDATE_FIELD} from '../../constants/apiEndPoint';
import makeRequest from '../../utils/makeRequest';
import ContentTypeContext from '../../context/contentTypeContext';
import updateContentType from '../../utils/common/updateContentType';
import './Modal.css';

export default function Modal({show,onClose,contentId,old,setContentId,onClickHandler,operation}) {
    console.log(operation);
    const[name,setName] = React.useState('');
    const displayText = contentId ? 'Update content type':'Create a new content type';
    const {ContentType,setContentType} = React.useContext(ContentTypeContext);
    if (!show) {
        return null;
    }

    const handleOperations = ()=>{
        switch(onClickHandler){
        case 'handleOnAddContentClick':
            handleOnAddContentClick();
            break;
        case 'handleOnUpdateNameClick':
            handleOnUpdateNameClick();
            break;
        case 'handleOnAddFieldClick':
            handleOnAddFieldClick();
            break;   
        case 'handleOnUpdateFieldClick':
            handleOnUpdateFieldClick();
            break;     
        }
    };

    
    const handleOnAddContentClick = async() => {
        const response = await makeRequest(ADD_CONTENT,{},{data:{name:name}});
        setContentType([...ContentType,response]);
        onClose();
    };

    const handleOnUpdateNameClick = async() => {
        const response = await makeRequest(UPDATE_CONTENT_NAME(contentId)
            ,{},{data:{name:name}});
        console.log('response',response);
        updateContentType(ContentType,response,setContentType);
        setContentId(null);
        onClose();
    };

    const handleOnAddFieldClick = async() => {
        const response= await makeRequest(ADD_NEW_FIELD(contentId),{},{data:{newField:name}});
        updateContentType(ContentType,response,setContentType);
        onClose();
    };

    const handleOnUpdateFieldClick = async() => {
        const response = await makeRequest(UPDATE_FIELD(contentId),{},{
            data:{
                old:old,
                new: name,
            }});
        console.log(response);
        updateContentType(ContentType,response,setContentType);
        onClose();
    };


    return (
        <div className="modal" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className='modal-header'>
                    <span className='modal-title'>{displayText}</span>
                </div>
                <div className='modal-body'>
                    <span>Name of the content type</span>
                    <input type="text" onChange={(event)=>{setName(event.target.value);}}/>
                </div>
                <div className='modal-footer'>
                    <button onClick={onClose} className='modal-close-button'>Close</button>
                    <button className='modal-create-button' onClick={handleOperations} >{operation}</button>
                </div>
            </div>
        </div>
    );
}


Modal.propTypes={
    show: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    old: PropTypes.string.isRequired,
    contentId: PropTypes.number.isRequired,
    setContentId: PropTypes.func.isRequired,
    onClickHandler: PropTypes.string.isRequired,
    operation: PropTypes.string.isRequired,
};