import React from 'react';
import { PrimaryCardWrapper } from '../Common/Wrapper/PrimaryCardWrapper';

function PrimaryCard({ children, ...props }) {
    return <PrimaryCardWrapper {...props}>{children}</PrimaryCardWrapper>;
}

export default PrimaryCard;
