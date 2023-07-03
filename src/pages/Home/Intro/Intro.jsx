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
                <Typography color='white' sx={{ fontFamily: 'Open Sans', margin: '10px 20%',  }}>I'm a Computer Science student in my final year of university. I am skilled in web development, especially, in front-end development. I specialize in using the MERN stack, which includes MongoDB, Express.js, React.js, and Node.js. I'm constantly seeking opportunities to expand my knowledge and stay up-to-date with the latest trends and technologies in the web development world. I'm excited to take on new challenges and contribute my skills to innovative projects. </Typography>
            </ThemeProvider>
        </div>
    );
};

export default Intro;