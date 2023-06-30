import React from 'react';
import NavBar from '../../pages/Shared/NavBar/NavBar/NavBar';


const Main = () => {
    const navBarLinks = ["About", "Skills", "Projects","Get in Touch"]
    return (
        <div className='main-container'>
           <NavBar links={navBarLinks}></NavBar>
        </div>
    );
};

export default Main;