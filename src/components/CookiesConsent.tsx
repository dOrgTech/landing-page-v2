import { Snackbar, SnackbarContent, Button } from "@material-ui/core";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { colors } from "../theme";

export const CookiesConsent: React.FC = () => {
  const [open, setOpen] = useState(true);

  return (
    <Snackbar
      open={open}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}>
      <SnackbarContent
        message={`We use cookies to ensure you the best experience. By using our website you agree to our Cookie Policy`}
        action={
          <>
            <Link to='/privacy-policy'>
              <Button color='secondary' size='small'>
                Read More
              </Button>
            </Link>
            <Button size='small' style={{ color: colors.green }} onClick={() => setOpen(!open)}>
              Accept
            </Button>
          </>
        }
      />
    </Snackbar>
  );
};
