import React from 'react'
import {Box, Grid, styled} from '@material-ui/core'
import {Member} from "../../../../constants/members";
import {ProfileSummary} from "./ProfileSummary";
import {CustomScrollbar} from "../../../CustomScrollbar";


const SlideShow = styled(Box)({
  width: '100vw',
  height: '25vw',
  background: 'transparent',
  boxSizing: 'border-box',
  overflow: 'visible',
  position: 'relative',
  left: '-7.5vw'
});

const ProfileContainer = styled(Grid)({
  height: 'inherit',
  background: 'transparent',
  boxSizing: 'border-box',
  position: 'absolute',
  left: 0,
  top: 0,
  zIndex: 1,
});

const ProfileItem = styled(Grid)({
  marginRight: '1.25vw'
});

const OverlayLeft = styled('div')({
  height: '25vw',
  width: '9.475vw',
  backgroundImage: 'linear-gradient(to right, #000e3c 5%, rgba(0, 14, 62, 0.6) 51%, rgba(0, 16, 71, 0) 95%)',
  position: 'absolute',
  left: '-0.1vw',
  top: 0,
  zIndex: 1
});

const OverlayRight = styled('div')({
  height: '25vw',
  width: '9.475vw',
  backgroundImage: 'linear-gradient(to left, #000e3c 5%, rgba(0, 14, 62, 0.6) 51%, rgba(0, 16, 71, 0) 95%)',
  position: 'absolute',
  right: '-0.1vw',
  top: 0,
  zIndex: 1
});


interface Props {
  members: Member[];
  classes?: string;
}

export const ProfileWheel: React.FC<Props> = (props: Props) => {

  return (
    <SlideShow className={props.classes} style={{overflow: 'hidden'}}>
      <CustomScrollbar style={{width: '100vw', height: '26.25vw'}} noScrollY>
        <SlideShow>
          <ProfileContainer container direction={'column'} spacing={0} justify={'flex-start'} alignItems={'center'}>
            {props.members.map((member: Member, i: number) => (
              <ProfileItem item key={`profile-${i}`}>
                <ProfileSummary member={member} />
              </ProfileItem>
            ))}
          </ProfileContainer>
        </SlideShow>
      </CustomScrollbar>
      <OverlayLeft />
      <OverlayRight />
    </SlideShow>
  );
}