import React from 'react';
import { Box, Button, ButtonGroup, Card, CardContent, CardMedia, Grid, IconButton, Typography } from '@mui/material';
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import daisyUiIcon from '../../../assets/daisyui-con.png'
import firebaseIcon from '../../../assets/google-firebase.png'
import mongoDbIcon from '../../../assets/mongodb.png'
import reactIcon from '../../../assets/react.png'
import tailwindIcon from '../../../assets/tailwindcss.png'
import expressIcon from '../../../assets/express.png'

const Projects = () => {
    const iconStyles = {
        fontSize: '35px',
        padding: '5px 0px',
        marginBottom: '10px',
    }
    const imageIconStyle = {
        width: '40px',
        height: '40px',
        marginRight: '15px'
    }

    const linkButtonStyle = {
        fontSize: '13px',
        color: '#FFF4E0'
    }
    return (
        <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Card sx={{ display: 'flex', backgroundColor: '#231f24' }}>
                        <CardMedia
                            component="img"
                            style={{ width: '800px', height: '400px', padding: '20px 15px', borderRadius: '28px' }}
                            image="https://mui.com/static/images/cards/live-from-space.jpg"
                            alt="Live from space album cover"
                        />
                        <Box sx={{ display: 'flex', flexDirection: 'column', padding: '2px 10px', width:'70%' }}>
                            <CardContent sx={{ flex: '1 0 auto', color: '#FFF4E0' }}>
                                <Box sx={{ display: 'flex', marginBottom: '10px' }}>



                                    <FiExternalLink style={iconStyles} />
                                    <FiGithub style={iconStyles} className='ml-4' />
                                    <ButtonGroup variant="text" aria-label="text button group" sx={{
                                        fontSize: '7px', height: '15px', marginTop: '10px',
                                        '& .MuiButtonGroup-grouped:not(:last-child)': {
                                            borderRightColor: '#FFF4E0', // Change the color to your desired color
                                            borderRightWidth: '1.2px',
                                            borderRightStyle: 'solid',
                                        },
                                    }}>
                                        <Button style={linkButtonStyle}>Client</Button>
                                        <Button style={linkButtonStyle}>Server</Button>
                                    </ButtonGroup>



                                </Box>
                                <Typography component="div" variant="h3">
                                    Artics
                                </Typography>
                                <Typography variant="subtitle1" component="div" sx={{ padding: '10px 0' }}>
                                Artics is a summer camp website offering a diverse array of courses, role-based access, and seamless learning experiences.
                                </Typography>
                                <Box sx={{ display: 'flex', padding: '20px 5px' }}>


                                    <IconButton>
                                        <img src={reactIcon} style={imageIconStyle} />
                                        <img src={tailwindIcon} style={imageIconStyle} />
                                        <img src={daisyUiIcon} style={imageIconStyle} />
                                        <img src={firebaseIcon} style={imageIconStyle} />
                                        <img src={expressIcon} style={imageIconStyle} />
                                        <img src={mongoDbIcon} style={imageIconStyle} />
                                    </IconButton>

                                </Box>
                                <Button variant='contained' sx={{ margin: '10px 0', padding: '8px 17px' }}>Learn More</Button>
                            </CardContent>

                        </Box>

                    </Card>

                </Grid>
                <Grid item xs={12}>
                    <Card sx={{ display: 'flex' }}>
                        <CardMedia
                            component="img"
                            style={{ width: '60%', height: '400px', padding: '20px 15px', borderRadius: '28px' }}
                            image="https://mui.com/static/images/cards/live-from-space.jpg"
                            alt="Live from space album cover"
                        />
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                                <Typography component="div" variant="h3">
                                    Live From Space
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                    Mac Miller
                                </Typography>
                            </CardContent>

                        </Box>

                    </Card>

                </Grid>

            </Grid>
    );
};

export default Projects;