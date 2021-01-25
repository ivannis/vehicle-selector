import React from 'react';
import {Avatar} from "baseui/avatar";
import {avatarStyle} from "./style"
import {UserType} from "../../Models"

type Props = {
    users: UserType[]
};

function AvatarList({ users }: Props) {

    // variables
    const avatarStyles = React.useMemo<object>(() => (avatarStyle), []);

    // callbacks
    const renderAvatars = React.useCallback<() => JSX.Element[]>(() => {
        return users.map((user, index) => (
            <Avatar
                name={user.name}
                size={'64px'}
                src={user.img}
                key={index}
                overrides={avatarStyles}
            />
        ));
    }, [users, avatarStyles])

    return (
        <React.Fragment>
            {renderAvatars()}
        </React.Fragment>
  );
}

export default AvatarList;
