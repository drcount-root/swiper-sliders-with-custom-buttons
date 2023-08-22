import { useSwiper } from "swiper/react";

export const SwiperNavButtons = ({ currentSlideIndex }: any) => {
  const swiper = useSwiper();

  return (
    <div className="swiper-nav-btns">
      <button
        onClick={() => {
          swiper.slidePrev();
          console.log("Prev clicked, current index => ", currentSlideIndex);
        }}
        disabled={currentSlideIndex === 0}
        style={{
          cursor: `${currentSlideIndex === 0 ? "not-allowed" : "pointer"}`,
          backgroundColor: `${currentSlideIndex === 0 ? "gray" : "blue"}`,
        }}
      >
        Prev
      </button>
      <button
        onClick={() => {
          swiper.slideNext();
          console.log("Next clicked, current index => ", currentSlideIndex);
        }}
        disabled={currentSlideIndex === 4}
        style={{
          cursor: `${currentSlideIndex === 4 ? "not-allowed" : "pointer"}`,
          backgroundColor: `${currentSlideIndex === 4 ? "gray" : "blue"}`,
        }}
      >
        Next
      </button>
    </div>
  );
};
