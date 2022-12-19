import {Swiper, SwiperSlide} from "swiper/react";

import "./styles.css";
import {Mousewheel} from "swiper";

export default function App() {
    return (
        <>
            <Swiper
                modules={[Mousewheel]}
                direction={"vertical"}
                mousewheel={true}
                slidesPerView={1}
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>
        </>
    );
}
