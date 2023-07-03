import React from 'react';
import NavBar from '../../pages/Shared/NavBar/NavBar/NavBar';
import Intro from '../../pages/Home/Intro/Intro';
import { Button, Grid } from '@mui/material';
import ActionButton from '../../components/ActionButton/ActionButton';
import DownloadResumeButton from '../../components/DownloadResumeButton/DownloadResumeButton';
import Projects from '../../pages/Home/Projects/Projects';
import Connect from '../../pages/Home/Connect/Connect';


const Main = () => {
    const navBarLinks = ["About", "Skills", "Projects","Get in Touch"]
    
    
    
    return (
        <div style={{ backgroundColor: '#121212' }}>
           <NavBar links={navBarLinks}></NavBar>
           <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                style={{ minHeight: '80vh' }}
                spacing={5}
            >
                <Grid item style={{marginTop:'20%'}}>
                    <Intro/>

                </Grid>
                <Grid item>
                    <DownloadResumeButton/>
                    
                </Grid>
                <Grid item style={{width:'85%'}}>
                    <Projects/>
                </Grid>
                <Grid>
                    <Connect/>

                </Grid>


            </Grid>
           
        </div>
    );
};

export default Main;