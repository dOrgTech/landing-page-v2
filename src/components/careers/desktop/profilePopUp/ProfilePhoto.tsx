import React from 'react'
import {Grid, styled} from '@material-ui/core'

const StyledGrid = styled(Grid)({
  width: "10.625vw",
  height: "11.4vw",
  background: 'transparent',
  boxSizing: 'border-box'
});

const StyledPhoto = styled('img')({
  width: "10.625vw",
  height: "11.4vw",
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