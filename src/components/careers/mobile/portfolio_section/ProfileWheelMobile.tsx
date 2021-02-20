import React, {useEffect, useRef, useState} from 'react'
import {Box, Grid, styled} from '@material-ui/core'
import {Member} from "../../../../constants/members";
import {ProfileSummaryMobile} from "./ProfileSummaryMobile";
import {useDebounce, useWindowSize} from "../../../../utils/hooks";


const SlideShow = styled(Box)({
  width: '100vw',
  height: '95vw',
  background: 'transparent',
  boxSizing: 'border-box',
  overflow: 'hidden',
  position: 'relative',
  left: '-5vw',
});

const ProfileContainer = styled(Grid)({
  height: 'inherit',
  background: 'transparent',
  boxSizing: 'border-box',
  position: 'absolute',
  left: 0,
  top: 0,
  zIndex: 1,
  overflowX: 'scroll',
  overflowY: 'hidden',
  scrollbarColor: 'rgba(0, 0, 0, 0)',
  scrollbarWidth: 'none',
  '&::-webkit-scrollbar': {
    background: 'transparent',
    opacity: 0,
    width: 0,
    height: 0
  },
  '&::-webkit-scrollbar-track': {
    background: 'transparent',
    opacity: 0,
    width: 0,
    height: 0
  },
  '&::-webkit-scrollbar-thumb': {
    background: 'transparent',
    opacity: 0,
    width: 0,
    height: 0
  }
});

const ProfileItem = styled(Grid)({
  marginRight: '4.75vw'
});

const OverlayLeft = styled('div')({
  height: '95vw',
  width: '6.5vw',
  backgroundImage: 'linear-gradient(to right, #000e3c 5%, rgba(0, 14, 62, 0.6) 51%, rgba(0, 16, 71, 0) 95%)',
  position: 'absolute',
  left: '-0.1vw',
  top: 0,
  zIndex: 1,
  pointerEvents: 'none'
});

const OverlayRight = styled('div')({
  height: '95vw',
  width: '6.5vw',
  backgroundImage: 'linear-gradient(to left, #000e3c 5%, rgba(0, 14, 62, 0.6) 51%, rgba(0, 16, 71, 0) 95%)',
  position: 'absolute',
  right: '-0.1vw',
  top: 0,
  zIndex: 1,
  pointerEvents: 'none'
});

interface Props {
  members: Member[];
  classes?: string;
}

export const ProfileWheelMobile: React.FC<Props> = (props: Props) => {

  const [isScrolling, setIsScrolling] = useState(false);
  const [clientX, setClientX] = useState(0);
  const [scrollX, setScrollX] = useState(0);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [autoScroll, setAutoScroll] = useState<NodeJS.Timeout | null>(null);

  const windowSize = useWindowSize()
  const debouncedWindowSize = useDebounce(windowSize, 100);

  // detect attempt to drag scroll
  const handleMouseDown = (e: React.MouseEvent | MouseEvent, scrollbar: React.MutableRefObject<HTMLDivElement | null>) => {
    if (scrollbar.current) {
      setIsScrolling(true);
      setClientX(e.clientX);
    }
  }
  // stop drag scrolling
  const handleMouseUp = (e: React.MouseEvent | MouseEvent) => {
    setIsScrolling(false);
  }
  // calculate drag distance based on mouse movement
  const handleMouseMove = (e: React.MouseEvent | MouseEvent, scrollRef: React.MutableRefObject<HTMLDivElement | null>) => {
    const scrollbar = scrollRef.current;
    if (isScrolling && scrollbar) {
      const startScrollX = scrollbar.scrollLeft
      scrollbar.scrollLeft += 2 * (clientX - e.clientX);
      setClientX(e.clientX)
      // give appearance of infinite scroll
      if (scrollbar.scrollLeft === scrollbar.scrollWidth - debouncedWindowSize.width && startScrollX < scrollbar.scrollLeft) {
        scrollbar.scrollLeft = 0;
      } else if (scrollbar.scrollLeft === 0 && startScrollX > scrollbar.scrollLeft) {
        scrollbar.scrollLeft = scrollbar.scrollWidth;
      }
      setScrollX(scrollbar.scrollLeft);
    }
  }
  // handle normal scrolling
  const handleScroll = (e: React.UIEvent, scrollRef: React.MutableRefObject<HTMLDivElement | null>) => {
    const scrollbar = scrollRef.current;
    if (scrollbar) {
      // give appearance of infinite scroll
      if (scrollbar.scrollLeft === scrollbar.scrollWidth - debouncedWindowSize.width && scrollX < scrollbar.scrollLeft) {
        scrollbar.scrollLeft = 0;
      } else if (scrollbar.scrollLeft === 0 && scrollX > scrollbar.scrollLeft) {
        scrollbar.scrollLeft = scrollbar.scrollWidth;
      }
      setScrollX(scrollbar.scrollLeft);
    }
  }
  // start automatically scrolling (slide show behavior)
  const startAutoScroll = () => {
    const scrollbar = scrollRef.current;
    setAutoScroll(setInterval(() => {
      if (scrollbar) {
        scrollbar.scrollLeft += 1;
        // give appearance of infinite scroll
        if (scrollbar.scrollLeft === scrollbar.scrollWidth - window.innerWidth) {
          scrollbar.scrollLeft = 0;
        }
        setScrollX(scrollbar.scrollLeft);
      }
    }, 15));
  }
  // get scroll started at page load
  useEffect(() => startAutoScroll(), [])
  // turn off auto scroll if mouse over
  const handleMouseEnter = (e: React.MouseEvent | MouseEvent,) => {
    if (autoScroll) {
      clearInterval(autoScroll);
      setAutoScroll(null);
    }
  }
  // start auto scroll if mouse leaves
  const handleMouseLeave = (e: React.MouseEvent | MouseEvent,) => startAutoScroll();


  return (
    <SlideShow className={props.classes} style={{overflow: 'hidden'}}>
      <ProfileContainer container direction={'column'} spacing={0} justify={'flex-start'} alignItems={'center'}
        ref={scrollRef}
        onMouseDown={e => handleMouseDown(e, scrollRef)}
        onMouseUp={handleMouseUp}
        onMouseMove={e => handleMouseMove(e, scrollRef)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onScroll={e => handleScroll(e, scrollRef)}>
        {props.members.map((member: Member, i: number) => (
          <ProfileItem item key={`profile-${i}`}>
            <ProfileSummaryMobile member={member} />
          </ProfileItem>
        ))}
      </ProfileContainer>
      <OverlayLeft />
      <OverlayRight />
    </SlideShow>
  );
}