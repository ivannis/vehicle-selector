import * as React from 'react';
import {ListItem, ListItemLabel} from 'baseui/list';
import {Avatar} from "baseui/avatar";
import {ChevronRight} from 'baseui/icon';
import {DefinitionType} from "../../Models";
import {colors} from "./style";

type Props = {
    definition: DefinitionType
};

function DefinitionItem({ definition }: Props) {
    const randColor = () => {
        let items = Object.keys(colors);

        return colors[items[items.length * Math.random() | 0]];
    }

    const avatar = (name) => {
        return () => (
            <Avatar
                name={name}
                overrides={{
                    Root: {
                        style: {
                            backgroundColor: randColor()
                        }
                    }
                }}
            />
        )
    }
    return (
        <ListItem artwork={avatar(definition.name)} endEnhancer={() => <ChevronRight />}>
            <ListItemLabel description={definition.description}>
                { definition.name }
            </ListItemLabel>
        </ListItem>
    );
}

export default DefinitionItem;