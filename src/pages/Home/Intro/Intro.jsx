import React from 'react';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import { IconButton, Typography } from '@mui/material';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { Link } from 'react-router-dom';
let theme = createTheme({
    typography: {
        fontFamily: [
            'Red Hat Display, sans-serif'

        ].join(',')
    }
});

theme = responsiveFontSizes(theme);

const socialLinkStyle ={
    width:'48px',
    height:'48px',
    padding:'10px 10px'
}

const Intro = ({id}) => {
    return (
        <div id={id} className='flex-col items-center justify-center text-center'>
            <ThemeProvider theme={theme}>
                <Typography variant='h2' color='white' sx={{ marginBottom: '30px', fontWeight: 'bold', letterSpacing: '2' }}>Hello, I'm Marzuka</Typography>
                <Typography color='white' sx={{ fontFamily: 'Open Sans', margin: '4px 20%', }}>
                    I'm an MSc Computer Science & Engineering student specializing in Data Analysis, Machine Learning, and Full-Stack Web Development (MERN). My toolkit includes Python with its scientific ecosystem for data analysis and model development, SQL for data querying and manipulation, and the MERN stack for building full-stack web applications. I enjoy extracting actionable insights from data through analysis and model fine-tuning, and also build interactive, user-focused web platforms. I'm eager to apply this dual skill set to develop both analytical and application-driven solutions.
                <br />
                    <IconButton sx={{color:'white'}}>
                        <Link><FiLinkedin style={socialLinkStyle} /></Link>
                        <FiGithub style={socialLinkStyle} />
                        <FiMail style={socialLinkStyle} />

                    </IconButton>

                </Typography>

            </ThemeProvider>
        </div>
    );
};

export default Intro;