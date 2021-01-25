import React from 'react';
import {Cell, Grid} from 'baseui/layout-grid';
import {Card, StyledBody} from "baseui/card";
import {Button} from "baseui/button";
import Selector from "../../Components/Selector";
import {buttonStyle, formStyle, gridStyle} from "./style"
import {MakeType, ModelType, YearType} from "../../Models";
import {Config} from "../../Config";
import formatters from "./formatter";

type ModelTypes = YearType | MakeType | ModelType;

export type FilterType = {
    year: YearType | null,
    make: MakeType | null,
    model: ModelType | null,
}

type Props = {
    onSubmit?: (filter: FilterType) => void
};

function SearchForm({ onSubmit }: Props) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [order, _] = React.useState<string>(Config.SELECTOR_ORDER);
    const [state, setState] = React.useState<FilterType>({
        year: null,
        make: null,
        model: null,
    });

    // variables
    const formStyles = React.useMemo<object>(() => (formStyle), []);
    const gridStyles = React.useMemo<object>(() => (gridStyle), []);
    const buttonStyles = React.useMemo<object>(() => (buttonStyle), []);

    // callbacks
    const handleOnChange =  React.useCallback<(type: string, selected: ModelTypes) => void>((key, value) => {
        setState((prevState) => ({
            ...prevState,
            [key]: value
        }))
    }, []);

    const handleOnSubmit = (e) => {
        e.preventDefault();

        if (onSubmit) {
            onSubmit(state);
        }
    }

    const renderInputs = () => {
        return formatters[order].map((component, index) => (
            <Cell span={[1, 2, 3]} key={index}>
                <Selector
                    isFirst={index === 0}
                    autoselectWithOneOption={index !== 0}
                    type={component.type}
                    placeholder={component.placeholder}
                    filterBy={index === 0 ? null : state[component.filterBy]}
                    onChange={handleOnChange}
                    useQuery={component.query}
                />
            </Cell>
        ))
    }

    return (
        <Card overrides={formStyles}>
            <StyledBody>
                <form onSubmit={handleOnSubmit}>
                    <Grid gridGutters={[1, 1, 1]} overrides={gridStyles}>
                        { renderInputs() }
                        <Cell span={[1, 2, 3]}>
                            <Button overrides={buttonStyles}>Search</Button>
                        </Cell>
                    </Grid>
                </form>
            </StyledBody>
        </Card>
    );
}

export default SearchForm;
