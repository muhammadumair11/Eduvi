import React from 'react';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import NavLink from '../../Components/NavLink';

function FooterList({ title, list }) {
    return (
        <>
            <Typography variant="h3" marginBottom={2} color="primary.light" fontWeight="bold">
                {title}
            </Typography>
            <Stack>
                {list.map((el, i) => (
                    <NavLink href={el.link} key={i} variant="grey">
                        {el.name}
                    </NavLink>
                ))}
            </Stack>
        </>
    );
}

export default FooterList;
