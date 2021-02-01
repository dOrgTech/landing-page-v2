import {makeStyles, styled, Tab, Tabs} from "@material-ui/core";
import React from "react";
import {Companies} from "../../../constants/companies";
import {Communities} from "../../../constants/communities";
import {theme} from "../../../theme";
import {borderStyle} from "../../../theme/styles";
import {ClientContainerMobile} from "./ClientContainerMobile";


const StyledContainer = styled('div')({
  width: '100%',
  position: 'relative',
  zIndex: 1,
});

const useTabStyle = makeStyles({
  root: {
    width: '45vw',
    minWidth: '45vw',
    height: '16.25vw',
    borderBottom: borderStyle,
    borderTop: 'none',
    borderRight: 'none',
    borderRadius: 0,
    fontFamily: theme.typography.fontFamily,
    fontSize: '3.333vw',
    fontWeight: 'bold',
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: 1,
    letterSpacing: '1.4px',
    textAlign: "left",
    color: 'rgba(255, 255, 255, 0.5)',
    opacity: 1
  },
  selected: {
    color: theme.palette.text.secondary
  }
});

const useTabContainerStyle = makeStyles({
  root: {
    width: '100%'
  },
  indicator: {
    width: '45vw',
    height: '0.716vw'
  }
})

const useContentMargin = makeStyles({
  topMargin: {
    marginTop: '2.5vw'
  }
})

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index } = props;
  return (
    <div role="tabpanel" hidden={value !== index} id={`tabpanel-${index}`} aria-labelledby={`tab-${index}`}>
      {value === index && (children)}
    </div>
  );
}

interface Props {
  companiesTitle: string;
  communitiesTitle: string;
  companies: Companies;
  communities: Communities;
  classes?: string;
}

export const ClientTabsMobile: React.FC<Props> = (props: Props) => {

  const tabStyle = useTabStyle();
  const tabContainerStyle = useTabContainerStyle();
  const contentMargin = useContentMargin();

  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.ChangeEvent<unknown>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <StyledContainer className={props.classes}>
      <Tabs value={value} onChange={handleChange} aria-label="Companies and Communities" classes={tabContainerStyle}>
        <Tab label={props.companiesTitle} id={`tab-${0}`} aria-controls={`tabpanel-${0}`} classes={tabStyle}/>
        <Tab label={props.communitiesTitle} id={`tab-${1}`} aria-controls={`tabpanel-${1}`} classes={tabStyle}/>
      </Tabs>
      <TabPanel value={value} index={0}>
        <ClientContainerMobile clients={props.companies} classes={contentMargin.topMargin}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ClientContainerMobile clients={props.communities} classes={contentMargin.topMargin}/>
      </TabPanel>
    </StyledContainer>
  );
}