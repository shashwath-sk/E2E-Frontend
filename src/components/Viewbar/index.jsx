import * as React from 'react';
import ContentTypeContext from '../../context/contentTypeContext';
import SearchField from '../../components/SearchField';
import './Viewbar.css';

export default function Viewbar() {
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
                            <li key={index}>{content.Name}</li>
                        );
                    })
                }
            </div>
            <div className='viewbar-build-content viewbar-content-focus'>
                CONTENT TYPE BUILDER
            </div>
            
        </div>
    );

}