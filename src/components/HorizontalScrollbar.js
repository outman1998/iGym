import React, {useContext} from 'react';
import { Box, Typography } from '@mui/material';
import BodyPart from './BodyPart';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const imageMapping = {
    all: 'https://www.dmarge.com/wp-content/uploads/2020/01/hotelworkout.jpg',
    back: 'https://steelsupplements.com/cdn/shop/articles/single-arm-db-row-min_1000x.jpg?v=1662648403',
    cardio: 'https://plunkettfitness.com/wp-content/uploads/2018/11/cardio-1024x683.jpg',
    chest: 'https://www.mensjournal.com/.image/t_share/MTk2MTM3Mjk2NTU0Njk4MjQ1/barbell-benchpress.jpg',
    neck: 'https://www.dmoose.com/cdn/shop/articles/1_68d5f8c2-0791-4a41-86db-e7f224b142ea.jpg?v=1649931793',
    waist: 'https://hips.hearstapps.com/hmg-prod/images/sweaty-black-athlete-doing-sit-ups-in-a-gym-royalty-free-image-1591197876.jpg?crop=1.00xw:1.00xh;0,0&resize=2048:*',
    shoulders: 'https://www.muscleandfitness.com/wp-content/uploads/2018/03/chris-bumstead-latraise-1109.jpg?w=1300&h=731&crop=1&quality=86&strip=all',
    upper_arms: 'https://www.mindpumpmedia.com/hubfs/Top%20Exercises%20Big%20Arms.png',
    lower_arms: 'https://hips.hearstapps.com/hmg-prod/images/muscle-and-fitness-royalty-free-image-1622119180.jpg',
    lower_legs: 'https://manofmany.com/wp-content/uploads/2023/09/16-Best-Calf-Exercises-and-Workouts-for-Men.jpg',
    upper_legs: 'https://steelsupplements.com/cdn/shop/articles/shutterstock_749160127_1000x.jpg?v=1625421239'
  };

  const getImageSrc = (item) => {
    const itemNameWithoutSpaces = item.replace(/\s/g, '_'); // Replace spaces with underscores
    return imageMapping[itemNameWithoutSpaces] || '';
  };
  

export default function HorizontalScrollbar({ data, setBodyPart }) {

    const responsive = {
        0: {
            items: 2,
        },
        512: {
            items: 3
        }
    };
    
  return (
    <AliceCarousel
    mouseTracking 
    infinite
    autoPlayInterval={1500}
    animationDuration={1500}
    disableDotsControls
    responsive={responsive}
    autoPlay
    >
      {data.map((item) => (
        <Box
          key={item.id || item}
          itemID={item.id || item}
          title={item.id || item}
        >

          <BodyPart 
            BodyPart={BodyPart} 
            item={item} 
            setBodyPart={setBodyPart} 
            imageSrc={getImageSrc(item)}
          />
        </Box>
      ))}
    </AliceCarousel>
  );
}
