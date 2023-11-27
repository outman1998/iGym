import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import HeroBanner from '../components/HeroBanner'
import { MdOutlineRunCircle } from "react-icons/md";
import SendIcon from '@mui/icons-material/Send';
import { CgGym } from "react-icons/cg";
import { MdOutlineSportsGymnastics } from "react-icons/md";

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
        padding: '100px 20px',
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
            We provide the programs you need to build the body you want
        </Typography>
        <Box 
        sx={{
            display: {xs: '', sm: '', md: 'flex', lg: 'flex'},
            justifyContent: 'center',
            // flexWrap: 'wrap'
        }}
        >
            <Box 
            className='one'
            sx={{
                cursor: 'pointer',
                margin: {xs: '0px auto 25px auto', sm: '0px auto 25px auto', md: '0px 25px 25px 0', lg: '0 25px 25px 0px'},
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
                    variant="contained"
                    endIcon={<SendIcon />}
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
                        Go to program
                    </Button>
                </Box>
            </Box>

            <Box 
            className='boxes two'
            sx={{
                cursor: 'pointer',
                margin: {xs: '0px auto 25px auto', sm: '0px auto 25px auto', md: '0px 25px 25px 0', lg: '0 25px 25px 0px'},
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
                        <CgGym 
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
                    endIcon={<SendIcon />}
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
                        Go to program
                    </Button>
                </Box>
            </Box>

            <Box 
            className='boxes three'
            sx={{
                cursor: 'pointer',
                margin: {xs: '0px auto 25px auto', sm: '0px auto 25px auto', md: '0', lg: '0'},
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
                        <MdOutlineSportsGymnastics 
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
                    endIcon={<SendIcon />}
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
                        Go to program
                    </Button>
                </Box>
            </Box>

        </Box>
      </Box>

    </Box>
  )
}

export default Exercises