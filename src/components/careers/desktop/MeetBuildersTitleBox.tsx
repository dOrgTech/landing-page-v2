import React from 'react'
import {Grid, styled, Typography,} from '@material-ui/core'
import { theme } from "../../../theme";


const StyledGrid = styled(Grid)({
  width: '100%',
  height: '15.5vw',
  padding: '7.5vw 0 0 0',
  background: 'transparent',
  boxSizing: 'border-box',
  position: 'relative'
});

const StyledText = styled(Typography)({
  fontFamily: theme.typography.fontFamily,
  fontSize: '2.625vw',
  fontWeight: 600,
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1,
  letterSpacing: '-1.26px',
  textAlign: "center",
  color: theme.palette.text.primary
});

interface Props {
  text: string;
  classes?: string;
}

export const MeetBuildersTitleBox: React.FC<Props> = (props: Props) => {
  return (
    <StyledGrid className={props.classes} container direction={'column'} spacing={0} justify={'flex-start'} alignItems={'center'}>
      <Grid item>
        <StyledText>{props.text}</StyledText>
      </Grid>
    </StyledGrid>
  );
}