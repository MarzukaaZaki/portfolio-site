import { AcUnitRounded, DarkModeOutlined } from '@mui/icons-material';
import { AppBar, Box, Button, Grid, IconButton, Tab, Tabs, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { useState } from 'react';
import NavBarDrawer from '../NavBarDrawer/NavBarDrawer';
import { Link } from 'react-scroll';

const NavBar = ({ links }) => {
    const [value, setValue] = useState();
    const theme = useTheme();
    console.log(theme);

    const isMatch = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <AppBar sx={{backgroundColor: '#121212', color: '#F5F5F5'}}>
            <Toolbar>
                {
                    isMatch ?
                        <>
                            <NavBarDrawer links={links}></NavBarDrawer>
                        </> :
                        <>
                            <Grid container justifyItems="flex-end">
                                <Grid item xs={2}>
                                    <div className='flex'>
                                        
                                        Marzuka Zaki 
                                    </div>


                                </Grid>


                            </Grid>
                            <Grid container justifyContent="flex-end">

                                {/* Divided screen size (from xs to xl) into 6 columns so that the last tab doesn't slide and cover the first one.  */}
                                <Grid item xs={9} >
                                    <Tabs value={value} textColor='inherit'
                                        TabIndicatorProps={{
                                            sx: {
                                                backgroundColor: "#F5F5F5",
                                                height: 3,
                                            }
                                        }}
                                        onChange={(event, value) => setValue(value)}>
                                        {
                                            links.map((link, index) =><Link key={index} to={`section${index + 1}`} smooth={true} duration={500}><Tab label={link}></Tab></Link> )
                                        }
                                      </Tabs>
                                    


                                </Grid>
                                

                                      <Grid xs={2}>
                                        <Box className='-ms-8 mt-1'>
                                            <IconButton><DarkModeOutlined/></IconButton>
                                        </Box>
                                      </Grid>

                            </Grid>

                        </>
                }
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;