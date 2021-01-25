import React from 'react';
import {render, screen} from '@testing-library/react';
import DefinitionItem from './DefinitionItem';

test('render empty DefinitionItem when there is no users', () => {
    const definition = {
        id: 1,
        name: 'Front Wheel',
        description: 'Sport Utility',
        make: 'Mazda',
        model: 'CX-5',
    }

    render(<DefinitionItem definition={definition}/>);

    const avatarElement = screen.getByRole('img');
    const titleElement = screen.getByText('Front Wheel');
    const descriptionElement = screen.getByText('Sport Utility');

    expect(avatarElement).toBeInTheDocument();
    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
});
