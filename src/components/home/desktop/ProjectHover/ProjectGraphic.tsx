import React from 'react'
import {Grid, makeStyles, styled} from '@material-ui/core'
import {useIsDesktop} from "../../../../utils/hooks";


const Container = styled(Grid)({
  width: '41.5vw',
  position: 'absolute',
  bottom: 0,
  right: '1vw',
  zIndex: 0,
  height: '25vh',
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
  const desktop = useIsDesktop();
  const mobileStyles = useMobileStyles();

  return (
    <Container item={props.item} container justify={desktop ? 'flex-end' : 'center'} alignItems='flex-end'
      className={`${classes} ${desktop ? '' : mobileStyles.layout}`} >
      <StyledGraphic src={props.src} alt={'project graphic'} style={{height: 'inherit'}}/>
    </Container>
  );
}
