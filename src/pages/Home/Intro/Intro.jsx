import React from 'react';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import { Typography } from '@mui/material';
let theme = createTheme({
    typography: {
        fontFamily: [
            'Red Hat Display, sans-serif'

        ].join(',')
    }
});

theme = responsiveFontSizes(theme);

const Intro = () => {
    return (
        <div className='flex-col items-center justify-center text-center'>
            <ThemeProvider theme={theme}>
                <Typography variant='h2' color='white' sx={{ marginBottom: '30px', fontWeight:'bold',letterSpacing:'2' }}>Hello, I'm Marzuka</Typography>
                <Typography color='white' sx={{ fontFamily: 'Open Sans', marginBottom: '30px' }}>I'm a frontend developer who specializes in combining functionality and aesthetics.</Typography>
            </ThemeProvider>
        </div>
    );
};

export default Intro;