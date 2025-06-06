import React, { useState } from 'react';
import { Box, Button, ButtonGroup, Card, CardActions, CardContent, CardMedia, Grid, IconButton, Typography, useMediaQuery, useTheme } from '@mui/material';
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import daisyUiIcon from '../../../assets/daisyui-con.png'
import firebaseIcon from '../../../assets/google-firebase.png'
import mongoDbIcon from '../../../assets/mongodb.png'
import reactIcon from '../../../assets/react.png'
import tailwindIcon from '../../../assets/tailwindcss.png'
import expressIcon from '../../../assets/express.png'
import { Link, useLoaderData } from 'react-router-dom';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { Slide } from 'react-awesome-reveal';


const Projects = ({id}) => {


    // Load Projects data from server
    const projects = useLoaderData();
    // console.log(projects); 

    // Check screen size
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));

    const iconStyles = {
        fontSize: '35px',
        padding: '5px 0px',
        marginBottom: '10px',
    }

    const imageIconStyle = {
        width: '2.1rem',
        height: '2.1rem',
        marginRight: '15px'
    }

    const linkButtonStyle = {
        fontSize: '13px',
        color: '#FFF4E0'
    }
    return (
        <div>
            <SectionTitle sectionHeading="Portfolio"/>
        
        <Grid id={id} container spacing={3}>
            {
                isMatch ?
                    <>
                    <Slide direction='left'>
                        {
                            projects.map(project => <Grid item xs={12}>
                                <Card sx={{ maxWidth: 345, padding: '9px 7px', borderRadius: '6px', backgroundColor: '#231f24', color: '#FFF4E0' }}>
                                    <CardMedia
                                        component="img"
                                        alt={project.name}
                                        height="140"
                                        image={project.websiteImages[0]}
                                        sx={{ borderRadius: '6px' }}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {project.name}
                                        </Typography>
                                        <Typography variant="body2">
                                            {project.summary}
                                        </Typography>
                                    </CardContent>
                                    <IconButton>
                                        {
                                            project.techStackIconImages.map(techStackIconImage => <img src={techStackIconImage} style={imageIconStyle} />)
                                        }
                                    </IconButton>

                                    <CardActions>
                                        <Link to={project.liveSiteLink}><FiExternalLink style={iconStyles} /></Link>

                                        <FiGithub style={iconStyles} className='ml-5 -mr-2' />
                                        <Link to={project?.clientSideLink}><Button style={linkButtonStyle}>Client</Button></Link>

                                        
                                        {
                                                            project.serverSideLink ?
                                                                <Link to={project.serverSideLink}>
                                                                    <Button style={linkButtonStyle}>Server
                                                                    </Button>
                                                                </Link>
                                                                : ''
                                                        }
                                    </CardActions>
                                </Card>

                            </Grid>)
                        }
                </Slide>
                    </>

                    :

                    <>
                        {
                            projects.map(project =>
                                <Grid key={project.id} item xs={12}>

                                    <Card sx={{ display: 'flex', backgroundColor: '#231f24' }}>
                                        <CardMedia
                                            component="img"
                                            style={{ width: '600px', height: '400px', padding: '20px 15px', borderRadius: '28px' }}
                                            image={project.websiteImages[0]}
                                            alt={project.name}
                                        />
                                        <Box sx={{ display: 'flex', flexDirection: 'column', padding: '2px 10px', width: '70%' }}>
                                            <CardContent sx={{ flex: '1 0 auto', color: '#FFF4E0' }}>
                                                <Box sx={{ display: 'flex', marginBottom: '10px' }}>



                                                    <Link to={project.liveSiteLink}><FiExternalLink style={iconStyles} /></Link>
                                                    <FiGithub style={iconStyles} className='ml-4' />
                                                    <ButtonGroup variant="text" aria-label="text button group" sx={{
                                                        fontSize: '7px', height: '15px'}}>
                                                        <Link to={project?.clientSideLink}><Button style={linkButtonStyle}>Client</Button></Link>

                                                        {
                                                            project.serverSideLink ?
                                                                <Link to={project.serverSideLink}>
                                                                    <Button style={linkButtonStyle}>Server
                                                                    </Button>
                                                                </Link>
                                                                : ''
                                                        }
                                                    </ButtonGroup>



                                                </Box>
                                                <Typography component="div" variant="h4">
                                                    {project.name}
                                                </Typography>
                                                <Typography variant="subtitle1" component="div" sx={{ padding: '10px 0' }}>
                                                    {project.summary}
                                                </Typography>
                                                <Box sx={{ display: 'flex', padding: '20px 5px' }}>


                                                    <IconButton>
                                                        {
                                                            project.techStackIconImages.map(techStackIconImage => <img src={techStackIconImage} style={imageIconStyle} />)
                                                        }
                                                    </IconButton>

                                                </Box>
                                                {/* <Button variant='contained' sx={{ margin: '10px 0', padding: '8px 17px' }}>Learn More</Button> */}
                                            </CardContent>

                                        </Box>

                                    </Card>


                                </Grid>
                            )
                        }
                    </>
            }
        </Grid>
    </div>
    );
};

export default Projects;