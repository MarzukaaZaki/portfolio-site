import React from 'react';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import { Typography } from '@mui/material';
let theme = createTheme({
    typography: {
        fontFamily: [
            'Lora, serif'

        ].join(',')
    }
});

theme = responsiveFontSizes(theme);

const Intro = () => {
    return (
        <div className='flex-col items-center justify-center text-center'>
            <ThemeProvider theme={theme}>
                <Typography variant='h2' color='white' sx={{ marginBottom: '30px', fontSize:'1.5rem' }}>Marzuka Zaki</Typography>
                <Typography color='white' sx={{ fontSize: '20px', fontFamily: 'Open Sans', marginBottom: '30px' }}>Frontend developer specializing in combining functionality and aesthetics.</Typography>
            </ThemeProvider>
        </div>
    );
};

export default Intro;