import React from 'react'
import {Box, Grid, makeStyles, styled} from '@material-ui/core'
import {Member} from "../../../../constants/members";
import {ProfileSummary} from "./ProfileSummary";


const SlideShow = styled(Box)({
  width: '100%',
  height: '25vw',
  background: 'transparent',
  boxSizing: 'border-box',
  overflow: 'visible',
  position: 'relative'
});

const ProfileContainer = styled(Grid)({
  height: 'inherit',
  background: 'transparent',
  boxSizing: 'border-box',
  position: 'absolute',
  left: 0,
  top: 0,
  transform: 'translate3d(0, 0, 0)',
  zIndex: 1
});

const ProfileItem = styled(Grid)({
  marginRight: '1.25vw'
});


interface Props {
  members: Member[];
  classes?: string;
}

export const ProfileWheel: React.FC<Props> = (props: Props) => {

  const useSlideAnimation = makeStyles(theme => ({
    '@keyframes moveLeft': {
      '100%': {
        'transform': `translateX(-${20*props.members.length-20}%)`
      }
    },
    animateLeft: {
      animation: `$moveLeft ${2*props.members.length}s linear infinite`,
      '&:hover': {
        animationPlayState: 'paused'
      }
    }
  }));
  const slideAnimation = useSlideAnimation();

  return (
    <SlideShow className={props.classes}>
      <ProfileContainer className={slideAnimation.animateLeft} container direction={'column'} spacing={0} justify={'flex-start'} alignItems={'center'}>
        {props.members.map((member: Member, i: number) => (
          <ProfileItem item key={`profile-${i}`}>
            <ProfileSummary member={member} />
          </ProfileItem>
        ))}
      </ProfileContainer>
    </SlideShow>
  );
}