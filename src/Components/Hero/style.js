import {styled} from 'baseui';
import image from '../../Assets/Images/car.svg';

export const Centered = styled('div', {
    textAlign: 'center',
    height: '100%',
});

export const blockStyle = {
    Block: {
        style: ({ $theme }) => ({
            padding: $theme.sizing.scale2400,
            backgroundColor: '#E7F6FD',
            backgroundImage: `url(${image})`,
            backgroundSize: '50% 70%',
            backgroundPosition: 'bottom right',
            backgroundRepeat: 'no-repeat',
        })
    },
};