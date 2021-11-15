import React from 'react'
import { useForm } from "react-hook-form";
import {ButtonBase, Grid, makeStyles, Snackbar, styled, TextField, Typography} from '@material-ui/core'
import { theme } from "../../../theme";
import {AccountCircleTwoTone, EmailTwoTone, RateReviewTwoTone} from '@material-ui/icons';
import {
  EMAIL_PATTERN,
  EMAIL_PLACEHOLDER,
  ERROR_EMAIL_REQUIRED,
  ERROR_EXCEEDS_LENGTH,
  ERROR_INVALID_EMAIL,
  ERROR_MESSAGE_REQUIRED,
  ERROR_NAME_REQUIRED,
  FAIL_TEXT,
  MAX_EMAIL_LENGTH,
  MAX_MESSAGE_LENGTH,
  MAX_NAME_LENGTH,
  MESSAGE_PLACEHOLDER,
  NAME_PLACEHOLDER,
  SUBMIT_BUTTON_IMG_PATH,
  SUCCESS_TEXT,
  TOAST_DURATION
} from "../../../constants/contactForm";
import {getSonarAnimation} from "../../../theme/styles";
import {sendContactForm} from "../../../utils/network";
import {useDebounce, useWindowSize} from "../../../utils/hooks";


const StyledGrid = styled(Grid)({
  margin: 'auto',
  width: '100%',
  height: `${window.innerHeight - (0.1 * window.innerWidth)}px`,
  background: theme.palette.secondary.main,
  boxSizing: 'border-box',
  position: 'relative',
});

const InputContainer = styled(Grid)({
  width: '34vw',
  height: '5vw',
  padding: '0.7vw 1.5vw',
  marginBottom: '1.875vw',
  boxSizing: 'border-box',
  boxShadow: '0 0.625vw 1.25vw 0 rgba(0, 0, 0, 0.16)',
  backgroundColor: '#FFFFFF',
  position: 'relative'
});

const StyledIconWrapper = styled(Grid)({
  width: '1.25vw',
  height: '3.6vw',
  paddingRight: '1.5vw',
  fontSize: '1.25vw',
  color: theme.palette.secondary.main,
  position: 'relative',
  top: '-0.2vw'
});

const StyledTextField = styled(TextField)({
  width: '29.5vw',
  height: '3.6vw',
  border: 'none',
  backgroundColor: '#FFFFFF',
  '& input.MuiInput-input': {
    fontFamily: theme.typography.fontFamily,
    fontSize: '0.938vw',
    fontWeight: 600,
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: 1.5,
    letterSpacing: '-0.45px',
    textAlign: "left",
    color: theme.palette.primary.main
  },
  '& label.MuiInputLabel-root': {
    fontFamily: theme.typography.fontFamily,
    fontSize: '0.938vw',
    fontWeight: 600,
    fontStretch: "normal",
    fontStyle: "normal",
    letterSpacing: '-0.45px',
    color: theme.palette.primary.main
  },
  '& label.Mui-focused': {
    fontSize: '0.8vw',
    fontWeight: 'normal',
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: theme.palette.text.secondary,
  }
});

const useLabelColors = makeStyles({
  primary: {
    '& label.MuiInputLabel-root': {
      color: theme.palette.primary.main
    },
    '& label.Mui-focused': {
      color: theme.palette.text.secondary,
    }
  },
  secondary: {
    '& label.MuiInputLabel-root': {
      color: theme.palette.text.secondary
    },
    '& label.Mui-focused': {
      color: theme.palette.text.secondary,
    }
  },
});

const StyledSubmitButton = styled(ButtonBase)({
  width: "5vw",
  height: "5vw",
  float: 'right',
  borderRadius: '50%',
});

const StyledSubmitIcon = styled('img')({
  objectFit: "contain",
  borderRadius: '50%',
  boxShadow: '0 0.625vw 1.25vw 0 rgba(0, 0, 0, 0.16)',
  '&:hover': {
    boxShadow: `0 0.625vw 1.25vw 0 rgba(0, 0, 0, 0.32)`,
  }
});

const StyledRings = styled('img')({
  width: '13.524vw',
  height: '13.683vw',
  objectFit: 'contain',
  transform: 'rotate(-90deg)',
  position: 'absolute',
  bottom: -1,
  left: 0
})
const useSonarAnimation= getSonarAnimation('22.5vw', 3);

const StyledError = styled(Typography)({
  fontFamily: theme.typography.fontFamily,
  fontSize: '0.8vw',
  fontWeight: 'normal',
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 'normal',
  letterSpacing: 'normal',
  color: 'red',
  position: 'absolute',
  bottom: 0,
  left: '3vw'
});

const useSuccessSnackBarStyle = makeStyles({
  root: {
    backgroundColor: theme.palette.primary.main,
    position: 'relative',
    right: '17.5vw',
    bottom: '7vw'
  },
  message: {
    width: '100%',
    textAlign: 'center',
    fontFamily: theme.typography.fontFamily,
    fontSize: '1vw',
    fontWeight: 600,
    fontStretch: "normal",
    fontStyle: "normal",
    letterSpacing: '-0.45px',
    color: theme.palette.text.secondary,
  },
});

const useFailureSnackBarStyle = makeStyles({
  root: {
    backgroundColor: '#FF1744',
    position: 'relative',
    right: '17.5vw',
    bottom: '7vw'
  },
  message: {
    width: '100%',
    textAlign: 'center',
    fontFamily: theme.typography.fontFamily,
    fontSize: '1vw',
    fontWeight: 600,
    fontStretch: "normal",
    fontStyle: "normal",
    letterSpacing: '-0.45px',
    color: theme.palette.text.primary,
  },
});


interface Props {
  classes?: string;
}

interface IFormInput {
  name: string;
  email: string;
  message: string;
}

export const ContactForm: React.FC<Props> = (props: Props) => {

  const sonarAnimation = useSonarAnimation();

  // FORM HOOK
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { register, errors, handleSubmit } = useForm<IFormInput>();
  const debouncedErrors = useDebounce(errors);

  // INPUT STATE HOOKS
  const [name, setName] = React.useState('');
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const [email, setEmail] = React.useState('');
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const [message, setMessage] = React.useState('');
  const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  // SUCCESS AND FAILURE MESSAGES
  const successSnackBarStyle = useSuccessSnackBarStyle();
  const failureSnackBarStyle = useFailureSnackBarStyle();
  const [successOpen, setSuccessOpen] = React.useState(false);
  const [failOpen, setFailOpen] = React.useState(false);
  const handleClose = (event: React.SyntheticEvent | React.MouseEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setSuccessOpen(false);
    setFailOpen(false);
  };

  // FORM SUBMISSION
  const resetInputs = () => {
    setName('');
    setEmail('');
    setMessage('');
  }

  const onSubmit = (data: IFormInput) => {
    const submittedData: IFormInput = {...data}
    sendContactForm(submittedData)
      .then(() => {
        setSuccessOpen(true);
        resetInputs();
      })
      .catch(error => {
        setFailOpen(true);
      });
  };

  // CONDITIONAL STYLING
  const labelColors = useLabelColors();
  const unfocusedLabelColor = (val: string) => {
    if(val === '') {
      return labelColors.primary;
    }
    return labelColors.secondary;
  }

  // container height
  const windowSize = useWindowSize();
  const debouncedWindowSize = useDebounce(windowSize, 100);
  const containerHeight = Math.max(0.3 * debouncedWindowSize.width, debouncedWindowSize.height - (0.1 * debouncedWindowSize.width));

  return (
    <StyledGrid container direction='column' justify='center' alignItems='center'
      className={props.classes} style={{height: `${containerHeight}px`}}>
      <form onSubmit={handleSubmit(onSubmit)} method='post'>

        <InputContainer container direction='row' justify='flex-start' alignItems='center'>
          <StyledIconWrapper container item justify='center' alignItems='center'>
            <AccountCircleTwoTone fontSize='inherit'/>
          </StyledIconWrapper>
          <Grid item>
            <StyledTextField id='name' name='name' label={NAME_PLACEHOLDER} value={name}
              onChange={handleNameChange}
              InputProps={{disableUnderline: true}}
              inputRef={register({required: true, maxLength: MAX_NAME_LENGTH})}
              className={unfocusedLabelColor(name)} />
          </Grid>
          {debouncedErrors.name?.type === "required" && <StyledError>{ERROR_NAME_REQUIRED}</StyledError>}
          {debouncedErrors.name?.type === "maxLength" && <StyledError>{ERROR_EXCEEDS_LENGTH(name.length, MAX_NAME_LENGTH)}</StyledError>}
        </InputContainer>

        <InputContainer container direction='row' justify='flex-start' alignItems='center'>
          <StyledIconWrapper container item justify='center' alignItems='center'>
            <EmailTwoTone fontSize='inherit'/>
          </StyledIconWrapper>
          <Grid item>
            <StyledTextField id='email' name='email' label={EMAIL_PLACEHOLDER} value={email}
              onChange={handleEmailChange}
              InputProps={{disableUnderline: true}}
              inputRef={register({required: true, maxLength: MAX_EMAIL_LENGTH, pattern: EMAIL_PATTERN})}
              className={unfocusedLabelColor(name)} />
          </Grid>
          {debouncedErrors.email?.type === "required" && <StyledError>{ERROR_EMAIL_REQUIRED}</StyledError>}
          {debouncedErrors.email?.type === "maxLength" && <StyledError>{ERROR_EXCEEDS_LENGTH(email.length, MAX_EMAIL_LENGTH)}</StyledError>}
          {debouncedErrors.email?.type === "pattern" && <StyledError>{ERROR_INVALID_EMAIL}</StyledError>}
        </InputContainer>

        <InputContainer container direction='row' justify='flex-start' alignItems='flex-start' style={{minHeight: '5vw', height: `${containerHeight-0.26*debouncedWindowSize.width}px`}}>
          <StyledIconWrapper container item justify='center' alignItems='center'>
            <RateReviewTwoTone fontSize='inherit'/>
          </StyledIconWrapper>
          <Grid item style={{minHeight: '5vw', height: `${containerHeight-0.274*debouncedWindowSize.width}px`}}>
            <StyledTextField id='message' name='message' multiline rowsMax={Math.max(2, Math.ceil((containerHeight-0.29625*debouncedWindowSize.width) / 30))} label={MESSAGE_PLACEHOLDER} value={message}
              onChange={handleMessageChange}
              InputProps={{disableUnderline: true}}
              inputRef={register({required: true, maxLength: MAX_MESSAGE_LENGTH})}
              style={{height: 'inherit'}}
              className={unfocusedLabelColor(name)} />
          </Grid>
          {debouncedErrors.message?.type === "required" && <StyledError>{ERROR_MESSAGE_REQUIRED}</StyledError>}
          {debouncedErrors.message?.type === "maxLength" && <StyledError>{ERROR_EXCEEDS_LENGTH(message.length, MAX_MESSAGE_LENGTH)}</StyledError>}
        </InputContainer>

        <StyledSubmitButton type='submit'>
          <StyledSubmitIcon src={SUBMIT_BUTTON_IMG_PATH} />
        </StyledSubmitButton>
      </form>
      <StyledRings src='imgs/concentric-rings-right.svg' alt={'concentric rings flourish'} className={sonarAnimation.animate}/>
      <Snackbar anchorOrigin={{vertical: 'bottom', horizontal: 'right',}}
        open={successOpen}
        autoHideDuration={TOAST_DURATION}
        onClose={handleClose}
        message={SUCCESS_TEXT}
        ContentProps={{classes: successSnackBarStyle}} />
      <Snackbar anchorOrigin={{vertical: 'bottom', horizontal: 'right',}}
        open={failOpen}
        autoHideDuration={TOAST_DURATION}
        onClose={handleClose}
        message={FAIL_TEXT}
        ContentProps={{classes: failureSnackBarStyle}} />
    </StyledGrid>
  );
}