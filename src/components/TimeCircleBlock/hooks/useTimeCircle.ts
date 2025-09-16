import { useState, useRef, useCallback, useMemo } from 'react';
import gsap from 'gsap';
import { UseTimeCircleReturn, TimePointData, TimePointWithPosition } from '../types';
import { timePointsData } from '../constants';
import { Swiper as SwiperType } from 'swiper/types';

const circleRadius = 265;
const centerX = 265;
const centerY = 265;

export const useTimeCircle = (
  setIsEventsVisible: (visible: boolean) => void,
  animateYearChange: (minYear: number, maxYear: number) => void
): UseTimeCircleReturn => {
  const circleRef = useRef<HTMLDivElement>(null);
  const [centerHour, setCenterHour] = useState<number>(13);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [currentRotation, setCurrentRotation] = useState<number>(0);
  const [timePoints, setTimePoints] = useState<TimePointData[]>(timePointsData);
  const swiperRef = useRef<SwiperType | null>(null);
  const getMinMaxYears = useCallback((events: any[]) => {
    if (events.length === 0) return { minYear: null, maxYear: null };
    
    const years = events.map((event: any) => parseInt(event.year));
    const minYear = Math.min(...years);
    const maxYear = Math.max(...years);
    
    return { minYear, maxYear };
  }, []);

  const calculatePointPosition = useCallback((angle: number): { x: number; y: number } => {
    const angleRad = (angle * Math.PI) / 180;
    const x = Math.ceil(centerX + circleRadius * Math.cos(angleRad));
    const y = Math.ceil(centerY + circleRadius * Math.sin(angleRad));
    return { x, y };
  }, []);

  const calculateRotationAngle = useCallback((clickedPointAngle: number): number => {
    switch(clickedPointAngle){
      case 300: return 0;
      case 0: return -60;
      case 60: return -120;
      case 120: return 180;
      case 180: return 120;
      case 240: return 60;
      default: return 0;
    }
  }, []);

  const handlePointClick = useCallback((clickedPoint: TimePointData): void => {
    if (clickedPoint.hour === centerHour || isAnimating) return;
    
    setIsAnimating(true);
    setIsEventsVisible(false);
    
    const rotationAngle = calculateRotationAngle(clickedPoint.angleChenge || 0);
    
    setTimePoints(prev => prev.map(point => ({
      ...point,
      isActive: point.hour === clickedPoint.hour,
    })));
    
    const { minYear: newMinYear, maxYear: newMaxYear } = getMinMaxYears(clickedPoint.data.data.events);
    if (newMinYear !== null && newMaxYear !== null) {
      animateYearChange(newMinYear, newMaxYear);
    }

    gsap.to(circleRef.current, {
      rotation: `+=${rotationAngle}`,
      duration: 1,
      ease: "power2.out",
      transformOrigin: "center",
      onUpdate: () => {
        const rotation = gsap.getProperty(circleRef.current, "rotation");
        setCurrentRotation(Math.ceil(Number(rotation)));
      },
      onComplete: () => {
        setTimePoints(prev => prev.map(point => ({
          ...point,
          angle: (point.angle + rotationAngle + 360 - rotationAngle) % 360,
          angleChenge: ((point.angleChenge || 0) + rotationAngle + 360) % 360,
        })));
        
        setCenterHour(clickedPoint.hour);
        setIsEventsVisible(true);
        setIsAnimating(false);
        if (swiperRef.current && !swiperRef.current.isBeginning) {
          swiperRef.current.slidePrev();
        }
      }
    });
  }, [centerHour, isAnimating, calculateRotationAngle, getMinMaxYears, animateYearChange, setIsEventsVisible]);

  const pointPositions: TimePointWithPosition[] = useMemo(() => {
    return timePoints.map(point => ({
      ...point,
      side: (point.angleChenge === 300 || point.angleChenge === 0 || point.angleChenge === 60) ? 'right' : 'left',
      position: calculatePointPosition(point.angle),
    }));
  }, [timePoints, calculatePointPosition]);

  const activeCategory = timePoints.find(point => point.isActive);
  const activeCategoryIndex: number = timePoints.findIndex(point => point.isActive);
  
  const handlePrevCategory = (): void => {
    if (isAnimating) return;
    const prevIndex = (activeCategoryIndex - 1 + timePoints.length) % timePoints.length;
    handlePointClick(timePoints[prevIndex]);
  };

  const handleNextCategory = (): void => {
    if (isAnimating) return;
    const nextIndex = (activeCategoryIndex + 1) % timePoints.length;
    handlePointClick(timePoints[nextIndex]);
  };

  return {
    circleRef,
    centerHour,
    isAnimating,
    currentRotation,
    timePoints,
    pointPositions,
    activeCategory,
    activeCategoryIndex,
    handlePointClick,
    handlePrevCategory,
    handleNextCategory,
    swiperRef
  };
};