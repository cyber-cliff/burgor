import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { Grid, Pagination, FreeMode } from "swiper";
import Item from "./item";

const Slider = ({category='', arr=Array(3).fill({name: 'null', src: '', price: 99999}), reset, add}:any) => (
    <Swiper
      slidesPerView={2.5}
      spaceBetween={15}
      setWrapperSize={true}
      freeMode={true}
      grid={{
          rows: 1
      }}
      pagination={{
        clickable: true
      }}
      modules={[Grid, Pagination, FreeMode]}
      className="mySwiper"
      >
        {arr.map((obj:any)=>(
            <SwiperSlide>
              <Item 
                category={category} 
                obj={obj} 
                reset={reset} 
                add={add}/>
            </SwiperSlide>
        ))}
      </Swiper>
  )

export default Slider
