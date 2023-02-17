import { styled } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const CustomLink = styled(Link)(({ theme }) => ({
    // color: variant == 'grey' ? theme.palette.grey[700] : theme.palette.text.primary,
    color: theme.palette.text.primary,
    fontFamily: theme.typography.subtitle1,
    textDecoration: "none",

    display: "flex",
    alignItems: "center",
}));

export default function NavLink({
    href,
    active,
    variant,
    children,
    typographyProps,
    icon,
    ...props
}) {
    return (
        <CustomLink to={href} {...props}>
            {icon}
            <Typography
                variant="subtitle2"
                paddingX={icon ? 1 : 0}
                display="inline"
                {...typographyProps}
                color={variant}
            >
                {children}
            </Typography>
        </CustomLink>
    );
}
