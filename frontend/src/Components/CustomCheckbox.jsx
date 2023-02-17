import { Person2Rounded } from '@mui/icons-material';
import { Checkbox, FormControlLabel, FormGroup, styled } from '@mui/material';
import React from 'react';

import tick from '../Assets/Images/tick.svg';

const CheckedDisplay = styled('span')(({ theme }) => ({
    border: `2px solid ${theme.palette.primary.main}`,
    padding: '2px',
    width: '12px',
    height: '12px',

    '&:before': {
        display: 'block',
        width: '100%',
        height: '100%',
        background: `url(${tick}) no-repeat `,
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        content: '""',
    },
}));
const UnCheckedDisplay = styled('span')(({ theme }) => ({
    border: `2px solid ${theme.palette.primary.main}`,
    padding: '2px',
    width: '12px',
    height: '12px',
}));

function CustomCheckbox({ size, label }) {
    return (
        <FormGroup>
            <FormControlLabel
                control={
                    <Checkbox checkedIcon={<CheckedDisplay />} icon={<UnCheckedDisplay />} size={size || 'small'} />
                }
                label={label}
            />
        </FormGroup>
    );
}

export default CustomCheckbox;
