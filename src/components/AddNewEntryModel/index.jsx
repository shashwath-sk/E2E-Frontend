import React from 'react';
import './EntryModal.css';
import PropTypes from 'prop-types';
import axios from 'axios';
export default function AddNewEntryModel(props) {
    if (!props.show) {
        return null;
    }
    const handleAddEntries = async() => {
        await axios({
            method:'POST',
            url:`http://localhost:5000/api/addEntries/${props.contentId}`,
            data:{newfield:props.value}
        });
    };
    return (
        <div className="modal" onClick={props.onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className='modal-header'>
                    <span className='modal-title'>New Company Profile</span>
                </div>
                <div className='modal-body'>
                    {
                        Object.keys(props.value).map((key,id) => {
                            return (
                                <div key={id}>
                                    <span>{key}</span>
                                    <input type="text" />
                                </div>
                            );
                        })
                    }
                </div>
                <div className='modal-footer'>
                    <button onClick={props.onClose} className='modal-close-button'>Close</button>
                    <button className='modal-Add-button' onClick={handleAddEntries}>Add</button>
                </div>
            </div>
        </div>
    );
}
AddNewEntryModel.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired,
    value: PropTypes.object,
    contentId: PropTypes.string
};