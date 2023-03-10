import Viewbar from '../';
import * as React from 'react';
import {render} from '@testing-library/react';
import { BrowserRouter} from 'react-router-dom';
// import makeRequest from '../../../utils/makeRequest';



describe('Viewbar', () => {
    it('should render Viewbar', () => {
        const { asFragment } = render(
            <BrowserRouter>
                <Viewbar />
            </BrowserRouter>
        );
        expect(asFragment).toMatchSnapshot();
    });

    it('should show CMS+ as header when rendered', () => {
        const { getByText } = render(
            <BrowserRouter>
                <Viewbar />
            </BrowserRouter>
        );
        expect(getByText('CMS+')).toBeInTheDocument();
    });

    it('should show CONTENT TYPE BUILDER when rendered', () => {
        const { getByText } = render(
            <BrowserRouter>
                <Viewbar />
            </BrowserRouter>
        );
        expect(getByText('CONTENT TYPE BUILDER')).toBeInTheDocument();
    });

    it('should show search field with Collection types as placeholder when rendered', () => {
        const { getByPlaceholderText } = render(
            <BrowserRouter>
                <Viewbar />
            </BrowserRouter>
        );
        expect(getByPlaceholderText('COLLECTION TYPES')).toBeInTheDocument();
    }
    );




});