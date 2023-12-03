import { Box, Typography } from '@mui/material';
import React from 'react';
import woman from '../assets/images/cardio.webp';

const AboutUs = () => {
  return (
    <div
    className='parent'
    style={{
        backgroundColor: '#111111',
        padding: '80px 0px 100px 0px'
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
                OUR STORY
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
            At PowerPro, we understand that the path to a healthier lifestyle is unique for each individual. Our story began with a simple yet powerful idea: to create a fitness platform that breaks down barriers and makes exercise accessible to everyone, regardless of age, fitness level, or location.
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
                md: '70px 100px 0px 50px',
                lg: '70px 100px 0px 50px'
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
                <Typography>Learn More About Us</Typography>
                <Typography
                sx={{
                    fontSize: '30px',
                    fontWeight: '500',
                    color: 'white'
                }}
                >
                    Your Fitness, Your Way
                </Typography>
                <Typography
                color="#afafaf"
                >
            Embark on a transformative fitness journey with PowerPro. Whether you're looking to build strength, improve flexibility, or simply enhance your overall well-being, we're here to guide and support you every step of the way. Download PowerPro today and make fitness a sustainable and enjoyable part of your daily life. Your health and happiness are just a click away!
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
                alt='woman'
                style={{
                    borderRadius: '0px 55px 0px 55px',
                }}
                />
            </Box>

        </Box>
    </div>
  )
}

export default AboutUs