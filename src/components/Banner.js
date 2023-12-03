import { Box, Typography } from '@mui/material'
import React from 'react'

const Banner = () => {

    const boxStyle = {
        height: '100vh', // Set the height to 100% of the viewport height
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        backgroundColor: 'black',
        textAlign: 'center',
        backgroundSize: 'cover', // Ensure the background image covers the entire box
        backgroundPosition: 'right',
        background: '#111111',
        borderBottom: '1px solid rgb(243 243 243 / 3%)'
    };


  return (
    <>
    <Box
    style={boxStyle}
    >

        <Box
        >
            <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
            >
                <hr style={{width: '5%', height: '2px'}} />
                <Typography
                sx={{
                    fontSize: "18px",
                    fontWeight: 'light',
                    padding: '0px 10px'
                }}
                >
                    Exclusive
                </Typography>
                <hr style={{width: '5%', height: '2px'}} />
            </Box>
            <Typography
            sx={{
                fontSize:{
                    xs: '50px',
                    sm: '50px',
                    md: '65px',
                    lg: '75px'
                  },                
                fontWeight: 'bold',
                margin: ' 0px 10px'
            }}
            >
                MAKE YOUR BODY <br/> 
                <span
                style={{
                    WebkitTextFillColor: 'transparent',
                    WebkitTextStrokeWidth: '2px',
                    WebkitTextStrokeColor: '#c63d2f',
                    color: 'blue'
                }}
                >
                    FIT & PERFECT
                </span>
            </Typography>

            <div 
            className='mouse_scroll'
            style={{
                paddingTop: '40px',
                margin: 'auto'
            }}
            >
                <div
                className='mouse'
                style={{
                    height: '42px',
                    width: '24px',
                    borderRadius: '14px',
                    transform: 'none',
                    border: '2px solid #fff',
                    margin: 'auto'
                }}
                >
                <div
                    className='wheel'
                    style={{
                    border: '2px solid #fff',
                    color: 'white',
                    display: 'block',
                    margin: '5px auto',
                    background: '#fff',
                    position: 'relative',
                    height: '4px',
                    width: '4px',
                    borderRadius: '8px',
                    animation: 'continuousBounce .6s linear infinite',
                    }}
                ></div>
                </div>

                <span
                style={{
                marginTop: '-1px',
                display: 'block',
                transform: 'rotate(45deg)',
                borderRight: '2px solid #fff',
                borderBottom: '2px solid #fff',
                margin: '0 auto 3px auto',
                width: '16px',
                height: '16px',
                animation: 'fadeeAnimation 2s infinite', // Adjust the duration

                }}
                >
                </span>
                <span
                style={{
                marginTop: '-1px',
                display: 'block',
                transform: 'rotate(45deg)',
                borderRight: '2px solid #fff',
                borderBottom: '2px solid #fff',
                margin: '-7px auto 3px auto',
                width: '16px',
                height: '16px',
                animation: 'fadeeAnimation 2s infinite', // Adjust the duration
                animationDelay: '.2s'
                }}
                >
                </span>
                <span
                style={{
                marginTop: '-1px',
                display: 'block',
                transform: 'rotate(45deg)',
                borderRight: '2px solid #fff',
                borderBottom: '2px solid #fff',
                margin: '-7px auto 3px auto',
                width: '16px',
                height: '16px',
                animation: 'fadeeAnimation 2s infinite', // Adjust the duration
                animationDelay: '.3s'
                }}
                >
                </span>
            </div>
        </Box>

    </Box>
    </>

  )
}

export default Banner