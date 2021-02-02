import React from 'react'
import {styled, Typography, Grid, makeStyles} from '@material-ui/core'
import {theme} from "../../../../theme";

const StyledGrid = styled(Grid)({
  width: '36vw',
  background: 'transparent',
  boxSizing: 'border-box'
});

const ListItem = styled(Grid)({
  width: '36vw',
  marginBottom: '1.6vw'
});

const StyledIcon = styled('img')({
  width: "0.93vw",
  height: "0.93vw",
  marginRight: '1.7vw',
  objectFit: "contain",
  float: 'left'
});

const BulletText = styled(Typography)({
  fontFamily: theme.typography.fontFamily,
  fontSize: '0.938vw',
  fontWeight: 'bold',
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1,
  letterSpacing: 'normal',
  textAlign: "left",
  color: theme.palette.text.primary
});

interface Props {
  bullets: string[];
  textColor?: string;
  iconColorFilter?: string;
  classes?: string;
}

export const BulletsBox: React.FC<Props> = (props: Props) => {

  const styles = makeStyles({
    icon: {
      filter: props.iconColorFilter ? props.iconColorFilter : ''
    },
    text: {
      color: props.textColor ? props.textColor : theme.palette.text.primary
    }
  })();

  return (
    <StyledGrid className={props.classes} container spacing={0} direction='column' justify='flex-start' alignItems='flex-start'>
      {props.bullets.map((bullet: string, i: number) => (
        <ListItem item key={`bullet-${i}`}>
          <StyledIcon src={'imgs/check-circle.svg'} alt='circled check mark icon' className={styles.icon}/>
          <BulletText className={styles.text}>{bullet}</BulletText>
        </ListItem>
      ))}
    </StyledGrid>
  );
}