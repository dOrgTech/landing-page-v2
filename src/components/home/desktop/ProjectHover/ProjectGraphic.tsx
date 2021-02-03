import React from 'react'
import {Grid, makeStyles, styled, Theme, useMediaQuery, useTheme} from '@material-ui/core'


const Container = styled(Grid)({
  width: '41.5vw',
  position: 'absolute',
  bottom: 0,
  right: '1vw',
  zIndex: 0,
  height: '60%',
});

const useMobileStyles = makeStyles({
  layout: {
    width: '82vw',
    height: '15vh',
    opacity: 1,
    overflow: 'hidden',
    bottom: '1vw',
    right: 0
  },
});

const StyledGraphic = styled('img')({
  objectFit: 'contain',
  position: 'absolute',
  bottom: 0,
  zIndex: 1
});

interface Props {
  src: string;
  classes?: string;
  item?: boolean;
}

export const ProjectGraphic: React.FC<Props> = (props: Props) => {

  const classes = props.classes ? props.classes : '';
  const theme: Theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up('lg'));
  const mobileStyles = useMobileStyles();

  return (
    <Container item={props.item} container justify={desktop ? 'flex-end' : 'center'} alignItems='flex-end'
      className={`${classes} ${desktop ? '' : mobileStyles.layout}`} >
      <StyledGraphic src={props.src} alt={'project graphic'} style={{height: 'inherit'}}/>
    </Container>
  );
}
