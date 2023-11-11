import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Footer() {
  return (
    <>
    <div className='bg'>

      <div className='venstre'>
        <Typography 
        fontSize="25px"
        fontWeight={700}
        >
          People often ask
        </Typography>
      </div>

      <div className='hoejre'>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Why is rest important in a fitness routine?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Rest is vital for muscle recovery, preventing overtraining and injuries. It allows the body to repair and grow stronger, enhances performance, and maintains hormonal balance. Incorporating rest days into your fitness routine is key to achieving long-term success and overall well-being.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>How can I prevent injuries during workouts?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          To prevent injuries during workouts, focus on a thorough warm-up, maintain proper form, progress gradually, listen to your body, incorporate rest days, and stay adequately hydrated.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>

    </div>

    <div className='footer'>
      <Typography>
      Copyright © 2023 Powerpro.com. All rights reserved.
      </Typography>

      <div>
        <ul className='ul'>
          <li>
            About us
          </li>
          <li>
            Privacy Notice
          </li>
          <li>
            Cooke Preferences
          </li>
        </ul>
      </div>
    </div>
  </>
  );
}