import React from 'react';
import edit1 from '../../assets/edit/edit1.png';
import delete1 from '../../assets/delete/delete1.png';
import makeRequest from '../../utils/makeRequest';
import {GET_CONTENT_BY_ID} from '../../constants/apiEndPoint';
import './DashBoard.css';

import { AddNewEntryModel, ViewBar } from '../../components';
import { useParams } from 'react-router-dom';

export default function DashBoard() {
    const [fields, setFields] = React.useState({});
    const [showModal, setShowModal] = React.useState(false);

    const {id} = useParams();
    React.useEffect(()=>{
        makeRequest(GET_CONTENT_BY_ID(id))
            .then((response)=>{
                console.log(response.Fields);
                setFields(response.Fields);
            });
    },[]);

    
    return (
        <div className="details">
            <ViewBar/>
            <div className="content-entry-container">
                <div className="content-entrie-title">
                    <span className="entrie-count">13 Entries Found</span>
                    <div onClick={() => setShowModal(true)} className="new-entry-div">
                        <span className="new-entry-text">Add a new entry</span>
                    </div>
                    <AddNewEntryModel onClose={() => setShowModal(false)} show={showModal} value={fields}/>
                </div>
                <div className="table-content-title">
                    <div className="content-entries-fields">
                        {
                            Object.keys(fields).map((key,id) => {
                                return (
                                    <div key={id}>
                                        <span>{key}</span>
                                    </div>
                                );
                            })
                        }
                    </div>
                    <span>Actions</span>
                </div>
                <div className="content-entries">
                    <div className="content-fields-container">
                        <div
                            className="content-entries-fields"
                            style={{ marginLeft: '10px' }}
                        >
                            <span>1</span>
                            <span>John Doe</span>
                            <span>www.johndoe.com</span>
                            <span>Text</span>
                        </div>
                        <div>
                            <img className="icon" src={edit1} alt="" />
                            <img className="icon" src={delete1} alt="" />
                        </div>
                    </div>
                    <div className="content-fields-container">
                        <div
                            className="content-entries-fields"
                            style={{ marginLeft: '10px' }}
                        >
                            <span>1</span>
                            <span>John Doe</span>
                            <span>www.johndoe.com</span>
                            <span>Text</span>
                        </div>
                        <div>
                            <img className="icon" src={edit1} alt="" />
                            <img className="icon" src={delete1} alt="" />
                        </div>
                    </div>
                    <div className="content-fields-container">
                        <div
                            className="content-entries-fields"
                            style={{ marginLeft: '10px' }}
                        >
                            <span>1</span>
                            <span>John Doe</span>
                            <span>www.johndoe.com</span>
                            <span>Text</span>
                        </div>
                        <div>
                            <img className="icon" src={edit1} alt="" />
                            <img className="icon" src={delete1} alt="" />
                        </div>
                    </div>
                    <div className="content-fields-container">
                        <div
                            className="content-entries-fields"
                            style={{ marginLeft: '10px' }}
                        >
                            <span>1</span>
                            <span>John Doe</span>
                            <span>www.johndoe.com</span>
                            <span>Text</span>
                        </div>
                        <div>
                            <img className="icon" src={edit1} alt="" />
                            <img className="icon" src={delete1} alt="" />
                        </div>
                    </div>
                    <div className="content-fields-container">
                        <div
                            className="content-entries-fields"
                            style={{ marginLeft: '10px' }}
                        >
                            <span>1</span>
                            <span>John Doe</span>
                            <span>www.johndoe.com</span>
                            <span>Text</span>
                        </div>
                        <div>
                            <img className="icon" src={edit1} alt="" />
                            <img className="icon" src={delete1} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}