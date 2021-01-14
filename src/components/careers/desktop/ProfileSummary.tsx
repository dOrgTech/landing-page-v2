import React from 'react'
import {
  styled,
  Typography,
  Grid,
  makeStyles,
  Modal
} from '@material-ui/core'
import { theme } from "../../../theme";
import {Member} from "../../../Utils/networkUtils";
import {ChipSmall} from "./ChipSmall";
import {PortfolioButton} from "./PortfolioButton";
import {ProfileFull} from "./profilePopUp/ProfileFull";

const BUTTON_TEXT = 'PORTFOLIO';

const StyledGrid = styled(Grid)({
  width: '18.75vw',
  height: '25vw',
  padding: '2.3vw 1.6vw 1.4vw 1.6vw',
  backgroundColor: 'rgba(0, 0, 0, 0.15)',
  boxSizing: 'border-box'
});

const StyledPhoto = styled('img')({
  width: "7.5vw",
  height: "7.5vw",
  objectFit: "contain",
  borderRadius: '75px'
});

const StyledName = styled(Typography)({
  marginTop: '0.6vw',
  fontFamily: theme.typography.fontFamily,
  fontSize: '1vw',
  fontWeight: 'bold',
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1.75,
  letterSpacing: '-0.48px',
  textAlign: "center",
  color: theme.palette.text.primary
});

const ChipContainer = styled(Grid)({
  width: '100%',
  height: '5.5vw',
  marginTop: '2vw',
  background: 'transparent',
  boxSizing: 'border-box'
});

const useChipStyle = makeStyles({
  chip: {
    margin: '0.15vw'
  }
});

const ButtonContainer = styled(Grid)({
  marginTop: '1.5vw'
})

interface Props {
  member: Member;
  classes?: string;
}

export const ProfileSummary: React.FC<Props> = (props: Props) => {

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const chipStyle = useChipStyle();

  return (
    <StyledGrid className={props.classes} container spacing={0} direction='column' justify='flex-start' alignItems='center'>
      <Grid item>
        <StyledPhoto src={props.member.photo} alt={props.member.name + 'photo'} />
      </Grid>
      <Grid item>
        <StyledName>{props.member.name}</StyledName>
      </Grid>
      <ChipContainer item container spacing={0} direction='row' justify='center' alignItems='flex-start'>
        {props.member.specializations.map((specialization: string, i: number) => (
          <Grid item key={`specialization-${i}`}>
            <ChipSmall classes={chipStyle.chip} text={specialization} />
          </Grid>
        ))}
        {props.member.technologies.map((technology: string, i: number) => (
          <Grid item key={`technology-${i}`}>
            <ChipSmall classes={chipStyle.chip} text={technology} />
          </Grid>
        ))}
      </ChipContainer>
      <ButtonContainer item>
        <PortfolioButton text={BUTTON_TEXT} handleClick={handleClickOpen} />
        <Modal open={open} aria-labelledby={`full profile of ${props.member.name}`} aria-describedby="full member profile">
          <div>
            <ProfileFull member={props.member} onClose={handleClose} />
          </div>
        </Modal>

      </ButtonContainer>
    </StyledGrid>
  );
}