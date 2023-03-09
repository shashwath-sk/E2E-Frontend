/* eslint-disable max-len */
import * as React from 'react';
import { ViewBar,Header,SearchField,AddTextField } from '../../components';
import ContentTypeContext from '../../context/contentTypeContext';
import makeRequest from '../../utils/makeRequest';
import {GET_CONTENT_BY_ID} from '../../constants/apiEndPoint';
import pencil1 from '../../assets/pencil/pencil1.png';
import './HomePage.css';

export default function HomePage() {

    const { ContentType } = React.useContext(ContentTypeContext);
    const [content,setContent] = React.useState();
    // const [Entries,setEntries]= React.useState();

    const handleClick = async(contentId) => {
        const response = await makeRequest(GET_CONTENT_BY_ID(contentId));
        setContent(response);

    };
    
    return(
        <div className='home-page-container'>
            <ViewBar/>
            <div className='home-page-contents'>
                <Header textValue = "content Types"/>
                <div className='content-types-fields'>
                    <div className='content-types'>
                        {ContentType&& <SearchField  placeholder={`${ContentType.length} Types` } />}
                        <AddTextField style="addTextField" placeholder='+New Type'/>
                        {ContentType && ContentType.map((content,index) => (
                            <AddTextField key={index} style="contents" placeholder={content.Name} placeholder2={content.Entries} contentId = {content.id} handleClick = {handleClick}/>
                        ))}
                    </div>
                    <div className='content-fields'>
                        {content&& 
                        <>
                            <div className='content-info'>
                                <h1>{content.Name}</h1>
                                <img src={pencil1} className="edit-img"alt="pencil" />
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