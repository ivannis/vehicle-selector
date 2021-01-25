import * as React from 'react';
import {Block} from 'baseui/block';
import {H4} from 'baseui/typography';
import DefinitionList from "../../Components/DefinitionList";
import {CarService} from "../../Services/CarService";
import {DefinitionType, ModelType, YearType} from "../../Models";
import Loader from './Loader';
import {blockStyle, titleStyle} from "./style";

type Props = {
    model: ModelType | null,
    year: YearType | null,
};

export default function ResultList({ model, year }: Props) {
    const { data: definitions, isLoading, isError, error } = CarService.useGetDefinitions(model, year);

    // variables
    const blockStyles = React.useMemo<object>(() => (blockStyle), []);
    const titleStyles = React.useMemo<object>(() => (titleStyle), []);

    if (isLoading) {
        return (
            <Loader className='loader'/>
        )
    }

    if (isError) {
        return <span>Error: {error?.message}</span>
    }

    if (definitions) {
        return (
            <DefinitionList definitions={definitions as DefinitionType[]}/>
        );
    }

    return (
        <Block overrides={blockStyles}>
            <H4 overrides={titleStyles}>Explore our car catalog</H4>
        </Block>
    )
}