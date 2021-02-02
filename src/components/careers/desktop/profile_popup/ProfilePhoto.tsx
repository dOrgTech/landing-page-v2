import React from 'react'
import {Grid, styled} from '@material-ui/core'

const StyledGrid = styled(Grid)({
  width: "19.8vh",
  height: "21.25vh",
  background: 'transparent',
  boxSizing: 'border-box'
});

const StyledPhoto = styled('img')({
  width: "inherit",
  height: "inherit",
  objectFit: "contain",
  borderRadius: '5px'
});

interface Props {
  photo: string;
  classes?: string;
}

export const ProfilePhoto: React.FC<Props> = (props: Props) => {
  return (
    <StyledGrid className={props.classes} container justify='center'>
      <StyledPhoto src={props.photo} alt={'photo of member'} />
    </StyledGrid>
  );
}