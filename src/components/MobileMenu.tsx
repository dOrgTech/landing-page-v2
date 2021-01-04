import React from "react";
import {styled, Grid, MenuItem, Menu, ButtonBase, Typography, Box} from "@material-ui/core";
import { useHistory, useLocation } from 'react-router-dom';
import {Route, routes} from "../constants/routes";
import {theme} from "../theme";

// NOTE: Styling for menu background and border is located in the Mui theme

const StyledButton = styled(ButtonBase)({
  width: '8.57vw',
  height: '7vw',
  marginRight: '4.76vw'
});

const AccentsContainer = styled(Grid)({
  width: 'inherit',
  height: 'inherit',
});

const RectangleAccent = styled('div')({
  width: '8.57vw',
  height: '0.476vw',
  backgroundColor: theme.palette.text.secondary
});

const StyledMenuItem = styled(MenuItem)({
  '&:hover': {
    backgroundColor: theme.palette.secondary.main,
  }
})

const StyledMenuText = styled(Typography)({
  fontFamily: theme.typography.fontFamily,
  fontSize: '3.1vw',
  fontWeight: 500,
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1.15,
  letterSpacing: '1.3px',
  textAlign: "left",
  color: theme.palette.text.primary
});

const SelectionAccent = styled(Box)({
  width: '1vw',
  height: '50%',
  backgroundColor: theme.palette.secondary.main,
  position: 'absolute',
  left: 0
});

export const MobileMenu: React.FC = () => {

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => { setAnchorEl(event.currentTarget); };
  const handleClose = () => { setAnchorEl(null); };

  const history = useHistory();
  const handleAboutclick = () => {
    handleClose();
    history.push(routes.about.path);
  };
  const handleCareersClick = () => {
    handleClose();
    history.push(routes.careers.path);
  };
  const handleContactClick = () => {
    handleClose();
    history.push(routes.contact.path);
  };

  const location = useLocation();
  const isLocation = (route: Readonly<Route>) => { return location.pathname === route.path; }
  const highlight = (route: Readonly<Route>) => {
    return location.pathname === route.path ? theme.palette.text.secondary : theme.palette.text.primary;
  }

  return (
    <div>
      <StyledButton aria-controls="mobile-menu" aria-haspopup="true" onClick={handleButtonClick}>
        <AccentsContainer container direction={'column'} justify={'space-between'} alignItems={'center'}>
          <RectangleAccent />
          <RectangleAccent style={{width: '5.95vw'}} />
          <RectangleAccent />
        </AccentsContainer>
      </StyledButton>
      <Menu id="mobile-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
        <StyledMenuItem onClick={handleAboutclick}>
          {isLocation(routes.about) && <SelectionAccent/>}
          <StyledMenuText style={{color: highlight(routes.about)}}>About</StyledMenuText>
        </StyledMenuItem>
        <StyledMenuItem onClick={handleCareersClick}>
          {isLocation(routes.careers) && <SelectionAccent/>}
          <StyledMenuText style={{color: highlight(routes.careers)}}>Careers</StyledMenuText>
        </StyledMenuItem>
        <StyledMenuItem onClick={handleContactClick}>
          {isLocation(routes.contact) && <SelectionAccent/>}
          <StyledMenuText style={{color: highlight(routes.contact)}}>Contact</StyledMenuText>
        </StyledMenuItem>
      </Menu>
    </div>
  );
}