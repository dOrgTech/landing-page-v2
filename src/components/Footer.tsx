import { faGithub, faKeybase, faTelegram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
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

const LogoIcon = styled(FontAwesomeIcon)(({ theme }) => ({
  cursor: 'pointer',
  color: theme.palette.text.primary,
  paddingRight: 10,
  "&:hover": {
    color: theme.palette.secondary.main
  }
}));

export const Footer = () => {
  return (
    <FooterContainer container justify='flex-end'>
      <Grid item>
        <LogoContainer href="https://github.com/dOrgTech" target="_blank">
          <LogoIcon
            icon={faGithub}
          />
        </LogoContainer>
      </Grid>

      <Grid item>
        <LogoContainer href="https://twitter.com/dOrg_tech" target="_blank">
          <LogoIcon
            icon={faTwitter}
          />
        </LogoContainer>
      </Grid>

      <Grid item>
        <LogoContainer href="https://keybase.io/team/dorg.membrane" target="_blank">
          <LogoIcon
            icon={faKeybase}
          />
        </LogoContainer>
      </Grid>

      <Grid item>
        <LogoContainer href="mailto:contact@dorg.tech" target="_blank">
          <LogoIcon
            icon={faEnvelope}
          />
        </LogoContainer>
      </Grid>
    </FooterContainer>
  );
}
