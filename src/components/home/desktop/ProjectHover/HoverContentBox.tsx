import React, {useEffect, useState} from 'react'
import {styled, Typography, Grid, makeStyles, Box} from '@material-ui/core'
import { theme } from "../../../../theme";
import {Project} from "../../../../constants/clients";
import {ChipLarge} from "../../../careers/desktop/profile_popup/ChipLarge";
import {BulletsBox} from "./BulletsBox";


const ScrollContainer = styled(Box)({
  height: '57.375vw',
  width: '42.5vw',
  position: 'relative',
  boxSizing: 'border-box',
  overflow: 'hidden'
})

const StyledGrid = styled(Grid)({
  height: '57.375vw',
  width: '42.5vw',
  padding: '3.5vw 2.5vw 0 4.375vw',
  boxSizing: 'border-box',
  position: 'relative'
});

const StyledTitle = styled(Typography)({
  fontFamily: theme.typography.fontFamily,
  fontSize: '3.875vw',
  fontWeight: 'bold',
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1,
  letterSpacing: 'normal',
  textAlign: "left",
  color: theme.palette.text.primary,
  zIndex: 1,
});

const StyledDescription = styled(Typography)({
  margin: '0.9vw 0 2vw 0',
  maxWidth: '35.625vw',
  fontFamily: theme.typography.fontFamily,
  fontSize: '0.938vw',
  fontWeight: 'normal',
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1.87,
  letterSpacing: 'normal',
  textAlign: "left",
  color: theme.palette.text.primary,
  zIndex: 1,
});

const ChipContainer = styled(Grid)({
  background: 'transparent',
  boxSizing: 'border-box',
  zIndex: 1,
});

const BulletsContainer = styled(Grid)({
  margin: '0.5vw 0 1.275vw 0',
  background: 'transparent',
  boxSizing: 'border-box',
  zIndex: 1,
});

const useChipStyle = makeStyles({
  chip: {
    marginRight: '0.625vw',
    backgroundColor: 'rgba(0, 0, 0, 0.2)'
  }
});

const IllustrationView = styled('div')({
  position: 'relative',
  zIndex: 0
})

interface Props {
  title: string;
  project: Project;
  classes?: string;
}

export const HoverContentBox: React.FC<Props> = (props: Props) => {

  const chipStyle = useChipStyle();

  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const y = document.body.getBoundingClientRect().top;
    const cutoff = window.innerWidth * 0.05;
    setOffset(Math.min(y + cutoff, 0));
  }, [offset, props.title])

  return (
    <ScrollContainer>
      <StyledGrid container spacing={0} direction='column' justify='flex-start' alignItems='flex-start'
        className={props.classes} style={{bottom: offset}}>
        <Grid item>
          <StyledTitle>{props.title}</StyledTitle>
        </Grid>
        <Grid item>
          <StyledDescription>{props.project.description}</StyledDescription>
        </Grid>
        {props.project.bullets.length > 0 &&
        <BulletsContainer item>
          <BulletsBox bullets={props.project.bullets } />
        </BulletsContainer>}
        <ChipContainer item container spacing={0} direction='row' justify='flex-start' alignItems='flex-start'>
          {props.project.technologies.map((technology: string, i: number) => (
            <Grid item key={`technology-${i}`}>
              <ChipLarge classes={chipStyle.chip} text={technology} />
            </Grid>
          ))}
        </ChipContainer>
        <IllustrationView style={props.project?.illustration?.position}>
          {props.project?.illustration?.view}
        </IllustrationView>
      </StyledGrid>
    </ScrollContainer>
  );
}