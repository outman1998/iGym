import React from 'react';
import { Box, Button, Typography, Stack } from '@mui/material';
import { MdOutlineRunCircle } from "react-icons/md";
import SendIcon from '@mui/icons-material/Send';
import { MdOutlineSportsGymnastics } from "react-icons/md";

const BodyPart = ({item, setBodyPart, BodyPart, imageSrc}) => {
  return (

      <Box 
        className='one'
          key={item.id || item}
          itemID={item.id || item}
          title={item.id || item}
        sx={{
            cursor: 'pointer',
            margin: {xs: '0px auto 25px auto', sm: '0px auto 25px auto', md: '0px 25px 25px 0', lg: '0 25px 25px 0px'},
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            borderRadius: '10px',
            backgroundPosition: '50%',
            objectFit: 'cover',
            position: 'relative',
            backgroundImage: `url(${imageSrc})`,
            width: {xs: '100%', sm:'100%', md: '97%', lg: '97%'},
            height: {xs: '350px', sm: '350px', md: '450px', lg: '450px'},
        }}
        onClick={() => { 
          setBodyPart(item);
          window.scrollTo({top: 1800, left: 100, behavior: 'smooth'})
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
                    {item}
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
  )
}

export default BodyPart