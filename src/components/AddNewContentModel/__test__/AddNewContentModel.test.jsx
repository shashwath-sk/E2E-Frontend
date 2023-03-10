import AddNewContentModel from '../index';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';


describe('AddNewContentModel', () => {
    
    it('should render', () => {
        render(
            <BrowserRouter>
                <AddNewContentModel
                    show={true}
                    onClose={() => {}}
                    contentId={null}
                    old={null}
                    setContentId={() => {}}
                    operation={''}
                />
            </BrowserRouter>
        );
        expect(screen.getByText('Create a new content type')).toBeInTheDocument();
    });
    
    
}
);