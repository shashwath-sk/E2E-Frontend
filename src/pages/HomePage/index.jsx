/* eslint-disable max-len */
import * as React from 'react';
import { ViewBar,Header,SearchField,AddTextField } from '../../components';
import ContentTypeContext from '../../context/contentTypeContext';
import makeRequest from '../../utils/makeRequest';
import {GET_CONTENT_BY_ID} from '../../constants/apiEndPoint';
import pencil1 from '../../assets/pencil/pencil1.png';
import edit1 from '../../assets/edit/edit1.png';
import delete1 from '../../assets/delete/delete1.png';
import Modal from '../../components/AddNewContentModel';
import './HomePage.css';

export default function HomePage() {

    const { ContentType } = React.useContext(ContentTypeContext);
    const [content,setContent] = React.useState();
    const [showModal,setShowModal] = React.useState(false);
    // const [Entries,setEntries]= React.useState();

    const handleContentClick = async(contentId) => {
        const response = await makeRequest(GET_CONTENT_BY_ID(contentId));
        setContent(response);
        // const entries = await makeRequest(GET_CONTENT_ENTRIES(contentId));
        // setEntries(entries.length);
    };


    const handleAddContentClick = async() => {
        setShowModal(true);
    };
    return(
        <div className='home-page-container'>
            <ViewBar/>
            <div className='home-page-contents'>
                <Header textValue = "Content Types"/>
                <div className='content-types-fields'>
                    <div className='content-types'>
                        {ContentType&& <SearchField  placeholder={`${ContentType.length} Types` } />}
                        <AddTextField style="addContentType" placeholder='+New Type' handleClick={handleAddContentClick} />
                        <Modal onClose={() => setShowModal(false)} show={showModal} />
                        {ContentType && ContentType.map((content,index) => (
                            <AddTextField key={index} style="contents" placeholder={content.Name} placeholder2={content.Entries} contentId = {content.id} handleClick = {handleContentClick}/>
                        ))}
                    </div>
                    <div className='content-fields'>
                        {content&& 
                        <>
                            <div className='content-info'>
                                <h1>{content.Name}</h1>
                                <img src={pencil1} className="edit-img"alt="pencil" />
                            </div>
                            <span className='entries-info'>{`${Object.keys(content.Fields).length} Fields`}</span>
                            <AddTextField style="addTextField" placeholder='Add Another Field'/>
                            <div className='all-fields'>
                                {Object.keys(content.Fields).map((field,index) => (
                                    <div className='each-field' key={index}>
                                        <div>
                                            <spna className="type-icon">Ab</spna>
                                            <span className='field-name'>{field}</span>
                                        </div>
                                        <span className='field-type'>String</span>
                                        <div className='field-options'>
                                            <img src={edit1} className="edit-img"alt="edit" />
                                            <img src={delete1} className="delete-img"alt="delete" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </>}
                    </div>
                </div>

            </div>
            {/* <CustomtextField/> */}
            
        </div>
    );
}
// const [Events, setEvents] = React.useState();
// const navigate = useNavigate();
// const [filters, setFilters] = React.useState();
// const [searchBy, setSearchBy] = React.useState();

// React.useEffect(() => {
//     makeRequest(GET_ALL_EVENTS, navigate).then((response) => (
//         setEvents(response)
//     ));
// }, []);

// React.useEffect(() => {
//     if (filters) {
//         const filteredEvent = Events.filter((event) => event[filters] === true);
//         setEvents(filteredEvent);
//     }
// }, [filters]);

// React.useEffect(() => {
//     if (searchBy) {
//         const searchdata = Events.filter((event) => event.name.toLowerCase().includes(searchBy));
//         setEvents(searchdata);
//     }
// }, [searchBy]);

//     return Events ? (
//         <div className="home-container">
//             <FilterAndSearch setFilters={setFilters} setSearchBy={setSearchBy} />
//             <div className="events-container">
//                 {Events.map((event) => (
//                     <Event key={event.id} Event={event} isRegistered={event.isRegistered} isBookmarked={event.isBookmarked} />
//                 ))}
//             </div>

//         </div>
//     )
//         : (
//             <div>
//                 <p>Loading...</p>
//             </div>
//         );
// }

// const [ContentType, setContentType] = React.useState();
//     React.useEffect(() => {
//         makeRequest(GET_ALL_CONTENTS).then((response) => ()=>{
//             console.log(response);
//             setContentType(response);
//         });
//     },[]);