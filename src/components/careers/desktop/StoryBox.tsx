import React from 'react'
import {styled, Typography, Grid} from '@material-ui/core'
import { theme } from "../../../theme";
import {hexToRGBA} from "../../../utils/colorUtils";


const StyledGrid = styled(Grid)({
  width: '42.5vw',
  height: '30vw',
  padding: '1.5vw 3vw',
  boxSizing: 'border-box',
  backgroundColor: 'rgba(0, 0, 0, 0.15)',
  '&:hover': {
    backgroundColor: hexToRGBA(theme.palette.secondary.main, 0.15)
  }
});

const StyledText= styled(Typography)({
  fontFamily: theme.typography.fontFamily,
  fontSize: '1.3vw',
  fontWeight: 'normal',
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1.87,
  letterSpacing: 'normal',
  textAlign: "left",
  color: theme.palette.text.primary,
  whiteSpace: 'pre-wrap',
});

const GreenStrong = styled('strong')({
  color: theme.palette.secondary.main
});

const dOrgStory = (
  <div>
    dOrg spawned at the start of 2019 as an <GreenStrong>experiment in distributed organization</GreenStrong>.
    <br/><br/>
    Its genetic code is simple:
    <ol style={{margin: 0}}>
      <li>Build tools that advance Web3</li>
      <li>Use Web3 to operate</li>
      <li>Mutate and propagate</li>
    </ol>
    <br/>
    Since then we&apos;ve pioneered governance, legal, and incentive structures that combine
    the <GreenStrong>freedoms of freelancing</GreenStrong> with the <GreenStrong>power of peer support</GreenStrong>.
  </div>
)

interface Props {
  classes?: string;
}

export const StoryBox: React.FC<Props> = (props: Props) => {

  return (
    <StyledGrid className={props.classes} container direction={'row'} spacing={0} justify={'center'} alignItems={'center'}>
      <Grid item>
        <StyledText>{dOrgStory}</StyledText>
      </Grid>
    </StyledGrid>
  );
}