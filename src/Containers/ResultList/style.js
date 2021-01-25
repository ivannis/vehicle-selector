export const blockStyle = {
    Block: {
        style: ({ $theme }) => ({
            padding: `${$theme.sizing.scale400} ${$theme.sizing.scale1000}`,
            backgroundColor: $theme.colors.primary700,
            borderRadius: $theme.borders.radius300,
        })
    }
};

export const titleStyle = {
    Block: {
        style: ({ $theme }) => ({
            textAlign: 'center',
            color: $theme.colors.white,
        })
    }
};