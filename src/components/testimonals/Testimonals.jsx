import React from 'react'
import './testimonals.css'
import AVTR1 from '../../assets/avatar1.png'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar:AVTR1,
    name: "Tina Kandak",
    review: "Lorem, ipsum dolor sit amet consectetur Lorem, ipsum dolor sit amet consecteturLorem, ipsum dolor sit amet consectetur "
  },
  {
    avatar: AVTR2,
    name: "Tina Kandak",
    review: "Lorem, ipsum dolor sit amet consectetur Lorem, ipsum dolor sit amet consecteturLorem, ipsum dolor sit amet consectetur"
  },
  {
    avatar: AVTR3,
    name: "Tina Kandak",
    review: "Lorem, ipsum dolor sit amet consectetur Lorem, ipsum dolor sit amet consecteturLorem, ipsum dolor sit amet consectetur"
  },
  {
    avatar: AVTR4,
    name: "Tina Kandak",
    review: "Lorem, ipsum dolor sit amet consectetur Lorem, ipsum dolor sit amet consecteturLorem, ipsum dolor sit amet consectetur"
  }

]
const Testimonals = () => {
  return (
   <section id="testimonals">
      <h5>Review from clients</h5>
      <h2>Testimonals</h2>

      <Swiper className="container testimoanls__container"
       // install Swiper modules
       modules={[ Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, reviw}, index) => {
            return(
              <SwiperSlide key={index} className="testimonal">
          <div className="client__avatar">
            <img src={avatar} />
          </div>
          <h5 className='client__name'>{name}</h5>
            <small className='client__review'> {reviw}</small>
        </SwiperSlide>
            )
          })
        }
       
  
       
      </Swiper>
   </section>
  )
}

export default Testimonals