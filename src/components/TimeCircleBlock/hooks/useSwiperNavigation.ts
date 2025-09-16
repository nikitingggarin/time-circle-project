import { useState, useRef } from 'react';
import { Swiper as SwiperType } from 'swiper/types';
import { UseSwiperNavigationReturn } from '../types';

export const useSwiperNavigation = (): UseSwiperNavigationReturn => {
  const [isBeginning, setIsBeginning] = useState<boolean>(true);
  const [isEnd, setIsEnd] = useState<boolean>(false);
  const [isEventsVisible, setIsEventsVisible] = useState<boolean>(true);
  const swiperRef = useRef<SwiperType | null>(null);

  const handlePrevSlide = (): void => {
    if (swiperRef.current && !swiperRef.current.isBeginning) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNextSlide = (): void => {
    if (swiperRef.current && !swiperRef.current.isEnd) {
      swiperRef.current.slideNext();
    }
  };

  return {
    isBeginning,
    isEnd,
    isEventsVisible,
    swiperRef,
    setIsEventsVisible,
    handlePrevSlide,
    handleNextSlide,
    setIsBeginning,
    setIsEnd
  };
};