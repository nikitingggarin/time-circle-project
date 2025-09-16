import { useState, useRef, useCallback, useEffect } from 'react';
import gsap from 'gsap';
import { UseYearsAnimationReturn, TimePointData } from '../types';
import { timePointsData } from '../constants';

export const useYearsAnimation = (): UseYearsAnimationReturn => {
  const [displayedMinYear, setDisplayedMinYear] = useState<number | null>(null);
  const [displayedMaxYear, setDisplayedMaxYear] = useState<number | null>(null);
  const yearAnimationRef = useRef<gsap.core.Tween | null>(null);

  const getMinMaxYears = useCallback((events: any[]): { minYear: number | null; maxYear: number | null } => {
    if (events.length === 0) return { minYear: null, maxYear: null };
    
    const years = events.map(event => parseInt(event.year));
    const minYear = Math.min(...years);
    const maxYear = Math.max(...years);
    
    return { minYear, maxYear };
  }, []);

  useEffect(() => {
    const activeCategory = timePointsData.find(point => point.isActive);
    if (activeCategory) {
      const { minYear, maxYear } = getMinMaxYears(activeCategory.data.data.events);
      setDisplayedMinYear(minYear);
      setDisplayedMaxYear(maxYear);
    }
  }, [getMinMaxYears]);

  const animateYearChange = useCallback((newMinYear: number, newMaxYear: number): void => {
    if (yearAnimationRef.current) {
      yearAnimationRef.current.kill();
    }
    
    const tempMinYear = { value: displayedMinYear || 0 };
    const tempMaxYear = { value: displayedMaxYear || 0 };

    yearAnimationRef.current = gsap.to([tempMinYear, tempMaxYear], {
      value: (index) => index === 0 ? newMinYear : newMaxYear,
      duration: 1,
      ease: "power2.out",
      onUpdate: () => {
        const currentMin = Math.floor(tempMinYear.value);
        if (currentMin !== displayedMinYear) {
          setDisplayedMinYear(currentMin);
        }
        const currentMax = Math.floor(tempMaxYear.value);
        if (currentMax !== displayedMaxYear) {
          setDisplayedMaxYear(currentMax);
        }
      },
      onComplete: () => {
        setDisplayedMinYear(newMinYear);
        setDisplayedMaxYear(newMaxYear);
        yearAnimationRef.current = null;
      }
    });
  }, [displayedMinYear, displayedMaxYear]);

  return {
    displayedMinYear,
    displayedMaxYear,
    animateYearChange
  };
};