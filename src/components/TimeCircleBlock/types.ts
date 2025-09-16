import { Swiper as SwiperType } from 'swiper/types';

export interface EventItem {
  year: string;
  description: string;
}

export interface TimePeriodData {
  events: EventItem[];
}

export interface TimePeriod {
  title: string;
  data: TimePeriodData;
}

export interface TimePointData {
  id: number;
  hour: number;
  angle: number;
  isActive: boolean;
  angleChenge?: number;
  side?: 'left' | 'right';
  data: TimePeriod;
}

export interface TimePointWithPosition extends TimePointData {
  position: { x: number; y: number };
  side: 'left' | 'right';
}

export interface UseTimeCircleReturn {
  circleRef: React.RefObject<HTMLDivElement>;
  centerHour: number;
  isAnimating: boolean;
  currentRotation: number;
  timePoints: TimePointData[];
  pointPositions: TimePointWithPosition[];
  activeCategory: TimePointData | undefined;
  activeCategoryIndex: number;
  handlePointClick: (clickedPoint: TimePointData) => void;
  handlePrevCategory: () => void;
  handleNextCategory: () => void;
  swiperRef: React.MutableRefObject<SwiperType | null>;
}

export interface UseYearsAnimationReturn {
  displayedMinYear: number | null;
  displayedMaxYear: number | null;
  animateYearChange: (newMinYear: number, newMaxYear: number) => void;
}

export interface UseSwiperNavigationReturn {
  isBeginning: boolean;
  isEnd: boolean;
  isEventsVisible: boolean;
  swiperRef: React.MutableRefObject<SwiperType | null>;
  setIsEventsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  handlePrevSlide: () => void;
  handleNextSlide: () => void;
  setIsBeginning: React.Dispatch<React.SetStateAction<boolean>>;
  setIsEnd: React.Dispatch<React.SetStateAction<boolean>>;
}
