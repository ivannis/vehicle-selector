import * as React from 'react';
import {
    ALIGN,
    HeaderNavigation,
    StyledNavigationItem as NavigationItem,
    StyledNavigationList as NavigationList
} from 'baseui/header-navigation';
import {StyledLink as Link} from 'baseui/link';
import {Button} from 'baseui/button';
import {headerStyle} from "./style"

export default function Header() {
    // variables
    const headerStyles = React.useMemo<object>(() => (headerStyle), []);

    return (
        <HeaderNavigation overrides={headerStyles}>
            <NavigationList $align={ALIGN.left}>
                <NavigationItem>GetCar</NavigationItem>
            </NavigationList>
            <NavigationList $align={ALIGN.center} />
            <NavigationList $align={ALIGN.right}>
                <NavigationItem>
                    <Link href="#basic-link1">Tab Link One</Link>
                </NavigationItem>
                <NavigationItem>
                    <Link href="#basic-link2">Tab Link Two</Link>
                </NavigationItem>
            </NavigationList>
            <NavigationList $align={ALIGN.right}>
                <NavigationItem>
                    <Button>Get started</Button>
                </NavigationItem>
            </NavigationList>
        </HeaderNavigation>
    );
}