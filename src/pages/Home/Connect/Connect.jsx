import React, { useRef } from 'react';
import emailjs from '@emailjs/browser'
import { Box, TextField, TextareaAutosize } from '@mui/material';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Connect = ({id}) => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_fi1oi1j', 'template_r6oxmtd', form.current, 'pDJi9PK9QCinp7Txm')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
    
    const textFieldStyles = {
        label: {
            color: '#c7bead',
        },
        input: {
            color: '#c7bead',
            borderBottom: '3px solid #c7bead',
            borderRight: '1px solid #c7bead',
            borderLeft: '1px solid #c7bead',
            backgroundColor: '#403d3d',
            width: '300px'
        },
    };
    return (
        <div className='flex-col items-center justify-center px-8 py-10 text-center' id={id}>
            <SectionTitle sectionHeading="Connect with Me"/>
            <Box
                component="form"
                sx={{

                    '& .MuiTextField-root': { m: 1 },
                    marginLeft:'35px'
                }}
                noValidate
                autoComplete="off"
                onSubmit={sendEmail}
                ref={form}
            >
                <TextField

                    id="outlined-password-input"
                    label="Name"
                    type="text"
                    name='from_name'
                    required
                    InputLabelProps={{ style: textFieldStyles.label }}
                    InputProps={{ style: textFieldStyles.input }}

                />
                <br />
                <TextField
                    id="outlined-password-input"
                    label="Email"
                    type="email"
                    name='from_email'
                    required
                    InputLabelProps={{ style: textFieldStyles.label }}
                    InputProps={{ style: textFieldStyles.input }}

                />
                <br />
                <TextareaAutosize
                    placeholder="Send me a message"
                    name='message'
                    required
                    style={{color:'#c7bead',  borderBottom: '3px solid #c7bead',
                    borderRight: '1px solid #c7bead',
                    borderLeft: '1px solid #c7bead',
                    backgroundColor: '#403d3d',
                    width: '300px', height:'200px', margin:'10px', padding:'10px'}}
                    sx={{ mb: 1 }}

                />
                <br />
                <input type='submit' value="Send" style={{padding:'10px 10px', backgroundColor:'gray', borderRadius:'12px',width:'100%'}}/>
                </Box>
        </div>
    );
};

export default Connect;