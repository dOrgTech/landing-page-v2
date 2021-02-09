import React from 'react'
import {Grid, makeStyles, styled, Typography,} from '@material-ui/core'
import { theme } from "../../../theme";
import {FadeInOutAnimation} from "../../FadeInOutAnimation";


const StyledGrid = styled(Grid)({
  width: '100%',
  height: '45.25vw',
  padding: '6.4vw 3.6vw',
  boxSizing: 'border-box',
  background: theme.palette.primary.main
});

const TitleTextPrimary = styled(Typography)({
  fontFamily: theme.typography.fontFamily,
  fontSize: '6.67vw',
  fontWeight: 'bold',
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1,
  letterSpacing: '-0.84px',
  textAlign: "left",
  color: theme.palette.text.primary
});

const SubtitleText = styled(Typography)({
  marginTop: '3.6vw',
  fontFamily: theme.typography.fontFamily,
  fontSize: '3.33vw',
  fontWeight: 'bold',
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1.71,
  letterSpacing: 'normal',
  textAlign: "left",
  color: theme.palette.text.primary
});

interface Props {
  titleTextPrimary: string;
  titleTextSecondary: string[];
  subTitleText: string;
  classes?: string;
}

export const HomeTitleBoxMobile: React.FC<Props> = (props: Props) => {

  const styles = makeStyles({
    textSecondary: {
      marginTop: '0.967vw',
      fontFamily: theme.typography.fontFamily,
      fontSize: '6.67vw',
      fontWeight: 'bold',
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: 1,
      letterSpacing: '-0.84px',
      textAlign: "left",
      color: theme.palette.text.secondary
    }
  })();

  return (
    <StyledGrid className={props.classes} container direction={'column'} spacing={0} justify={'flex-start'} alignItems={'flex-start'}>
      <Grid item>
        <TitleTextPrimary>{props.titleTextPrimary}</TitleTextPrimary>
      </Grid>
      <Grid item>
        <FadeInOutAnimation noSpace textSecondary={props.titleTextSecondary} textClasses={styles.textSecondary} />
      </Grid>
      <Grid item>
        <SubtitleText>{props.subTitleText}</SubtitleText>
      </Grid>
    </StyledGrid>
  );
}