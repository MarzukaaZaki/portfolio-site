import React from 'react';
import NavBar from '../../pages/Shared/NavBar/NavBar/NavBar';
import Intro from '../../pages/Home/Intro/Intro';
import { Button, Grid } from '@mui/material';
import ActionButton from '../../components/ActionButton/ActionButton';
import DownloadResumeButton from '../../components/DownloadResumeButton/DownloadResumeButton';
import Projects from '../../pages/Home/Projects/Projects';
import Connect from '../../pages/Home/Connect/Connect';
import Skills from '../../pages/Home/Skills/Skills';
import { Slide, Zoom } from 'react-awesome-reveal';


const Main = () => {
    const navBarLinks = ["About","Skills", "Portfolio", "Connect"]



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
                <Grid item style={{ marginTop: '20%' }}>
                    <Slide direction='down' duration={500}>
                        <Intro id='section1'/>
                    </Slide>

                </Grid>
                <Grid item>
                    <DownloadResumeButton />

                </Grid>
                <Grid item style={{ width: '90%' }}>
                    <Slide direction='up' duration={500}>
                        <Skills id='section2' />
                    </Slide>

                </Grid>
                <Grid item style={{ width: '85%' }}>
                    <Zoom direction='down' duration={850}>
                        <Projects id='section3' />
                    </Zoom>
                </Grid>
                <Grid>
                    <Zoom direction='down' duration={850}>
                        <Connect id='section4' />
                    </Zoom>

                </Grid>


            </Grid>

        </div>
    );
};

export default Main;