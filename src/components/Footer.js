import React, {useState} from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'
import {MdEmail, MdMail} from 'react-icons/md'
import logoe from '../assets/images/logoe.png'
import { Box } from '@mui/material';

export default function Footer() {


  return (
    <>
      <Box className="box"
      backgroundColor= '#1b1b1b'
      >

        <Box className='first'
        sx={{
          display: {xs: 'block', sm: 'block', md: 'flex', lg: 'flex'},
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '80px 0px',
          borderBottom: '2px solid rgba(254, 254, 254, 0.089)'
        }}
        >
          <img src={logoe} className='logo' />

          <Typography
          sx={{
            fontSize:"45px",
            fontWeight:'700',
            color:"white",
            marginTop: {xs: '35px', sm: '35px', md: '0', lg: '0'}
          }}
          >
            <span className='s'>S</span>tart exercising!
          </Typography>
        </Box>

        <Box className='second'
        sx={{
          display: {xs: 'block', sm: 'block', md: 'flex', lg: 'flex'},
          justifyContent: 'space-between',
          alignItems: 'center',
          color: 'white',
          padding: '80px 0px'
        }}
        >

          <div className='flex'>
            <Typography
            fontSize="14px"
            color="#afafaf"
            marginBottom="10px"
            >
            CONTACT US
            </Typography>
            <Typography
            fontSize="35px"
            fontWeight={700}
            >
            powerpro@contact.com
            </Typography>
            <Typography
            fontSize="35px"
            fontWeight={700}
            >
            + 45 3421 7856
            </Typography>
            <Typography
            fontSize="14px"
            color="#afafaf"
            marginTop="25px"
            >
            FOLLOW US
            </Typography>

            <AiFillInstagram className='icon' fontSize="20px" />
            <AiOutlineTwitter className='icon' fontSize="20px" />
            <BsFacebook className='icon' fontSize="20px" />
            <MdMail fontSize="20px" />

          </div>

          <Box className='accordion'
          sx={{
            width: {xs: '100%', sm: '100%', md: '50%', lg: '50%'},
            marginTop: {xs: '50px', sm: '50px', md: '0px', lg: '0px'}
          }}
          >
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className='iconen' />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Why is the application for free?</Typography>
              </AccordionSummary>
              <AccordionDetails className='color'>
                <Typography
                color="#afafaf"
                >
                  Our commitment to promoting fitness and well-being for everyone is the driving force behind offering this application for free. We believe that access to valuable fitness information and tools should be available to all individuals, fostering a healthier community without any financial barriers. Our goal is to support and inspire people on their fitness journeys by making resources easily accessible.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className='iconen' />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>How to start a fitness routine?</Typography>
              </AccordionSummary>
              <AccordionDetails className='color'>
                <Typography                 
                color="#afafaf"
                >
                Starting a fitness routine can be overwhelming. Begin by setting realistic goals, choosing activities you enjoy, and gradually increasing intensity. Incorporate a mix of cardio, strength training, and flexibility exercises for a well-rounded routine.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className='iconen' />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Preventing injuries in your fitness journey</Typography>
              </AccordionSummary>
              <AccordionDetails className='color'>
                <Typography
                color="#afafaf"
                >
                Preventing injuries in your fitness journey involves proper warm-ups, maintaining good form, incorporating variety in your routine, listening to your body, and ensuring adequate rest. These steps help minimize the risk of strains and injuries, allowing for a safe and effective fitness experience.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>

        </Box>

      </Box>

      <Box className='third'
      sx={{
        display: {xs: 'block', sm: 'block', md: 'flex', lg: 'flex'},
        justifyContent: 'space-between',
        alignItems: 'center',
        color: "white",
        backgroundColor: '#111111',
        padding: '20px 30px',
        textAlign: 'center'
      }}
      >

        <Typography
        sx={{
          marginBottom: {xs: '10px', sm: '10px', md: '0px', lg: '0px'},
          fontSize: '13px'
        }}
        >
          Copyright © 2023 Powerpro.com. All rights reserved
        </Typography>

        <Box
        sx={{
          display: {xs: 'flex', sm: 'flex', md: 'flex', lg: 'flex'},
          justifyContent: 'center',
        }}
        >
          <Typography
          mr="20px"
          fontSize="12px"
          >
            About
          </Typography>
          <Typography
          mr="20px"
          fontSize="12px"
          >
            Cookie Preferences
          </Typography>
          <Typography
          fontSize="12px"
          >
            Membership
          </Typography>
        </Box>

      </Box>
    </>

  );
}