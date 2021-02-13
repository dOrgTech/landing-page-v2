import React from 'react'
import {
  styled,
  Typography,
  Grid,
  makeStyles,
  Modal
} from '@material-ui/core'
import { theme } from "../../../../theme";
import {Member} from "../../../../constants/members";
import {ChipSmallMobile} from "../ChipSmallMobile";
import {PortfolioButtonMobile} from "./PortfolioButtonMobile";
import {ProfileFullMobile} from "../profile_popup/ProfileFullMobile";

const BUTTON_TEXT = 'PORTFOLIO';

const StyledGrid = styled(Grid)({
  width: '71.4vw',
  height: '95vw',
  padding: '7.5vw 6.1vw 5.3vw 6.1vw',
  backgroundColor: '#000e3c',
  boxSizing: 'border-box'
});

const StyledPhoto = styled('img')({
  width: "28.5vw",
  height: "28.5vw",
  objectFit: "contain",
  borderRadius: '75px'
});

const StyledName = styled(Typography)({
  marginTop: '2.28vw',
  fontFamily: theme.typography.fontFamily,
  fontSize: '3.8vw',
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
  height: '20.9vw',
  marginTop: '7.5vw',
  background: 'transparent',
  boxSizing: 'border-box'
});

const useChipStyle = makeStyles({
  chip: {
    margin: '0.57vw'
  }
});

const ButtonContainer = styled(Grid)({
  marginTop: '5.7vw'
})

const useModalStyle = makeStyles({
  scrollable: {
    overflow: 'scroll'
  }
});

interface Props {
  member: Member;
  classes?: string;
}

export const ProfileSummaryMobile: React.FC<Props> = (props: Props) => {

  const photo = props.member.photo ? props.member.photo : 'imgs/logos/dorg-logo-black-background.png';

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const chipStyle = useChipStyle();
  const modalStyle = useModalStyle();

  return (
    <StyledGrid className={props.classes} container spacing={0} direction='column' justify='flex-start' alignItems='center'>
      <Grid item>
        <StyledPhoto src={photo} alt={props.member.name + 'photo'} />
      </Grid>
      <Grid item>
        <StyledName>{props.member.name}</StyledName>
      </Grid>
      <ChipContainer item container spacing={0} direction='row' justify='center' alignItems='flex-start'>
        {props.member.skills.map((specialization: string, i: number) => (
          <Grid item key={`skill-${i}`}>
            <ChipSmallMobile classes={chipStyle.chip} text={specialization} />
          </Grid>
        ))}
      </ChipContainer>
      <ButtonContainer item>
        <PortfolioButtonMobile text={BUTTON_TEXT} handleClick={handleClickOpen} />
        <Modal
          className={modalStyle.scrollable}
          open={open}
          aria-labelledby={`full profile of ${props.member.name}`}
          aria-describedby="full member profile">
          <div>
            <ProfileFullMobile member={props.member} onClose={handleClose} />
          </div>
        </Modal>
      </ButtonContainer>
    </StyledGrid>
  );
}