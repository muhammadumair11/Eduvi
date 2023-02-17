export const primaryHeadingBoldProps = (props) => ({
    variant: "h1" || props.variant,
    fontWeight: "bold",
    color: "primary.light" || props.color,
    ...props,
});

export const primarySubtitleProps = (props) => ({
    variant: "subtitle1" || props.variant,
    fontWeight: props.fontWeight ? props.fontWeight : "normal",
    color: props.light == "true" ? "primary.light" : "primary.dark",
    ...props,
});
