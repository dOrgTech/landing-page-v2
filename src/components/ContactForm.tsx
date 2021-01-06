import React from 'react'
import { useForm } from "react-hook-form";
import {ButtonBase, Grid, makeStyles, styled, TextField, Typography} from '@material-ui/core'
import { theme } from "../theme";
import {AccountCircleTwoTone, EmailTwoTone, RateReviewTwoTone} from '@material-ui/icons';

const NAME_PLACEHOLDER = 'Your Name';
const EMAIL_PLACEHOLDER = 'Email';
const MESSAGE_PLACEHOLDER = 'Message';
const SUBMIT_BUTTON_IMG_PATH = "/imgs/circled-arrow-icon.svg";
const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 100;
const MAX_MESSAGE_LENGTH = 2000;
const EMAIL_PATTERN = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const ERROR_NAME_REQUIRED = 'Your name is required';
const ERROR_EMAIL_REQUIRED = 'Your email is required';
const ERROR_MESSAGE_REQUIRED = 'Tell us what we can do for you';
const ERROR_INVALID_EMAIL = 'Enter a valid email address';
const ERROR_EXCEEDS_LENGTH = (chars: number, max: number) => {return `${chars}/${max} characters`};

const StyledGrid = styled(Grid)({
  margin: 'auto',
  width: '100%',
  height: '57.375vw',
  background: theme.palette.secondary.main,
  boxSizing: 'border-box',
  position: 'relative'
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
  borderRadius: '50%'
});

const StyledSubmitIcon = styled('img')({
  objectFit: "contain",
  position: 'relative',
  top: '0.5vw',
  borderRadius: '50%'
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

interface Props {
  classes?: string;
}

interface IFormInput {
  name: string;
  email: string;
  message: string;
}

export const ContactForm: React.FC<Props> = (props: Props) => {

  // FORM HOOKS
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { register, errors, handleSubmit } = useForm<IFormInput>();

  const onSubmit = (data: IFormInput) => { console.log(data) };

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

  // CONDITIONAL STYLING
  const labelColors = useLabelColors();
  const unfocusedLabelColor = (val: string) => {
    if(val === '') {
      return labelColors.primary;
    }
    return labelColors.secondary;
  }

  return (
    <StyledGrid container className={props.classes} direction='column' justify='center' alignItems='center'>
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
          {errors.name?.type === "required" && <StyledError>{ERROR_NAME_REQUIRED}</StyledError>}
          {errors.name?.type === "maxLength" && <StyledError>{ERROR_EXCEEDS_LENGTH(name.length, MAX_NAME_LENGTH)}</StyledError>}
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
          {errors.email?.type === "required" && <StyledError>{ERROR_EMAIL_REQUIRED}</StyledError>}
          {errors.email?.type === "maxLength" && <StyledError>{ERROR_EXCEEDS_LENGTH(email.length, MAX_EMAIL_LENGTH)}</StyledError>}
          {errors.email?.type === "pattern" && <StyledError>{ERROR_INVALID_EMAIL}</StyledError>}
        </InputContainer>

        <InputContainer container direction='row' justify='flex-start' alignItems='flex-start' style={{height: '15.375vw'}}>
          <StyledIconWrapper container item justify='center' alignItems='center'>
            <RateReviewTwoTone fontSize='inherit'/>
          </StyledIconWrapper>
          <Grid item style={{height: '13.975vw'}}>
            <StyledTextField id='message' name='message' multiline rowsMax={9} label={MESSAGE_PLACEHOLDER} value={message}
              onChange={handleMessageChange}
              InputProps={{disableUnderline: true}}
              inputRef={register({required: true, maxLength: MAX_MESSAGE_LENGTH})}
              style={{height: 'inherit'}}
              className={unfocusedLabelColor(name)} />
          </Grid>
          {errors.message?.type === "required" && <StyledError>{ERROR_MESSAGE_REQUIRED}</StyledError>}
          {errors.message?.type === "maxLength" && <StyledError>{ERROR_EXCEEDS_LENGTH(message.length, MAX_MESSAGE_LENGTH)}</StyledError>}
        </InputContainer>

        <StyledSubmitButton type='submit'>
          <StyledSubmitIcon src={SUBMIT_BUTTON_IMG_PATH} />
        </StyledSubmitButton>
      </form>
      <StyledRings src='imgs/concentric-rings-right.svg' alt={'concentric rings flourish'} />
    </StyledGrid>
  );
}