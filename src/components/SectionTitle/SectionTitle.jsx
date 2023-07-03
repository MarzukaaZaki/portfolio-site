import React from 'react';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import { Typography } from '@mui/material';
let theme = createTheme({
    typography: {
        fontFamily: [
            'Montserrat, serif'

        ].join(',')
    }
});

const SectionTitle = ({sectionHeading}) => {
    return (
        <div className='my-10 flex-col items-center justify-center text-center'>
            <ThemeProvider theme={theme}>
                <Typography variant='h3'
                sx={{color:'white', marginBottom:'20px'}}>{sectionHeading}</Typography>
            </ThemeProvider>
        </div>
    );
};

export default SectionTitle;