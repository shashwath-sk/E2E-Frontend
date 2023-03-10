import * as React from 'react';
import ContentTypeContext from '../../context/contentTypeContext';
import SearchField from '../../components/SearchField';
import './Viewbar.css';
import { HOME_ROUTE } from '../../constants/routes';
import {useNavigate} from 'react-router-dom';

export default function Viewbar() {
    const navigate = useNavigate();
    const { ContentType } = React.useContext(ContentTypeContext);
    return(
        <div className='viewbar-container'>
            <div className='viewbar-header'>
                CMS+
            </div>
            <div className='viewbar-search'>
                <SearchField placeholder="COLLECTION TYPES" />
            </div>
            <div className='viewbar-contents'>
                {
                    ContentType && ContentType.map((content,index) => {
                        return (
                            <li key={index} onClick={()=>navigate(`/dashboard/${content.id}`)}>{content.Name}</li>
                        );
                    })
                }
            </div>
            <div className='viewbar-build-content viewbar-content-focus'>
                <span onClick={()=>navigate(HOME_ROUTE)}> CONTENT TYPE BUILDER</span>
            </div>
            
        </div>
    );

}