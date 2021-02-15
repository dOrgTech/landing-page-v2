import React, {useContext, useState} from "react";


export interface NavHoverStore {
  state: number,
  dispatch?: React.Dispatch<React.SetStateAction<number>>
}

const HoverContext = React.createContext<NavHoverStore>({state: -1});
export const useNavHoverContext = (): NavHoverStore => useContext(HoverContext);

interface Props {
  children?: React.ReactNode
}

export const NavHoverContext: React.FC<Props> = (props: Props) => {

  const [navHoverIndex, setNavHoverIndex] = useState(-1);

  return (
    <HoverContext.Provider value={{state: navHoverIndex, dispatch: setNavHoverIndex}}>
      {props.children}
    </HoverContext.Provider>
  );
};
