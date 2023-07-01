import { Button } from '@mui/material';
import React from 'react';

const ActionButton = ({children, ...rest}) => {
    return (

        <Button {...rest} sx={{ backgroundColor: '#F05454', color: 'white', borderRadius: '15px', padding: '18px 26px' }}> {children}</Button>

    );
};

export default ActionButton;