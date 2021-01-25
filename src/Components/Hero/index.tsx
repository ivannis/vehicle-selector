import React from 'react';
import {Block} from 'baseui/block';
import {blockStyle, Centered} from "./style";

type Props = { children: React.ReactNode };

function Hero({ children }: Props) {
    // variables
    const blockStyles = React.useMemo<object>(() => (blockStyle), []);

    return (
        <Block overrides={blockStyles}>
            <Centered>
                {children}
            </Centered>
        </Block>
    );
}

export default Hero;
