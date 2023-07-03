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
                <Typography color='white' sx={{ fontFamily: 'Open Sans', margin: '4px 20%', }}>I'm a Computer Science student in my final year of university. I am skilled in web development, especially, in front-end development. I specialize in using the MERN stack, which includes MongoDB, Express.js, React.js, and Node.js. I'm constantly seeking opportunities to expand my knowledge and stay up-to-date with the latest trends and technologies in the web development world. I'm excited to take on new challenges and contribute my skills to innovative projects.
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