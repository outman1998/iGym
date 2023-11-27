import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import HeroBanner from '../components/HeroBanner'
import { MdOutlineRunCircle } from "react-icons/md";

const Exercises = () => {
  return (
    <Box
    sx={{
        backgroundColor: '#111111',
    }}
    >
      <HeroBanner />
      
      <Box
      sx={{
        padding: '100px 0px',
      }}
      >
        <Typography
        sx={{
            color: 'white',
            fontSize: {xs: '35px', sm: '35px', md: '45px', lg: '45px' },
            fontWeight: 'bold',
            marginBottom: '25px',
            textAlign: 'center'
        }}
        >
            We provide the tools you need to build the body you want
        </Typography>
        <Box 
        sx={{
            display: {xs: '', sm: '', md: 'flex', lg: 'flex'},
            justifyContent: 'space-between',
        }}
        >
            <Box 
            className='one'
            sx={{
                margin: {xs: '0px auto 25px auto', sm: '0px auto 25px auto', md: '0px 5px 0px auto', lg: 'auto'},
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                borderRadius: '10px',
                backgroundPosition: '50%',
                objectFit: 'cover',
                position: 'relative',
                backgroundImage: 'url(https://gymate-iota.vercel.app/static/media/cycling.b8899915801da38931f0.jpg)',
                width: '350px',
                height: {xs: '350px', sm: '350px', md: '450px', lg: '450px'}
            }}
            >
                <span className='span'></span>
                <Box 
                className='inside'
                sx={{
                    display: 'flex',
                    verticalAlign: 'text-bottom',
                    justifyContent: 'flex-end',
                    flexDirection: 'column',
                    width: '100%',
                    height: '100%',
                    color: 'white',
                    padding: '10px',
                    zIndex: '1000'
                }}
                >
                    <Typography 
                    className='overskrift'
                    sx={{
                        fontWeight: 'bold',
                        fontSize: '30px',
                        color: 'white',
                        zIndex: 5
                    }}
                    >
                        Cardio
                    </Typography>
                    <span className='spanen'></span>
                    <Box 
                    sx={{
                        display: 'flex',
                        justifyContent: 'normal',
                        zIndex: 1000,
                        alignItems: 'center',
                        marginBottom: '10px'
                    }}
                    >
                        <MdOutlineRunCircle 
                        style={{fontSize: '20px'}}
                        />
                        <Typography 
                        className='name'
                        sx={{
                            zIndex: 1000,
                            marginLeft: '5px',
                            fontSize: '20px'
                        }}
                        >
                            John Flex
                        </Typography>
                    </Box>
                    <Button
                    sx={{
                        backgroundColor: 'white',
                        color: 'black',
                        padding: '5px 15px',
                        fontWeight: 'bold',
                        borderRadius: '3px',
                        zIndex: 1000,
                        border: 'none',
                        marginBottom: '20px',
                        width: 'fit-content',
                        padding: '5px 30px'
                    }}
                    >
                        Join now
                    </Button>
                </Box>
            </Box>

            <Box 
            className='boxes two'
            sx={{
                margin: {xs: '0px auto 25px auto', sm: '0px auto 25px auto', md: '0px 5px 0px auto', lg: 'auto'},
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                borderRadius: '10px',
                backgroundPosition: '50%',
                objectFit: 'cover',
                position: 'relative',
                backgroundImage: 'url(https://gymate-iota.vercel.app/static/media/powerlifting.78726cf515db8f5e86b5.jpg)',
                width: '350px',
                height: {xs: '350px', sm: '350px', md: '450px', lg: '450px'}
            }}
            >
                <span className='span'></span>
                <Box 
                className='inside'
                sx={{
                    display: 'flex',
                    verticalAlign: 'text-bottom',
                    justifyContent: 'flex-end',
                    flexDirection: 'column',
                    width: '100%',
                    height: '100%',
                    color: 'white',
                    padding: '10px',
                    zIndex: '1000'
                }}
                >
                    <Typography 
                    className='overskrift'
                    sx={{
                        fontWeight: 'bold',
                        fontSize: '30px',
                        color: 'white',
                        zIndex: 5
                    }}
                    >
                        Full-body workout
                    </Typography>
                    <span className='spanen'></span>
                    <Box 
                    sx={{
                        display: 'flex',
                        justifyContent: 'normal',
                        zIndex: 1000,
                        alignItems: 'center',
                        marginBottom: '10px'
                    }}
                    >
                        <MdOutlineRunCircle 
                        style={{fontSize: '20px'}}
                        />
                        <Typography 
                        className='name'
                        sx={{
                            zIndex: 1000,
                            marginLeft: '5px',
                            fontSize: '20px'
                        }}
                        >
                            Larry Wheels
                        </Typography>
                    </Box>
                    <Button
                    sx={{
                        backgroundColor: 'white',
                        color: 'black',
                        padding: '5px 15px',
                        fontWeight: 'bold',
                        borderRadius: '3px',
                        zIndex: 1000,
                        border: 'none',
                        marginBottom: '20px',
                        width: 'fit-content',
                        padding: '5px 30px'
                    }}
                    >
                        Join now
                    </Button>
                </Box>
            </Box>

            <Box 
            className='boxes three'
            sx={{
                margin: {xs: '0px auto 25px auto', sm: '0px auto 25px auto', md: 'auto', lg: 'auto'},
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                borderRadius: '10px',
                backgroundPosition: '50%',
                objectFit: 'cover',
                position: 'relative',
                backgroundImage: 'url(https://gymate-iota.vercel.app/static/media/workout.5719e59e3a50e909c445.jpg)',
                width: '350px',
                height: {xs: '350px', sm: '350px', md: '450px', lg: '450px'}
            }}
            >
                <span className='span'></span>
                <Box 
                className='inside'
                sx={{
                    display: 'flex',
                    verticalAlign: 'text-bottom',
                    justifyContent: 'flex-end',
                    flexDirection: 'column',
                    width: '100%',
                    height: '100%',
                    color: 'white',
                    padding: '10px',
                    zIndex: '1000'
                }}
                >
                    <Typography 
                    className='overskrift'
                    sx={{
                        fontWeight: 'bold',
                        fontSize: '30px',
                        color: 'white',
                        zIndex: 5
                    }}
                    >
                        3 day workout split
                    </Typography>
                    <span className='spanen'></span>
                    <Box 
                    sx={{
                        display: 'flex',
                        justifyContent: 'normal',
                        zIndex: 1000,
                        alignItems: 'center',
                        marginBottom: '10px'
                    }}
                    >
                        <MdOutlineRunCircle 
                        style={{fontSize: '20px'}}
                        />
                        <Typography 
                        className='name'
                        sx={{
                            zIndex: 1000,
                            marginLeft: '5px',
                            fontSize: '20px'
                        }}
                        >
                            Shawn Ray
                        </Typography>
                    </Box>
                    <Button
                    sx={{
                        backgroundColor: 'white',
                        color: 'black',
                        padding: '5px 15px',
                        fontWeight: 'bold',
                        borderRadius: '3px',
                        zIndex: 1000,
                        border: 'none',
                        marginBottom: '20px',
                        width: 'fit-content',
                        padding: '5px 30px'
                    }}
                    >
                        Join now
                    </Button>
                </Box>
            </Box>

        </Box>
      </Box>

    </Box>
  )
}

export default Exercises