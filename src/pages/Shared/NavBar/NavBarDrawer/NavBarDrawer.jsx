import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText, useTheme } from '@mui/material';
import React, { useState } from 'react';
import DragHandleRoundedIcon from '@mui/icons-material/DragHandleRounded';
import { CloseRounded, DarkModeOutlined } from '@mui/icons-material';


const NavBarDrawer = ({ links }) => {
    const [open, setOpen] = useState(false);
    console.log(links);
    const theme = useTheme();

    return (
        <>
            <Drawer anchor='top' open={open} onClose={() => setOpen(false)}
                sx={{
                    '& .MuiDrawer-paper': {
                        position: 'fixed',
                        marginTop: '56px'
                    },
                    '& .MuiBackdrop-root': {
                        backgroundColor: 'transparent'
                    }


                }}>
                <List >
                    {
                        links.map((link, index) =>
                            <ListItemButton key={index} className='uppercase'>
                                <ListItemIcon>
                                    <ListItemText >
                                        {link}
                                    </ListItemText>
                                </ListItemIcon>
                            </ListItemButton>


                        )


                    }
                    
                </List>

            </Drawer>

            {/* Icon button defines functionalities of an icon */}
            <IconButton sx={{ marginLeft: 'auto', color: 'black' }} onClick={() => setOpen(!open)}>
                {
                    open ?
                        <CloseRounded /> :
                        <DragHandleRoundedIcon />
                }
                
            </IconButton>
            <IconButton>
                <DarkModeOutlined/>
            </IconButton>

        </>
    );
};

export default NavBarDrawer;