import React from 'react'
import { MdOutlineRunCircle } from "react-icons/md";
import SendIcon from '@mui/icons-material/Send';
import { CgGym } from "react-icons/cg";
import { MdOutlineSportsGymnastics } from "react-icons/md";
import { Box, Button, Typography } from '@mui/material'

const Categories = () => {
  return (
    <Box backgroundColor='#111111'>
        <Box
        sx={{
        padding: '100px 20px 0px 20px',
        backgroundColor: '#111111'
        }}
        >
        <Typography
        sx={{
            color: 'white',
            fontSize: {xs: '35px', sm: '35px', md: '45px', lg: '45px' },
            fontWeight: 'bold',
            marginBottom: '25px',
            margin: 'auto auto 30px auto',
            maxWidth: '75rem',
        }}
        >
            Workout Programs
        </Typography>
        <Box 
        sx={{
            display: {xs: '', sm: '', md: 'flex', lg: 'flex'},
            justifyContent: 'center',
            maxWidth: '75rem',
            margin: 'auto'
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
                backgroundImage: 'url(https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/rockcms/2021-12/211208-working-out-stock-mn-1310-55e1c7.jpg)',
                width: {xs: '100%', sm:'100%', md: '33.33%', lg: '33.33%'},
                height: {xs: '350px', sm: '350px', md: '450px', lg: '450px'},
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
                        padding: '5px 30px',
                        ":hover": {backgroundColor: 'white'}
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
                width: {xs: '100%', sm:'100%', md: '33.33%', lg: '33.33%'},
                height: {xs: '350px', sm: '350px', md: '450px', lg: '450px'},
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
                        padding: '5px 30px',
                        ":hover": {backgroundColor: 'white'}
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
                width: {xs: '100%', sm:'100%', md: '33.33%', lg: '33.33%'},
                height: {xs: '350px', sm: '350px', md: '450px', lg: '450px'},
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
                        padding: '5px 30px',
                        ":hover": {backgroundColor: 'white'}
                    }}
                    >
                        Go to program
                    </Button>
                </Box>
            </Box>

        </Box>
        </Box>

        <Box
        sx={{
        padding: '50px 20px 0px 20px',
        backgroundColor: '#111111'
        }}
        >
        <Typography
        sx={{
            color: 'white',
            fontSize: {xs: '35px', sm: '35px', md: '45px', lg: '45px' },
            fontWeight: 'bold',
            marginBottom: '25px',
            margin: 'auto auto 30px auto',
            maxWidth: '75rem',
        }}
        >
            Body Areas
        </Typography>
        <Box 
        sx={{
            display: {xs: '', sm: '', md: 'flex', lg: 'flex'},
            justifyContent: 'center',
            maxWidth: '75rem',
            margin: 'auto'
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
                backgroundImage: 'url(https://www.muscleandfitness.com/wp-content/uploads/2019/09/Muscular-V-Taper-Back.jpg?quality=86&strip=all)',
                width: {xs: '100%', sm:'100%', md: '33.33%', lg: '33.33%'},
                height: {xs: '350px', sm: '350px', md: '450px', lg: '450px'},
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
                        Back
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
                        padding: '5px 30px',
                        ":hover": {backgroundColor: 'white'}
                    }}
                    >
                            See exercises
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
                backgroundImage: 'url(https://wearefitnessfreak.com/wp-content/uploads/2020/11/Best-Chest-Exercises-at-the-Gym-1.jpeg)',
                width: {xs: '100%', sm:'100%', md: '33.33%', lg: '33.33%'},
                height: {xs: '350px', sm: '350px', md: '450px', lg: '450px'},
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
                        Chest
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
                        padding: '5px 30px',
                        ":hover": {backgroundColor: 'white'}
                    }}
                    >
                            See exercises
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
                backgroundImage: 'url(https://steelsupplements.com/cdn/shop/articles/shutterstock_609051533_1000x.jpg?v=1652132740)',
                width: {xs: '100%', sm:'100%', md: '33.33%', lg: '33.33%'},
                height: {xs: '350px', sm: '350px', md: '450px', lg: '450px'},
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
                        Shoulders
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
                        padding: '5px 30px',
                        ":hover": {backgroundColor: 'white'}
                    }}
                    >
                            See exercises
                    </Button>
                </Box>
            </Box>

        </Box>
        </Box>

        <Box
        sx={{
            padding: '0px 20px 100px 20px',
            backgroundColor: '#111111'
            }}
        >
        
            <Box 
            sx={{
                display: {xs: '', sm: '', md: 'flex', lg: 'flex'},
                justifyContent: 'center',
                maxWidth: '75rem',
                margin: 'auto',
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
                    backgroundImage: 'url(https://barbend.com/wp-content/uploads/2023/02/Barbend-Featured-Image-1600x900-A-person-performing-cable-biceps-curls.jpg)',
                    width: {xs: '100%', sm:'100%', md: '33.33%', lg: '33.33%'},
                    height: {xs: '350px', sm: '350px', md: '450px', lg: '450px'},
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
                            Biceps
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
                            padding: '5px 30px',
                            ":hover": {backgroundColor: 'white'}
                        }}
                        >
                            See exercises
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
                    backgroundImage: 'url(https://www.muscleandfitness.com/wp-content/uploads/2019/12/arms-triceps-gym-cable-machine.jpg?w=1300&h=731&crop=1&quality=86&strip=all)',
                    width: {xs: '100%', sm:'100%', md: '33.33%', lg: '33.33%'},
                    height: {xs: '350px', sm: '350px', md: '450px', lg: '450px'},
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
                            Triceps
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
                            padding: '5px 30px',
                            ":hover": {backgroundColor: 'white'}
                        }}
                        >
                            See exercises
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
                    backgroundImage: 'url(https://i0.wp.com/vshred.com/blog/wp-content/uploads/2018/06/man-gym-training-leg-press-define-leg-day-workout-ss-FEATURE-.jpg?fit=1000%2C560&ssl=1)',
                    width: {xs: '100%', sm:'100%', md: '33.33%', lg: '33.33%'},
                    height: {xs: '350px', sm: '350px', md: '450px', lg: '450px'},
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
                            Legs
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
                            padding: '5px 30px',
                            ":hover": {backgroundColor: 'white'}
                        }}
                        >
                            See exercises
                        </Button>
                    </Box>
                </Box>

            </Box>

        </Box>

        
    </Box>

  )
}

export default Categories