import React from 'react'
import {styled} from '@material-ui/core'

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
    <StyledPhoto className={props.classes} src={props.photo} alt={'photo of member'} />
  );
}