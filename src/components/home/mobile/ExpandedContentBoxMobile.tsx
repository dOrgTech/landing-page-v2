import React from 'react'
import {styled, Typography, Grid, makeStyles} from '@material-ui/core'
import {Project} from "../../../constants/clients";
import {theme} from "../../../theme";
import {ChipLargeMobile} from "../../careers/mobile/profile_popup/ChipLargeMobile";
import {BulletsBoxMobile} from "./BulletsBoxMobile";

const StyledGrid = styled(Grid)({
  height: 'max-content',
  width: '100%',
  padding: '8.5vw 4vw 4vw 4vw',
  position: 'relative'
});

const StyledDescription = styled(Typography)({
  marginBottom: '9.6vw',
  maxWidth: '81.25vw',
  fontFamily: theme.typography.fontFamily,
  fontSize: '3.57vw',
  fontWeight: 'normal',
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1.6,
  letterSpacing: '-0.45px',
  textAlign: "left",
  color: theme.palette.text.primary,
  zIndex: 1,
});

const BulletsContainer = styled(Grid)({
  marginBottom: '4.7vw',
  background: 'transparent',
  boxSizing: 'border-box',
  zIndex: 1,
});


const ChipContainer = styled(Grid)({
  background: 'transparent',
  boxSizing: 'border-box',
  zIndex: 1,
});

const useChipStyle = makeStyles({
  chip: {
    marginRight: '2.4vw',
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

export const ExpandedContentBoxMobile: React.FC<Props> = (props: Props) => {

  const chipStyle = useChipStyle();

  return (
    <StyledGrid className={props.classes} container spacing={0} direction='column' justify='flex-start' alignItems='flex-start'>
      <Grid item>
        <StyledDescription>{props.project.description}</StyledDescription>
      </Grid>
      {props.project.bullets.length > 0 &&
      <BulletsContainer item>
        <BulletsBoxMobile bullets={props.project.bullets } />
      </BulletsContainer>}
      <ChipContainer item container spacing={0} direction='row' justify='flex-start' alignItems='flex-start'>
        {props.project.technologies.map((technology: string, i: number) => (
          <Grid item key={`technology-${i}`}>
            <ChipLargeMobile classes={chipStyle.chip} text={technology} />
          </Grid>
        ))}
      </ChipContainer>
      <IllustrationView style={props.project?.illustration?.position}>
        {props.project?.illustration?.view}
      </IllustrationView>
    </StyledGrid>
  );
}