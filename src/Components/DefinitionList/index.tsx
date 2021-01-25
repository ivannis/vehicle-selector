import * as React from 'react';
import {styled} from "styletron-react";
import {Block} from 'baseui/block';
import DefinitionItem from "./DefinitionItem";
import {DefinitionType} from "../../Models";
import {listStyle} from "./style"

type Props = {
    definitions: DefinitionType[]
};

function DefinitionList({ definitions }: Props) {
    const List = styled('ul', listStyle);
    const Strong = styled('span', { fontWeight: 'bold' });

    const renderDefinitions =  React.useCallback<() => JSX.Element[]>(() => {
        return definitions.map((definition) => <DefinitionItem definition={definition}/>)
    }, [definitions]);

    return (
        <React.Fragment>
            <Block overrides={{ Block: { style: { textAlign: 'end'}}}}>
                <Strong>{ definitions.length}</Strong> definitions found
            </Block>
            <List>
                {renderDefinitions()}
            </List>
        </React.Fragment>
    );
}

export default DefinitionList;