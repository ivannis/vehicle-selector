export const formStyle = {
    Root: {
        style: ({ $theme }) => ({
            marginBottom: $theme.sizing.scale2400,
            borderColor: $theme.colors.backgroundPrimary,
            borderRadius: $theme.borders.radius300,
            boxShadow: $theme.lighting.shadow400,
        })
    }
};

export const gridStyle = {
    Grid: {
        style: {
            paddingLeft: "0px !important",
            paddingRight: "0px !important",
        }
    }
};

export const buttonStyle = {
    Root: {
        style: {
            width: "100%",
        }
    }
};