import { styled } from '@mui/material';

export const IconWrapper = styled('div', {
    shouldForwardProp: (prop) => prop !== 'size' && prop !== 'marginx' && prop !== 'marginy' && prop !== 'padding',
})(({ theme, size, marginx, marginy, padding }) => ({
    width: `${size}px`,
    marginLeft: `${marginx}px`,
    marginRight: `${marginx}px`,
    marginTop: `${marginy}px`,
    marginBottom: `${marginy}px`,
    padding: `${padding}px`,
}));
