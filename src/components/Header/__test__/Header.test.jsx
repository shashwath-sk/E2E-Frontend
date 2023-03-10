import Header from '..';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

describe('Header', () => {
    it('should render Header', () => {
        const { asFragment } = render(
            <BrowserRouter>
                <Header textValue="Placeholder"/>
            </BrowserRouter>
        );
        expect(asFragment).toMatchSnapshot();
    });

    it('should show placeholder content when component is rendered with placeholder text', () => {
        render(
            <BrowserRouter>
                <Header textValue="Placeholder" />
            </BrowserRouter>
        );
        expect(screen.getByText('Placeholder')).toBeInTheDocument();
    });
});