import { Swiper, SwiperSlide } from 'swiper/react';

import { ComentsCards } from './ComentsCards';
import 'swiper/css';



export function Carousel(){
    return(
        <Swiper
        spaceBetween={100}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >

            <SwiperSlide><ComentsCards nome={"Gabriel Miranda"} comentario={"“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”"}/></SwiperSlide>
            <SwiperSlide><ComentsCards nome={"Felipe Antunes"} comentario={"I recently booked a trip through this travel company, and their customer service was outstanding. From helping me choose the perfect destination to handling all the arrangements seamlessly, "}/></SwiperSlide>
            <SwiperSlide><ComentsCards nome={"Matheus Miranda"} comentario={"I had a few hiccups during my trip, but the travel company’s support team was incredibly responsive and resolved the issues quickly. It's reassuring to know that they stand by their clients and provide excellent support even while you're traveling."}/></SwiperSlide>
            <SwiperSlide><ComentsCards nome={"Italo Miranda"} comentario={"I was impressed with the range of options this travel company offers. Whether you're looking for a luxurious getaway or a budget-friendly adventure, they have something for everyone. Their attention to detail and personalized service"}/></SwiperSlide>
        </Swiper>
    )
}