import React from 'react';
import {render} from '@testing-library/react';
import AvatarList from './index';

test('render empty AvatarList when there is no users', () => {
    const { container } = render(<AvatarList users={[]}/>);
    expect(container.firstChild).toBeNull();
});

test('render AvatarList with multiples users', () => {
    const users = [
        { name: 'Sam', img: 'https://i.pravatar.cc/150?img=10' },
        { name: 'Bob', img: 'https://i.pravatar.cc/150?img=11' },
    ]

    render(<AvatarList users={users}/>);

    const avatars = document.querySelectorAll('img');

    expect(avatars.length === 2).toBeTruthy()
});
