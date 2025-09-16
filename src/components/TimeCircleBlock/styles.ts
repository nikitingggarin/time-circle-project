import styled from 'styled-components';

export const PageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'PT Sans', sans-serif;
  background-color: #F4F5F9;
  position: relative;
  overflow: hidden;
`;

export const Container = styled.div`
  width: 1440px;
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-left: 1px solid #E0E3EA;
  border-right: 1px solid #E0E3EA;
`;

export const GradientLine = styled.div`
  position: absolute;
  top: 177px;
  left: 0;
  width: 5px;
  height: 120px;
  background: linear-gradient(to bottom, #3877EE, #EF5DA8);
  z-index: 3;
`;

export const HistoricalDatesText = styled.div`
  position: absolute;
  top: 169px;
  left: 76px;
  font-family: 'PT Sans', sans-serif;
  font-weight: 700;
  font-size: 56px;
  line-height: 1.2;
  color: #42567A;
  z-index: 23;
  max-width: 300px;
`;

export const CrosshairVertical = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  width: 1px;
  height: 100vh;
  background: #E0E3EA;
  transform: translateX(-50%);
`;

export const CrosshairHorizontal = styled.div`
  position: absolute;
  left: 0;
  top: 50%;
  width: 1440px;
  height: 1px;
  background: #E0E3EA;
  transform: translateY(-50%);
`;

export const YearsContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 973px;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  pointer-events: none;
`;

export const Year = styled.div<{ color: string }>`
  font-family: 'PT Sans', sans-serif;
  font-weight: 700;
  font-size: 200px;
  line-height: 1;
  color: ${props => props.color};
  transition: opacity 0.3s ease;
`;

export const RotatableCircle = styled.div`
  width: 530px;
  height: 530px;
  position: relative;
  transform-origin: center;
  will-change: transform;
  z-index: 10;
`;

export const MainCircle = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid #D0D5E0;
  border-radius: 50%;
  background: transparent;
  position: relative;
  z-index: 2;
`;

export const TimePoint = styled.div<{ x: number; y: number; $isActive: boolean; $isHoverable: boolean }>`
  position: absolute;
  width: ${props => props.$isActive ? '56px' : '6px'};
  height: ${props => props.$isActive ? '56px' : '6px'};
  background: ${props => props.$isActive ? undefined : '#42567A'};
  border: ${props => props.$isActive ? '1px solid #929AA9' : 'none'};
  border-radius: 50%;
  left: ${props => props.x}px;
  top: ${props => props.y}px;
  transform: translate(-50%, -50%);
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.$isActive ? '#F4F5F9' : undefined};
  cursor: ${props => props.$isHoverable ? 'pointer' : 'default'};
  user-select: none;
  transition: all 0.3s ease-in-out;
  transition-property: width, height, background-color, border, transform;
  will-change: width, height, background-color, border;
  backface-visibility: hidden;
  transform: translate3d(-50%, -50%, 0);
  ${props => props.$isHoverable && `
    &:hover {
      width: 56px;
      height: 56px;
      border: 1px solid #929AA9;
      background-color: #F4F5F9;
      transform: translate3d(-50%, -50%, 0) scale(1.05);
    }
  `}
  ${props => !props.$isActive && !props.$isHoverable && `
    transition: all 0.2s ease-out;
  `}
`;

export const PointNumber = styled.span<{ $isActive: boolean; $isHoverable: boolean; $rotation: number }>`
  font-family: 'PT Sans', sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;
  color: #42567A;
  opacity: ${props => props.$isActive ? 1 : 0};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(${props => -props.$rotation}deg);
  z-index: 4;
  
  ${props => props.$isHoverable && `
    ${TimePoint}:hover & {
      opacity: 1;
    }
  `}
`;

export const Title = styled.span<{ $isActive: boolean }>`
  font-family: 'PT Sans';
  font-size: 20px;
  font-weight: 600;
  line-height: 30px;
  color: #42567A;
  opacity: ${props => props.$isActive ? 1 : 0};
  position: absolute;
  margin-left: 40px;
`;

export const EventsContainer = styled.div<{ $isVisible: boolean }>`
  position: absolute;
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 1440px;
  padding: 0 80px;
  z-index: 15;
  opacity: ${props => props.$isVisible ? 1 : 0};
  transition: opacity 0.3s ease;
  pointer-events: ${props => props.$isVisible ? 'auto' : 'none'};
  
  &>div{
    cursor: grab;
    user-select: none;
  }
`;

export const CategoryNavigation = styled.div`
  position: absolute;
  left: 80px;
  bottom: calc(100px + 135px + 56px);
  display: flex;
  flex-direction: column;
  gap: 20px;
  z-index: 25;
`;

export const CategoryArrowButtonsWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

export const CategoryArrowButton = styled.button<{ direction: 'left' | 'right'; disabled?: boolean }>`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid #9BA5BA;
  background: inherit;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background: #FFFFFF;
  }
  
  &::after {
    content: '';
    width: 6.25px;
    height: 6.25px;
    border: solid #42567A;
    border-width: 0 2px 2px 0;
    transform: ${props => props.direction === 'left' ? 'rotate(135deg)' : 'rotate(-45deg)'};
  }
`;

export const EventSlide = styled.div`
  width: 320px;
  height: 135px;
  margin-right: 80px;
`;

export const EventYear = styled.div`
  font-family: 'Bebas Neue';
  font-weight: 400;
  font-size: 25px;
  line-height: 120%;
  color: #3877EE;
  margin-bottom: 10px;
`;

export const EventTitle = styled.div`
  font-family: 'PT Sans';
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  color: #42567A;
`;

export const NavigationButton = styled.button<{ $position: 'left' | 'right'; $isVisible: boolean }>`
  position: absolute;
  top: 50%;
  ${props => props.$position === 'left' ? 'left: 20px;' : 'right: 20px;'}
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 0px solid;
  background: #FFFFFF;
  cursor: ${props => props.$isVisible ? 'pointer' : 'not-allowed'};
  z-index: 16;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${props => props.$isVisible ? 1 : 0};
  pointer-events: ${props => props.$isVisible ? 'auto' : 'none'};
  transition: opacity 0.3s ease;
  
  &:hover {
    background: ${props => props.$isVisible ? '#F4F5F9' : '#FFFFFF'};
  }
  
  &::after {
    content: '';
    width: 6px;
    height: 6px;
    border: 2px solid #3877EE;
    border-width: 0 3px 3px 0;
    transform: ${props => props.$position === 'left' ? 'rotate(135deg)' : 'rotate(-45deg)'};
    opacity: ${props => props.$isVisible ? 1 : 0.3};
  }
`;