export const primaryHeadingBoldProps = (props) => ({
    variant: "h1" || props.variant,
    fontWeight: "bold",
    color: "primary.light" || props.color,
    ...props,
});
export const secondaryHeadingBoldProps = (props) => ({
    variant: "h1" || props.variant,
    fontWeight: "bold",
    color: "secondary.light" || props.color,
    ...props,
});

export const primarySubtitleProps = (props) => ({
    variant: "subtitle1" || props.variant,
    fontWeight: props.fontWeight ? props.fontWeight : "normal",
    color: props.light == "true" ? "primary.light" : "primary.dark",
    ...props,
});
export const secondarySubtitleProps = (props) => ({
    variant: "subtitle1" || props.variant,
    fontWeight: props.fontWeight ? props.fontWeight : "normal",
    color: props.light == "true" ? "secondary.light" : "secondary.dark",
    ...props,
});
