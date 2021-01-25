export const cardStyle = {
    Root: {
        style: ({ $theme }) => ({
            display: 'inline-block',
            padding: `${$theme.sizing.scale400} ${$theme.sizing.scale1400}`,
            borderColor: $theme.colors.backgroundPrimary,
            backgroundColor: $theme.colors.backgroundPrimary,
            boxShadow: $theme.lighting.shadow700,
            borderRadius: $theme.borders.radius300,
        })
    }
};