import AddTextField from '../';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

describe('AddTextField', () => {
    it('should render AddTextField', () => {
        const { asFragment } = render(
            <BrowserRouter>
                <AddTextField placeholder="Placeholder" />
            </BrowserRouter>
        );
        expect(asFragment).toMatchSnapshot();
    });

    it('should display placeholder text when component is rendered with placeholder text', () => {
        render(
            <BrowserRouter>
                <AddTextField placeholder="Placeholder" />
            </BrowserRouter>
        );
        expect(screen.getByText('Placeholder')).toBeInTheDocument();
    }
    );

});