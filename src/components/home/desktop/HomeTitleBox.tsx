import React from 'react'
import {Grid, makeStyles, styled, Typography,} from '@material-ui/core'
import { theme } from "../../../theme";
import {FadeInOutAnimation} from "../../FadeInOutAnimation";


const StyledGrid = styled(Grid)({
  width: 'max-content',
  height: 'max-content',
  padding: '0 0.5vw',
  background: theme.palette.primary.main,
  boxSizing: 'border-box'
});

const TitleTextPrimary = styled(Typography)({
  fontFamily: theme.typography.fontFamily,
  fontSize: '1.75vw',
  fontWeight: 'bold',
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1,
  letterSpacing: '-0.84px',
  textAlign: "left",
  color: theme.palette.text.primary
});

const SubtitleText = styled(Typography)({
  marginTop: '0.813vw',
  fontFamily: theme.typography.fontFamily,
  fontSize: '0.875vw',
  fontWeight: 600,
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1,
  letterSpacing: 'normal',
  textAlign: "left",
  color: theme.palette.text.primary
});

interface Props {
  titleTextPrimary: string;
  titleTextSecondary: string[];
  subTitleText: string;
  titleColorPrimary?: string;
  titleColorSecondary?: string;
  background?: string;
  classes?: string;
}

export const HomeTitleBox: React.FC<Props> = (props: Props) => {

  const classes = props.classes ? props.classes : '';
  const styles = makeStyles({
    textPrimary: {
      color: props.titleColorPrimary ? props.titleColorPrimary : theme.palette.text.primary
    },
    textSecondary: {
      color: props.titleColorSecondary ? props.titleColorSecondary : theme.palette.text.secondary,
      fontFamily: theme.typography.fontFamily,
      fontSize: '1.75vw',
      fontWeight: 'bold',
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: 1,
      letterSpacing: '-0.84px',
      textAlign: "left",
    },
    container: {
      background: props.background ? props.background : theme.palette.primary.main
    }
  })();

  return (
    <StyledGrid container direction={'column'} spacing={0} justify={'flex-start'} alignItems={'flex-start'}
      className={`${classes} ${styles.container}`}>
      <Grid item container direction={'row'} spacing={0} justify={'flex-start'} alignItems={'flex-start'}>
        <Grid item>
          <TitleTextPrimary className={styles.textPrimary}>{props.titleTextPrimary}</TitleTextPrimary>
        </Grid>
        <Grid item>
          <FadeInOutAnimation background={props.background} textSecondary={props.titleTextSecondary} textClasses={styles.textSecondary} />
        </Grid>
      </Grid>
      <Grid item>
        <SubtitleText className={styles.textPrimary}>{props.subTitleText}</SubtitleText>
      </Grid>
    </StyledGrid>
  );
}