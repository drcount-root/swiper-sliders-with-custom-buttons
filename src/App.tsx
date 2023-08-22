import { A11y, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperNavButtons } from "./components/SwiperNavButton";
import "./App.css";
import { useState } from "react";

function App() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  return (
    <div className="App">
      <h1>
        <Swiper
          onSlideChange={(swiper) => setCurrentSlideIndex(swiper.activeIndex)}
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={30}
          slidesPerView="auto"
        >
          <SwiperSlide className="res-slide" />
          <SwiperSlide className="res-slide" />
          <SwiperSlide className="res-slide" />
          <SwiperSlide className="res-slide" />
          <SwiperSlide className="res-slide" />
          <SwiperSlide className="res-slide" />
          <SwiperSlide className="res-slide" />
          <SwiperSlide className="res-slide" />
          <SwiperNavButtons currentSlideIndex={currentSlideIndex} />
        </Swiper>
      </h1>
    </div>
  );
}

export default App;
