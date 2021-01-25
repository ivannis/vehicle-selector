import React from 'react';
import {Option} from "baseui/select";
import Picker from "../../Components/Picker";
import {QueryObserverResult} from "react-query";
import {MakeType, ModelType, YearType} from "../../Models";

type Props<Type> = {
    filterBy?: Type | null,
    type: string,
    isFirst?: boolean,
    autoselectWithOneOption?: boolean,
    onChange?: (type: string, selected: Type) => void,
    useQuery: (filterBy: Type | null, filterRequired: boolean) => QueryObserverResult<unknown, Error>,
    placeholder?: string | null,
};

function Selector<Type extends MakeType | ModelType | YearType>(props: Props<Type>) {
    // props
    const {
        filterBy = null,
        isFirst = false,
        autoselectWithOneOption = true,
        placeholder,
        onChange,
        useQuery,
        type
    } = props

    // state
    const [items, setItems] = React.useState<Type[]>([]);
    const [value, setValue] = React.useState<Type>(null);

    const { data, isLoading, isError } = useQuery(filterBy, !isFirst);

    // hooks
    React.useEffect(() => {
        setItems([]);
        handleOnChange(null);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filterBy]);

    React.useEffect(() => {
        if (data !== undefined) {
            let values = data as Type[];

            setItems(values);
            if (autoselectWithOneOption && values.length === 1) {
                handleOnChange(values[0])
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data, autoselectWithOneOption]);

    // callbacks
    const handleOnChange = React.useCallback<(value: Option) => void>((value: Option) => {
        setValue(value as Type);

        if (onChange) {
            onChange(type, value as Type)
        }
    }, [type, onChange]);

    return (
        <Picker
            value={value}
            options={items}
            onChange={(value) => handleOnChange(value)}
            placeholder={placeholder}
            labelKey="name"
            valueKey="id"
            isLoading={isLoading}
            error={isError}
            disabled={filterBy === null && !isFirst}
            clearable={true}
        />
    );
}

export default Selector;
