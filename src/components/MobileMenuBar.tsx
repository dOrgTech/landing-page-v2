import React from "react";
import {styled, Grid, MenuItem, Menu, ButtonBase, Typography} from "@material-ui/core";
import { useHistory, useLocation } from 'react-router-dom';
import { routes } from "../constants/routes";
import {theme} from "../theme";

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

export const MobileMenuBar: React.FC = () => {

  const [anchorEl, setAnchorEl] = React.useState<null | Element>(null);
  const handleButtonClick = (event: React.MouseEvent) => { setAnchorEl(event.currentTarget); };
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
        <MenuItem onClick={handleAboutclick}>About</MenuItem>
        <MenuItem onClick={handleCareersClick}>Careers</MenuItem>
        <MenuItem onClick={handleContactClick}>Contact</MenuItem>
      </Menu>
    </div>
  );
}