import SearchField from '..';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

describe('SearchField', () => {
    it('should render SearchField', () => {
        const { asFragment } = render(
            <BrowserRouter>
                <SearchField />
            </BrowserRouter>
        );
        expect(asFragment).toMatchSnapshot();
    });
    
    it('should show search field with Collection types as placeholder when rendered', () => {
        render(
            <BrowserRouter>
                <SearchField placeholder="COLLECTION TYPES"/>
            </BrowserRouter>
        );
        expect(screen.getByPlaceholderText('COLLECTION TYPES')).toBeInTheDocument();
    });

});