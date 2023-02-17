import { Paper, styled } from '@mui/material';

export const ImageWrapper = styled('div', {
    shouldForwardProp: (props) => props !== 'backgroundImage' && props !== 'backgroundColor',
})(({ theme, backgroundImage, size, backgroundColor = false }) => ({
    width: '100%',
    height: '100%',

    borderRadius: theme.shape.borderRadius,

    background: `url(${backgroundImage}) no-repeat`,
    backgroundSize: size,
    backgroundPosition: 'center',

    backgroundColor: backgroundColor ? theme.palette.primary.main : 'transparent',
}));

export const TumbnailImage = styled('div')(({ theme }) => ({
    width: '100px',
    height: '70px',
    padding: '.5rem',
}));

export const PaperCustom = styled(Paper, {
    shouldForwardProp: (props) => props !== 'padding',
})(({ theme, padding }) => ({
    height: '400px',

    padding: padding || '0',
}));

export const ChatPaper = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.primary.light,
}));

export const ChatWrapper = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
}));
export const ChatBubbleWrapper = styled(Paper, {
    shouldForwardProp: (props) => props !== 'sender',
})(({ theme, sender }) => ({
    backgroundColor: sender ? theme.palette.primary.dark : theme.palette.secondary.dark,
    alignSelf: sender ? 'flex-start' : 'flex-end',

    width: 'fit-content',
    maxWidth: '40%',
    padding: '.4rem .6rem',
    margin: '5px 0',
}));
