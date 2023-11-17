import { Box, Typography } from '@mui/material';
import React from 'react';
import woman from '../assets/images/cardio.webp';

const AboutUs = () => {
  return (
    <div
    className='parent'
    style={{
        backgroundColor: '#111111',
        padding: '50px 0px 70px 0px'
    }}>
        <div
        style={{
            textAlign: 'center'
        }}
        >
            <Typography
            sx={{
                fontSize: {lg: '44px', xs: '30px'},
                fontWeight: 'bold',
                marginBottom: '10px',
                color: 'white'
            }}
            >
                Our Story
            </Typography>
            <Typography
            sx={{
                fontSize: '17px',
                color: "#afafaf",
                padding: {
                    xs: '0px 50px',
                    sm: '0px 100px',
                    md: '0px 200px',
                    lg: '0px 300px'
                }        
            }}
            >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </Typography>
        </div>

        <Box 
        sx={{
            display: {
                xs: 'block',
                sm: 'block',
                md: 'flex',
                lg: 'flex'
            },
            justifyContent: 'center',
            padding: {
                xs: '50px 50px 0px 50px',
                sm: '50px 50px 0px 50px',
                md: '50px 100px 0px 50px',
                lg: '50px 100px 0px 50px'
            },
            alignItems: 'center',
            textAlign: {
                xs: 'center',
                sm: 'center',
                md: 'left',
                lg: 'left'
            }
        }}>

            <Box
            sx={{
                marginRight: '60px',
                width: {
                    xs: '100%',
                    sm: '100%',
                    md: '50%',
                    lg: '50%'
                },
                color: 'white'

            }}
            >
                <p>Learn More About Us</p>
                <Typography
                sx={{
                    fontSize: '30px',
                    fontWeight: '500',
                    color: 'white'
                }}
                >
                    The Journey Of The Relaxation
                </Typography>
                <Typography
                color="#afafaf"
                >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </Typography>
            </Box>

            <Box 
            sx={{
                width: {
                    xs: '100%',
                    sm: '100%',
                    md: '50%',
                    lg: '50%'
                },
                paddingTop: {
                    xs: '25px',
                    sm: '25px',
                    md: '0px',
                    lg: '0px'
                }
            }}
            >
                <img 
                width="100%"
                src={woman}
                style={{
                    borderRadius: '7px'
                }}
                />
            </Box>

        </Box>
    </div>
  )
}

export default AboutUs