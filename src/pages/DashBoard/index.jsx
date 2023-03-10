import React from 'react';
import edit1 from '../../assets/edit/edit1.png';
import delete1 from '../../assets/delete/delete1.png';
import makeRequest from '../../utils/makeRequest';
import {GET_CONTENT_BY_ID,GET_CONTENT_ENTRIES, DELETE_CONTENT_ENTRIES} from '../../constants/apiEndPoint';
import './DashBoard.css';
import { AddNewEntryModel, ViewBar,Header } from '../../components';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function DashBoard() {
    const [fields, setFields] = React.useState({});
    const [showModal, setShowModal] = React.useState(false);
    const navigate = useNavigate();
    const[content,setContent] = React.useState();
    // const {ContentType,setContentType} = React.useContext(ContentTypeContext);
    const [contentEntries,setContentEntries] = React.useState();

    const {id} = useParams();
    React.useEffect(()=>{
        makeRequest(GET_CONTENT_BY_ID(id),navigate)
            .then((response)=>{
                setFields(Object.keys(response.Fields));
                setContent(response);
            });

        makeRequest(GET_CONTENT_ENTRIES(id),navigate)
            .then((response=>{
                setContentEntries(response);
                console.log(response);
            }));
    },[]);

    const handleDelete = async(entryId) => {
        // url: `content/${ContentID}/entries/:${entryId}`,
        console.log(DELETE_CONTENT_ENTRIES(1,3).url);
        const response = await makeRequest(DELETE_CONTENT_ENTRIES(content.id,entryId),navigate);
        console.log(response);
    };

    
    return content && contentEntries? (
        <div className="details">
            <ViewBar/>
            <div>
                <Header textValue = {content.Name}/>
                <div className="content-entry-container">
                    <div className="content-entrie-title">
                        <span className="entrie-count">{`${contentEntries.length} Entries Found`}</span>
                        <div onClick={() => setShowModal(true)} className="new-entry-div">
                            <span className="new-entry-text">Add a new entry</span>
                        </div>
                        <AddNewEntryModel onClose={() => setShowModal(false)} show={showModal} fields={fields} contentId={content.id} contentName={content.Name}/>
                    </div>
                    <div className="table-content-title">
                        <div className="content-entries-fields">
                            <span>Id</span>
                            {
                                (fields.slice(0,3)).map((key,id) => {
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
                        {
                            Object.keys(contentEntries).map((key,id) => {
                                return (
                                    <div key={id} className="content-fields-container">
                                        <div
                                            className="content-entries-fields"
                                            style={{ marginLeft: '10px' }}>     
                                            <span>{contentEntries[key].id}</span>
                                            <span>{contentEntries[key].Fields[fields[0]]}</span>
                                            <span>{contentEntries[key].Fields[fields[1]]}</span>
                                            <span>{contentEntries[key].Fields[fields[2]]}</span>
                                        </div>
                                        <div className="content-entries-actions">
                                            <img src={edit1} alt="edit" />
                                            <img src={delete1} alt="delete" onClick={()=>handleDelete(contentEntries[key].id)} />
                                        </div>
                                    </div>
                                );
                            })   
                        }                         
                    </div>
                </div>
            </div>
        </div>
    ):
        (
            <div>
                <h1>loading</h1>
            </div>
        );
}