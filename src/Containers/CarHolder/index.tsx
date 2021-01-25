import React from 'react';
import {Card, StyledAction, StyledBody} from "baseui/card";
import {Label1} from "baseui/typography";
import {cardStyle} from "./style";
import AvatarList from "../../Components/AvatarList";
import {UserService} from "../../Services/UserService"

function CarHolder() {
    const { data: users, isLoading, isError, error } = UserService.useGetUsers();

    // variables
    const cardStyles = React.useMemo<object>(() => (cardStyle), []);

    // callbacks
    const renderAvatars = React.useCallback(() => {
        if (isLoading) {
            return <span>Loading...</span>
        }

        if (isError) {
            return <span>Error: {error?.message}</span>
        }

        return <AvatarList users={users?? []}/>;
    }, [users, isLoading, isError, error])

    return (
        <Card overrides={cardStyles}>
            <StyledBody>
                <Label1>+10k Carholder found a Car</Label1>
            </StyledBody>
            <StyledAction>
                {renderAvatars()}
            </StyledAction>
        </Card>
    );
}

export default CarHolder;
