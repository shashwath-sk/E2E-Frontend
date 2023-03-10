import React from 'react';
import './EntryModal.css';
import PropTypes from 'prop-types';
import {ADD_CONTENT_ENTRIES} from '../../constants/apiEndPoint';
import makeRequest from '../../utils/makeRequest';
export default function AddNewEntryModel({onClose,show,fields,contentId,contentName}) {
    if (!show) {
        return null;
    }
    const [entry,setEntry] = React.useState([]);
    const handleAddEntries = async() => {
        await makeRequest(ADD_CONTENT_ENTRIES(contentId),{},{data:{newEntry:entry}})
            .then((response)=>{
                console.log(response);
            });

        onClose();
    };
    return (
        <div className="modal" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className='modal-header'>
                    <span className='modal-title'>{contentName}</span>
                </div>
                <div className='modal-body'>
                    {
                        fields.map((key,id) => {
                            return (
                                <div key={id}>
                                    <span>{key}</span>
                                    <input type="text" 
                                        value = {entry[key] || ''}
                                        onChange={(event) => { setEntry({...entry,[key]:event.target.value}); }}
                                    />
                                </div>
                            );
                        })
                    }
                </div>
                <div className='modal-footer'>
                    <button onClick={onClose} className='modal-close-button'>Close</button>
                    <button className='modal-Add-button' onClick={handleAddEntries}>Add</button>
                </div>
            </div>
        </div>
    );
}
AddNewEntryModel.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired,
    fields: PropTypes.object,
    contentId: PropTypes.string,
    contentName: PropTypes.string
};