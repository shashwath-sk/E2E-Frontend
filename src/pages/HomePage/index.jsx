/* eslint-disable max-len */
import * as React from 'react';
import { ViewBar,Header,SearchField,AddTextField } from '../../components';
import ContentTypeContext from '../../context/contentTypeContext';
import makeRequest from '../../utils/makeRequest';
import {GET_CONTENT_BY_ID,DELETE_FIELD} from '../../constants/apiEndPoint';
import updateContentType from '../../utils/common/updateContentType';
import pencil1 from '../../assets/pencil/pencil1.png';
import edit1 from '../../assets/edit/edit1.png';
import delete1 from '../../assets/delete/delete1.png';
import Modal from '../../components/AddNewContentModel';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

export default function HomePage() {

    const { ContentType,setContentType} = React.useContext(ContentTypeContext);
    const [content,setContent] = React.useState();
    const [showModal,setShowModal] = React.useState(false);
    const [contentId,setContentId] = React.useState();
    const [showAddNewField,setShowAddNewField] = React.useState(false);
    const [showAddNewContent,setShowAddNewContent] = React.useState(false);
    const [showModifyName,setShowModifyName] = React.useState(false);
    const [showUpdateField,setShowUpdateField] = React.useState(false);
    const navigate = useNavigate();

    const handleAddContentClick = async(contentId) => {
        setShowModal(true);
        setContentId(contentId);
    };
    const handleContentClick = async(contentId) => {
        const response = await makeRequest(GET_CONTENT_BY_ID(contentId),navigate);
        console.log(response);
        setContent(response);
    };
    const handleDeleteFieldClick = async(contentId,field) => {
        console.log(contentId,field);
        const response = await makeRequest(DELETE_FIELD(contentId),navigate,{
            data:{
                'delField':field
            }
        });
        updateContentType(ContentType,response,setContentType);        
    };
    return ContentType ? (
        <div className='home-page-container'>
            <ViewBar/>
            <div className='home-page-contents'>
                <Header textValue = "Content Types"/>
                <div className='content-types-fields'>
                    <div className='content-types'>
                        {ContentType&& <SearchField  placeholder={`${ContentType.length} Types` } />}
                        <AddTextField style="addContentType" placeholder='+New Type' setEntity={setShowAddNewContent} setShowModal={setShowModal}/>
                        {showAddNewContent && <Modal onClose={() => setShowModal(false)} show={showModal} onClickHandler={'handleOnAddContentClick'} operation={'create'}/>}
                        {ContentType && ContentType.map((content,index) => (
                            <AddTextField key={index} style="contents" placeholder={content.Name} placeholder2={Object.keys(content.Fields).length} contentId = {content.id} handleClick = {handleContentClick}/>
                        ))}
                    </div>
                    <div className='content-fields'>
                        {content&& 
                        <>
                            <div className='content-info'>
                                <h1>{content.Name}</h1>
                                <img src={pencil1} className="edit-img"alt="pencil" onClick={()=>{setShowModifyName(true),setShowModal(true),handleAddContentClick(content.id);}}/>
                            </div>
                            {showModifyName && <Modal onClose={() => setShowModal(false)} show={showModal} contentId={contentId} setContentId={setContentId} onClickHandler={'handleOnUpdateNameClick'} operation={'update'}/> }
                            <span className='entries-info'>{`${Object.keys(content.Fields).length} Fields`}</span>
                            <AddTextField style="addTextField" placeholder='Add Another Field' contentId = {content.id} setEntity={setShowAddNewField} setShowModal={setShowModal}/>
                            {showAddNewField && <Modal onClose={() => setShowModal(false)} show={showModal} contentId={content.id} setContentId={setContentId} onClickHandler={'handleOnAddFieldClick'} operation={'create'}/> }

                            <div className='all-fields'>
                                {Object.keys(content.Fields).map((field,index) => (
                                    <div className='each-field' key={index}>
                                        <div>
                                            <span className="type-icon">Ab</span>
                                            <span className='field-name'>{field}</span>
                                        </div>
                                        <span className='field-type'>String</span>
                                        <div className='field-options'>
                                            <img src={edit1} className="edit-img"alt="edit" onClick={()=>{setShowUpdateField(true),setShowModal(true);}}/>
                                            {showUpdateField && <Modal onClose={() => setShowModal(false)} show={showModal} contentId={content.id} setContentId={setContentId} old={field} onClickHandler={'handleOnUpdateFieldClick'} operation={'update'}/> }
                                            <img src={delete1} className="delete-img"alt="delete" onClick={()=>{handleDeleteFieldClick(content.id,field);}} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </>}
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