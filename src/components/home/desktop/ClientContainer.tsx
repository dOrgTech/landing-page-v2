import {ClickAwayListener, Grid, styled, Typography} from "@material-ui/core";
import React, {useState} from "react";
import {Companies} from "../../../constants/companies";
import {Communities} from "../../../constants/communities";
import {Client} from "../../../constants/clients";
import {ClientItem} from "./ClientItem";
import {theme} from "../../../theme";
import {CustomScrollbar} from "../../CustomScrollbar";
import {useDebounce, useWindowSize} from "../../../utils/hooks";

const StyledGrid = styled(Grid)({
  width: '100%',
  position: 'relative',
  zIndex: 1
});

const ScrollContainer = styled(Grid)({
  width: '100%',
  height: `${window.innerHeight - (0.16 * window.innerWidth)}px`,
});

const ClientGrid = styled(Grid)({
  width: '100%',
  direction: 'ltr'
});

const TitleContainer = styled(Grid)({
  width: '100%',
  height: '0.75vw',
  paddingLeft: '1.688vw',
  marginBottom: '2.125vw',
  borderLeft: '0.188vw solid ' + theme.palette.text.secondary,
  position: 'relative',
  zIndex: 1
});

const StyledTitle = styled(Typography)({
  fontFamily: theme.typography.fontFamily,
  fontSize: '0.813vw',
  fontWeight: 'bold',
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1,
  letterSpacing: '1.3px',
  textAlign: "left",
  color: theme.palette.text.secondary,
});

const ProjectView = styled('div')({
  position: 'absolute',
  top: '-5vw',
  zIndex: 2
})

interface Props {
  title: string;
  isOnLeft?: boolean;
  clients: Companies | Communities;
  classes?: string;
}

export const ClientContainer: React.FC<Props> = (props: Props) => {

  const windowSize = useWindowSize()
  const debouncedWindowSize = useDebounce(windowSize, 100);

  const [caseStudy, setCaseStudy] = useState<JSX.Element>(<div/>);
  const [sticky, setSticky] = useState<string | undefined>(undefined);
  const debouncedSticky = useDebounce(sticky, 50);

  // handle user clicking away from sticky project hover
  const handleClickAway = (e: React.MouseEvent<Document, MouseEvent>) => {
    if (debouncedSticky) {
      setSticky(undefined);
      setCaseStudy(<div/>);
    }
  }

  const handleClick = (element: JSX.Element, name?: string, ) => {
    setSticky(name);
    setCaseStudy(element);
  }

  return (
    <div>
      <StyledGrid className={props.classes} container direction='column' justify='flex-start' alignItems='flex-start'>
        <TitleContainer item>
          <StyledTitle>{props.title}</StyledTitle>
        </TitleContainer>
        <ScrollContainer style={{height: `${debouncedWindowSize.height - (0.16 * debouncedWindowSize.width)}px`}}>
          <CustomScrollbar rtl={props.isOnLeft} style={{width: '100%', height: '100%'}}>
            <ClientGrid container direction='column' justify='flex-start' alignItems='flex-start'>
              {Object.values(props.clients).map((client: Client) => (
                <Grid item key={`${client.name}`} style={{width: '100%'}}>
                  <ClientItem
                    isOnLeft={props.isOnLeft}
                    client={client}
                    stickyItem={debouncedSticky}
                    onClick={(element: JSX.Element, name?: string) => handleClick(element, name)}/>
                </Grid>
              ))}
            </ClientGrid>
          </CustomScrollbar>
        </ScrollContainer>
      </StyledGrid>
      <ProjectView id='project-view' style={{right: props.isOnLeft ? '-7.5vw' : '42.5vw'}}>
        <ClickAwayListener onClickAway={(e) => handleClickAway(e)} mouseEvent={'onMouseDown'}>
          <div>
            {caseStudy}
          </div>
        </ClickAwayListener>
      </ProjectView>
    </div>
  );
}