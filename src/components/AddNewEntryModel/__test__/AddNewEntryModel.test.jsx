import AddNewEntryModel from '../';
import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

describe('AddNewEntryModel', () => {
    it('should render AddNewEntryModel', () => {
        const { asFragment } = render(
            <BrowserRouter>
                <AddNewEntryModel />
            </BrowserRouter>
        );
        expect(asFragment).toMatchSnapshot();
    });
});