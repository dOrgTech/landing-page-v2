import React from 'react'
import {Box, ClickAwayListener, Grid, makeStyles, Modal, styled} from '@material-ui/core'
import {Member} from "../../../../constants/members";
import {ProfileSummary} from "./ProfileSummary";
import {ProfileFull} from "../profile_popup/ProfileFull";


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

const OverlayLeft = styled('div')({
  height: '25vw',
  width: '9.375vw',
  backgroundImage: 'linear-gradient(to right, #000e3c 5%, rgba(0, 14, 62, 0.6) 51%, rgba(0, 16, 71, 0) 95%)',
  position: 'absolute',
  left: '-7.5vw',
  zIndex: 1
});

const OverlayRight = styled('div')({
  height: '25vw',
  width: '9.375vw',
  backgroundImage: 'linear-gradient(to left, #000e3c 5%, rgba(0, 14, 62, 0.6) 51%, rgba(0, 16, 71, 0) 95%)',
  position: 'absolute',
  right: '-7.5vw',
  zIndex: 1
});


interface Props {
  members: Member[];
  classes?: string;
}

export const ProfileWheel: React.FC<Props> = (props: Props) => {

  const [open, setOpen] = React.useState(false);
  const [member, setMember] = React.useState<Member>(props.members[0]);
  const handleClickOpen = (member: Member) => {
    setMember(member);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

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
            <ProfileSummary member={member} onClickOpen={handleClickOpen}/>
          </ProfileItem>
        ))}
      </ProfileContainer>
      <OverlayLeft />
      <OverlayRight />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby={'full profile of selected member'}
        aria-describedby="full member profile">
        <ClickAwayListener onClickAway={handleClose}>
          <ProfileFull member={member} onClose={handleClose} />
        </ClickAwayListener>
      </Modal>
    </SlideShow>
  );
}