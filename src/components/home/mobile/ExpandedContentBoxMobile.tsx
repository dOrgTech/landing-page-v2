import React from 'react'
import {styled, Typography, Grid, makeStyles} from '@material-ui/core'
import {Client} from "../../../constants/clients";
import {theme} from "../../../theme";
import {ChipLargeMobile} from "../../careers/mobile/profile_popup/ChipLargeMobile";
import {BulletsBoxMobile} from "./BulletsBoxMobile";
import {ProjectGraphic} from "../desktop/ProjectHover/ProjectGraphic";

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
    marginBottom: '2.4vw',
    backgroundColor: 'rgba(0, 0, 0, 0.2)'
  }
});

interface Props {
  client: Client
  classes?: string;
}

export const ExpandedContentBoxMobile: React.FC<Props> = (props: Props) => {

  const classes = props.classes ? props.classes : '';
  const { iconHighlightFilter, textColor, textColorFilter, project } = props.client;

  const styles = makeStyles({
    icon: {
      filter: textColorFilter ? textColorFilter : ''
    },
    text: {
      color: textColor ? textColor : theme.palette.text.primary
    },
    graphicSpace: {
      paddingBottom: project.imageSrc ? '21vh' : '4vw'
    }
  })();
  const chipStyle = useChipStyle();

  return (
    <StyledGrid container spacing={0} direction='column' justify='flex-start' alignItems='flex-start'
      className={`${classes} ${styles.graphicSpace}`} >
      <Grid item>
        <StyledDescription className={styles.text}>{project.description}</StyledDescription>
      </Grid>
      {project.bullets.length > 0 &&
      <BulletsContainer item>
        <BulletsBoxMobile bullets={project.bullets} textColor={textColor} iconColorFilter={iconHighlightFilter ? iconHighlightFilter : textColorFilter} />
      </BulletsContainer>}
      <ChipContainer item container spacing={0} direction='row' justify='flex-start' alignItems='flex-start'>
        {project.technologies.map((technology: string, i: number) => (
          <Grid item key={`technology-${i}`}>
            <ChipLargeMobile classes={chipStyle.chip} text={technology} textColor={textColor}/>
          </Grid>
        ))}
      </ChipContainer>
      {project.imageSrc &&
      <ProjectGraphic item src={project.imageSrc} />}
    </StyledGrid>
  );
}