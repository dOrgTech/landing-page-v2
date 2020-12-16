import { faTelegram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Grid, Link, styled, useTheme } from '@material-ui/core'
import React from 'react'

const FooterContainer = styled(Grid)({
  maxWidth: '1400px',
  margin: 'auto',
  height: 50,
  paddingTop: 15,
  paddingBottom: 15
});

const LogoContainer = styled(Link)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  maxHeight: '50px'
});

const Logo = styled(FontAwesomeIcon)(({ theme }) => ({
  cursor: 'pointer',
  fontSize: 24,
  color: theme.palette.text.secondary,

  "&:hover": {
    color: theme.palette.secondary.main
  }
}));

export const Footer = () => {
  const theme = useTheme()

  return (
    <FooterContainer container justify='flex-end'>
      <Grid item>
        <LogoContainer href="https://t.me/TODO" target="_blank">
          <Logo
            icon={faTelegram}
            color={theme.palette.text.primary}
            style={{ paddingRight: 10 }}
          />
        </LogoContainer>
      </Grid>
      <Grid item>
        <LogoContainer href="https://twitter.com/dorg_tech" target="_blank">
          <Logo
            icon={faTwitter}
            color={theme.palette.text.primary}
            style={{ paddingRight: 10 }}
          />
        </LogoContainer>
      </Grid>
    </FooterContainer>
  );
}
