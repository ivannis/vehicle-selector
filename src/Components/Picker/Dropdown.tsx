import * as React from "react";
import {withStyle} from 'baseui';
import {StyledDropdownListItem} from "baseui/select";
import {OptionListProps, StyledEmptyState, StyledList,} from 'baseui/menu';
import {FixedSizeList} from 'react-window';
import {listItemStyle} from "./style";
import {StyleObject} from "styletron-standard";

const LIST_ITEM_HEIGHT = 36;
const EMPTY_LIST_HEIGHT = 72;
const MAX_LIST_HEIGHT = 300;

const ListItem = withStyle(StyledDropdownListItem, listItemStyle as StyleObject);

const FixedSizeListItem = ({
   data,
   index,
   style,
}: {
    data: {props: OptionListProps}[];
    index: number;
    style: React.CSSProperties;
}) => {
    const {item, overrides, getItemLabel, renderAll, resetMenu, renderHrefAsAnchor, ...restChildProps} = data[index].props;

    return (
        <ListItem
            key={item.id}
            style={{
                boxSizing: 'border-box',
                ...style,
            }}
            {...restChildProps}
        >
            {item.name}
        </ListItem>
    );
};

const Dropdown = React.forwardRef((props: any, ref) => {
    const children = React.Children.toArray(props.children);

    const child = children[0] as React.ReactElement;
    if (!child || !child.props.item) {
        return (
            <StyledList
                $style={{height: EMPTY_LIST_HEIGHT + 'px'}}
                ref={ref}
            >
                <StyledEmptyState {...child.props} />
            </StyledList>
        );
    }

    const height = Math.min(
        MAX_LIST_HEIGHT,
        children.length * LIST_ITEM_HEIGHT,
    );

    return (
        <StyledList $style={{height: height + 'px'}} ref={ref}>
            <FixedSizeList
                width="100%"
                height={height}
                itemCount={children.length}
                itemData={children}
                itemKey={(
                    index: number,
                    data: {props: OptionListProps}[],
                ) => data[index].props.item.id}
                itemSize={LIST_ITEM_HEIGHT}
            >
                {FixedSizeListItem}
            </FixedSizeList>
        </StyledList>
    );
});

export default Dropdown;