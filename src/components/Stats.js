import React from 'react'
import { Box, Button, Typography } from '@mui/material';
import billed from '../assets/images/fitness.png';
import SendIcon from '@mui/icons-material/Send';
import { useCtx } from '../context/Context';

export default function Stats() {

  const {handleOpen} = useCtx();

  return (
    <div style={{backgroundColor: '#111111'}}>

      <Typography
      fontWeight={700}
      sx={{
        fontSize: {lg: '44px', xs: '30px'}
      }}
      pt="80px"
      textAlign="center"
      color= 'white'
      
      
      >
        PUSH YOUR LIMITS FORWARD
      </Typography>

      <Typography
      color="#afafaf"
      fontWeight={500}
      fontSize="18px"
      textAlign="center"
      width="100%"
      sx={{
        padding: {
          xs: '0px 50px 50px 50px', 
          sm: '0px 100px 50px 100px', 
          md: '0px 300px 50px 300px', 
          lg: '0px 400px 50px 400px'
        }
      }}
      >
      Train with the best experts in bodybuilding field. Your results will speak to themselves. Try the latest exercising trends, innovative equipment and special nutrition plans.
      </Typography>

      <Box
      className="flexen"
      sx={{
        display: {sm: 'block', md: 'flex', lg: 'flex'},
        color: 'white'
      }}
      justifyContent="center"
      padding="0px 100px"
      >
        <Box className='et boxen'
        sx={{
          width: {xs: '70%', sm: '50%', md: '50%', lg: '25%'},
          margin: 'auto',
          textAlign: 'center',
          padding: '30px 0px',
          border: '2px solid white',
          borderBottom: {xs: 'none', sm: 'none', md: '2px solid white', lg: '2px solid white'},
          borderRight: {xs: '2px solid white', sm: '2px solid white', md: 'none', lg: 'none'},
          color: 'white'

        }}
        >
          <Typography
          sx={{
            WebkitTextFillColor: 'transparent',
            WebkitTextStrokeWidth: '3px',
            WebkitTextStrokeColor: '#c63d2f'
          }}
          >
            3
          </Typography>
          <Typography color="#afafaf">YEARS OF EXPERIENCE</Typography>
        </Box>

        <Box className='to boxen'
        sx={{
          width: {xs: '70%', sm: '50%', md: '50%', lg: '25%'},
          margin: 'auto',
          textAlign: 'center',
          padding: '30px 0px',
          border: '2px solid white',
          borderBottom: {xs: 'none', sm: 'none', md: '2px solid white', lg: '2px solid white'},
          borderRight: {xs: '2px solid white', sm: '2px solid white', md: 'none', lg: 'none'}

        }}
        >
          <Typography
            sx={{
              WebkitTextFillColor: 'transparent',
              WebkitTextStrokeWidth: '3px',
              WebkitTextStrokeColor: '#c63d2f'
            }}
          >
            5
          </Typography>
          <Typography color="#afafaf">SKILLED TRAINERS</Typography>
        </Box>

        <Box className='tre boxen'
        sx={{
          width: {xs: '70%', sm: '50%', md: '50%', lg: '25%'},
          margin: 'auto',
          textAlign: 'center',
          padding: '30px 0px',
          border: '2px solid white',
          borderBottom: {xs: 'none', sm: 'none', md: '2px solid white', lg: '2px solid white'},
          borderRight: {xs: '2px solid white', sm: '2px solid white', md: 'none', lg: 'none'}
        }}
        >
          <Typography
          sx={{
            WebkitTextFillColor: 'transparent',
            WebkitTextStrokeWidth: '3px',
            WebkitTextStrokeColor: '#c63d2f'
          }}
          >
            43K
          </Typography>
          <Typography color="#afafaf">CALORIES BURNED</Typography>
        </Box>

        <Box className='fire boxen'
        sx={{
          width: {xs: '70%', sm: '50%', md: '50%', lg: '25%'},
          margin: 'auto',
          textAlign: 'center',
          padding: '30px 0px',
          border: '2px solid white'
        }}
        >
          <Typography
          sx={{
            WebkitTextFillColor: 'transparent',
            WebkitTextStrokeWidth: '3px',
            WebkitTextStrokeColor: '#c63d2f'
          }}
          >
            88
          </Typography>
          <Typography color="#afafaf">HAPPY MEMBERS</Typography>
        </Box>
      </Box>

      <Box 
      className='bg'
      sx={{
        marginTop: '80px',
        position: 'relative',
        backgroundColor: 'rgb(17, 17, 17)'
      }}
      >
        <img
        className='pic' 
        width="100%" 
        alt='img'
        src={billed}
        />
        
        <Box 
        className='abs'
        sx={{
          position: 'absolute',
          top: {
            xs: '20%',
            sm: '30%',
            md: '30%',
            lg: '30%'
          },
          left: {xs: '4%', sm: '10%', md: '20%', lg: '20%'} 
        }}
        >
        <Typography
        color="white"
        fontWeight={700}
        sx={{
          width: {xs: '70%', sm: '70%', md: '80%', lg: '50%'}, 
          fontSize: {
            xs: '25px',
            sm: '35px',
            md: '45px',
            lg: '45px'
          }
        }}
        >
        Achieve your training goals with the right plan, not with luck.
        </Typography>

        <Button
        style={{
          marginTop: '10px',
          fontSize: "17px",
          color: 'black',
          textTransform: 'inherit',
          border: '1px solid white',
          backgroundColor: 'white'
        }}
        variant="contained"
        endIcon={<SendIcon />}
        onClick={handleOpen}
        >
          Become member
        </Button>
        </Box>

      </Box>

    </div>

  )
}
