import { AcUnitRounded, DarkModeOutlined } from '@mui/icons-material';
import { AppBar, Box, Button, Grid, IconButton, Tab, Tabs, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { useState } from 'react';
import NavBarDrawer from '../NavBarDrawer/NavBarDrawer';

const NavBar = ({ links }) => {
    const [value, setValue] = useState();
    const theme = useTheme();
    console.log(theme);

    const isMatch = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <AppBar color='transparent'>
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
                                        <Typography>
                                            <AcUnitRounded className='me-4'></AcUnitRounded>
                                        </Typography>
                                        marzuka
                                    </div>


                                </Grid>


                            </Grid>
                            <Grid container justifyContent="flex-end">

                                {/* Divided screen size (from xs to xl) into 6 columns so that the last tab doesn't slide and cover the first one.  */}
                                <Grid item xs={9} >
                                    <Tabs value={value} textColor='inherit'
                                        TabIndicatorProps={{
                                            sx: {
                                                backgroundColor: "black",
                                                height: 3,
                                            }
                                        }}
                                        onChange={(event, value) => setValue(value)}>
                                        {
                                            links.map((link, index) => <Tab key={index} label={link}></Tab>)
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