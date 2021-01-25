import * as React from "react";
import {Select, Value, Option, OptionsT} from "baseui/select";
import {useCombinedRefs} from "../../Utils/Utils";
import Dropdown from "./Dropdown";

type Props = {
    options: OptionsT,
    value?: Option,
    onChange?: (selected: Option) => void,
    controlRef?: React.Ref<HTMLInputElement | HTMLDivElement>
    // all other props
    [x: string]: any;
};

const Picker = React.forwardRef<Select, Props>(({ options, value, onChange, ...otherProps }: Props, ref) => {
    const [selected, setSelected] = React.useState<Value>(value ? [value] : []);

    React.useEffect(() => {
        setSelected(value ? [value] : [])
    }, [value]);

    const inputRef = React.useRef<HTMLInputElement | HTMLDivElement>(null);
    const combinedRef = useCombinedRefs(ref, inputRef);

    // callbacks
    const handleOnChange = (value: Value) => {
        setSelected(value)

        if (onChange) {
            onChange(value[0] ?? null)
        }
    };

    return (
        <Select
            {...otherProps}
            controlRef={combinedRef}
            options={options}
            value={selected}
            onChange={params => handleOnChange(params.value)}
            overrides={{Dropdown: {component: Dropdown}}}
        />
    );
});

export default React.memo(Picker);