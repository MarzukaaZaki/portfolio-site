import { Grid } from '@mui/material';
import React from 'react';
import htmlImage from '../../../assets/html5Logo.jpg'
import cssImage from '../../../assets/css3Logo.jpg'
import bootstrapImage from '../../../assets/bootstrap5Logo.jpg'
import tailwindImage from '../../../assets/tailwindLogo.jpg'
import jsImage from '../../../assets/jsLogo.jpg'
import pyImage from '../../../assets/pythonLogo.jpg'
import cppImage from '../../../assets/cppLogo.jpg'
import gitImage from '../../../assets/gitLogo.jpg'
import djangoImage from '../../../assets/djangoLogo.jpg'
import reactImage from '../../../assets/reactLogo.jpg'
import expressImage from '../../../assets/expressLogo.jpg'
import firebaseImage from '../../../assets/firebaseLogo.jpg'
import mongodbImage from '../../../assets/mongodbLogo.jpg'
import mysqlImage from '../../../assets/mysqlLogo.jpg'
import bashImage from '../../../assets/bash.jpg'
import adobeXdImage from '../../../assets/adobeXD.jpg'

const Skills = () => {
    const techImageStyle = {
        width:'100px',
        height:'100px'
    }
    return (
        <Grid container spacing={3}>
            <Grid item xs={3.8} md={1.5}>
                <img src={htmlImage} style={techImageStyle} />

            </Grid>
            <Grid item xs={3.8} md={1.5}>
                <img src={cssImage} style={techImageStyle}/>

            </Grid>
            <Grid item xs={3.8} md={1.5}>
                <img src={bootstrapImage} style={techImageStyle}/>

            </Grid>
            <Grid item xs={3.8} md={1.5}>
                <img src={tailwindImage} style={techImageStyle}/>

            </Grid>
            <Grid item xs={3.8} md={1.5}>
                <img src={jsImage} style={techImageStyle}/>

            </Grid>
            <Grid item xs={3.8} md={1.5}>
                <img src={cppImage} style={techImageStyle}/>

            </Grid>
            <Grid item xs={3.8} md={1.5}>
                <img src={pyImage} style={techImageStyle}/>

            </Grid>
            <Grid item xs={3.8} md={1.5}>
                <img src={reactImage} style={techImageStyle} />

            </Grid>
            <Grid item xs={3.8} md={1.5}>
                <img src={djangoImage} style={techImageStyle} />

            </Grid>
            <Grid item xs={3.8} md={1.5}>
                <img src={firebaseImage} style={techImageStyle}/>

            </Grid>
            <Grid item xs={3.8} md={1.5}>
                <img src={expressImage} style={techImageStyle}/>

            </Grid>
            <Grid item xs={3.8} md={1.5}>
                <img src={mongodbImage} style={techImageStyle}/>

            </Grid>
            <Grid item xs={3.8} md={1.5}>
                <img src={mysqlImage} style={techImageStyle}/>

            </Grid>
            <Grid item xs={4.5} md={1.5}>
                <img src={gitImage} style={techImageStyle} />

            </Grid>
            <Grid item xs={4.5} md={1.5}>
                <img src={bashImage} style={techImageStyle} />

            </Grid>
            <Grid item xs={4.5} md={1.5}>
                <img src={adobeXdImage} style={techImageStyle} />

            </Grid>

        </Grid>
    );
};

export default Skills;