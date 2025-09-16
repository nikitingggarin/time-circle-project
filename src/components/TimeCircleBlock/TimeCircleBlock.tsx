import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Mousewheel } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper/types';
import 'swiper/css';
import 'swiper/css/navigation';

import {
  PageWrapper,
  Container,
  GradientLine,
  HistoricalDatesText,
  CrosshairVertical,
  CrosshairHorizontal,
  YearsContainer,
  Year,
  RotatableCircle,
  MainCircle,
  TimePoint,
  PointNumber,
  Title,
  EventsContainer,
  CategoryNavigation,
  CategoryArrowButton,
  EventSlide,
  EventYear,
  EventTitle,
  NavigationButton,
  CategoryArrowButtonsWrapper
} from './styles';

import { EventItem } from './types';
import { useYearsAnimation } from './hooks/useYearsAnimation';
import { useSwiperNavigation } from './hooks/useSwiperNavigation';
import { useTimeCircle } from './hooks/useTimeCircle';

export const TimeCircleBlock: React.FC = () => {
  const {
    displayedMinYear,
    displayedMaxYear,
    animateYearChange
  } = useYearsAnimation();

  const {
    isBeginning,
    isEnd,
    isEventsVisible,
    swiperRef,
    setIsEventsVisible,
    handlePrevSlide,
    handleNextSlide,
    setIsBeginning,
    setIsEnd
  } = useSwiperNavigation();

  const {
    circleRef,
    centerHour,
    isAnimating,
    currentRotation,
    pointPositions,
    activeCategory,
    handlePointClick,
    handlePrevCategory,
    handleNextCategory
  } = useTimeCircle(setIsEventsVisible, animateYearChange);

  const events: EventItem[] = activeCategory?.data.data.events || [];
console.log('activeCategory', activeCategory);

  return (
    <PageWrapper>
      <CrosshairVertical />
      <Container>
        <CrosshairHorizontal />
        <GradientLine /> 
        <HistoricalDatesText>
          Исторические<br />даты
        </HistoricalDatesText>
        <YearsContainer>
          {displayedMinYear !== null && <Year color="#5D5FEF">{displayedMinYear}</Year>}
          {displayedMaxYear !== null && <Year color="#EF5DA8">{displayedMaxYear}</Year>}
        </YearsContainer>

  
        
        <CategoryNavigation>
          <div style={{color:'#42567A'}}>{`${activeCategory.id}/06`}</div>
           <CategoryArrowButtonsWrapper>
          <CategoryArrowButton 
            direction="left" 
            onClick={handlePrevCategory}
            disabled={isAnimating}
          />
          <CategoryArrowButton 
            direction="right" 
            onClick={handleNextCategory}
            disabled={isAnimating}
          />
          </CategoryArrowButtonsWrapper>
        </CategoryNavigation>
 
        <RotatableCircle ref={circleRef}>
          <MainCircle>
            {pointPositions.map((point) => {
              const isHoverable = point.hour !== centerHour && !isAnimating;
              
              return (
                <TimePoint
                  key={point.id}
                  x={point.position.x}
                  y={point.position.y}
                  isActive={point.isActive}
                  isHoverable={isHoverable}
                  onClick={() => handlePointClick(point)}
                >
                  <PointNumber 
                    isActive={point.isActive} 
                    isHoverable={isHoverable}
                    rotation={currentRotation}
                  >
                    {point.id}  <Title isActive={point.isActive && !isAnimating}>{point.data.title}</Title>
                  </PointNumber>
                </TimePoint>
              );
            })}
          </MainCircle>
        </RotatableCircle>

        {activeCategory && (
          <EventsContainer isVisible={isEventsVisible}>
            <Swiper
              modules={[Navigation, Mousewheel]}
              navigation={false}
              mousewheel={true}
              slidesPerView={'auto'}
              spaceBetween={80}
              onSlideChange={(swiper: SwiperType) => {
                setIsBeginning(swiper.isBeginning);
                setIsEnd(swiper.isEnd);
              }}
              onSwiper={(swiper: SwiperType) => {
                swiperRef.current = swiper;
                setIsBeginning(swiper.isBeginning);
                setIsEnd(swiper.isEnd);
              }}
            >
              {events.map((event: EventItem, index: number) => (
                <SwiperSlide key={index} style={{ width: '320px' }}>
                  <EventSlide>
                    <EventYear>{event.year}</EventYear>
                    <EventTitle>{event.description}</EventTitle>
                  </EventSlide>
                </SwiperSlide>
              ))}
            </Swiper>

            <NavigationButton 
              position="left"
              isVisible={!isBeginning && isEventsVisible}
              onClick={handlePrevSlide}
            />
            <NavigationButton 
              position="right"
              isVisible={!isEnd && isEventsVisible}
              onClick={handleNextSlide}
            />
          </EventsContainer>
        )}
      </Container>
    </PageWrapper>
  );
};