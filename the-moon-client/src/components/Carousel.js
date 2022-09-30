import React, {useRef, useEffect} from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Arrow from '../assets/arrow.png';

import { Pagination, Navigation, EffectCards } from "swiper";

const Container = styled.div`
  width: 90%;
  height: 70vh;

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    background-color: ${props => props.theme.carouselColor};
    border-radius: 20px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-button-next {
    color: black;
    right: 5;
    width: 3rem;

    background-image: url(${Arrow});
    background-position: center;
    background-size: cover;

    &:after {
      display: none;
    }
  }

  .swiper-button-prev {
    color: black;
    left: 5;
    width: 3rem;

    transform: rotate(180deg);
    background-image: url(${Arrow});
    background-position: center;
    background-size: cover;

    &:after {
      display: none;
    }
  }
`

const Box = styled.div`
  min-height: 80%;
  width: 40%;
  background-color: ${props => props.theme.body};
  margin: 5px;
  border: none;
  border-radius: 20px;

  display: flex;
  justify-content: center;
  align-items: center; 
`
const NotReached = styled.div`
  text-align: center;
  font-size: ${props => props.theme.fontxl};
  font-weight: 700;
`


const Carousel = ({selectedSlide}) => {
  const swiperRef = useRef(null);

  // useEffect(() => {}, []);

  const toSlide = () => {
    // console.log("go to slide", num);
    console.log(selectedSlide)

    swiperRef.current?.swiper.slideTo(selectedSlide);
  };

  const currSlide = swiperRef.current?.swiper.activeIndex;

  if (currSlide !== selectedSlide) {
    toSlide();
  }


  return(
    <Container>
      
      {/* <button onClick={()=>toSlide()} >button</button> */}
      
      <Swiper
        pagination={{
          type:'fraction'
        }}
        loop={true}
        navigation={true}
        scrollbar={{
          draggable:true
        }}
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards, Pagination, Navigation]}
        className="mySwiper"
        ref={swiperRef}
      >
        <SwiperSlide><Box>Slide1</Box><Box>2</Box></SwiperSlide>
        <SwiperSlide><Box>Slide1</Box><Box><NotReached>Not Reached Yet! </NotReached></Box></SwiperSlide>
        <SwiperSlide><Box>Slide1</Box><Box>2</Box></SwiperSlide>
        <SwiperSlide><Box>Slide1</Box><Box>2</Box></SwiperSlide>
        <SwiperSlide><Box>Slide1</Box><Box>2</Box></SwiperSlide>
        <SwiperSlide><Box>Slide1</Box><Box>2</Box></SwiperSlide>
        <SwiperSlide><Box>Slide1</Box><Box>2</Box></SwiperSlide>
        <SwiperSlide><Box>Slide1</Box><Box>2</Box></SwiperSlide>
        <SwiperSlide><Box>Slide1</Box><Box>2</Box></SwiperSlide>
      </Swiper>
    </Container>
  )
}

export default Carousel;
