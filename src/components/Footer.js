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
      <Box className="box">

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
                <Typography>Accordion 1</Typography>
              </AccordionSummary>
              <AccordionDetails className='color'>
                <Typography
                color="white"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className='iconen' />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Accordion 1</Typography>
              </AccordionSummary>
              <AccordionDetails className='color'>
                <Typography                 
                color="white"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className='iconen' />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Accordion 1</Typography>
              </AccordionSummary>
              <AccordionDetails className='color'>
                <Typography
                color="white"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.
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
        color: "#afafaf",
        backgroundColor: 'black',
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