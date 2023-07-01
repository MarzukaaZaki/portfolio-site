import React from 'react';
import NavBar from '../../pages/Shared/NavBar/NavBar/NavBar';
import Intro from '../../pages/Home/Intro/Intro';
import { Button, Grid } from '@mui/material';
import ActionButton from '../../components/ActionButton/ActionButton';


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
                spacing={2}
            >
                <Grid item>
                    <Intro/>

                </Grid>
                <Grid item sx={{display:'flex'}}>
                    <ActionButton/>
                    
                </Grid>


            </Grid>
           
        </div>
    );
};

export default Main;