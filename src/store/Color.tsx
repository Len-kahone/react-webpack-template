import React,{createContext,useReducer} from "react";
import { RouteComponentProps}  from "react-router-dom";

interface ColorInt {
    color:string,
    dispatch?:React.Dispatch<ActionType>
}

interface ActionType{
    color:string
}
function reducer(state: string, actionType: ActionType) {
    return actionType.color;
}
const Color: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(reducer,"#f00");
    return (
        <ColorContext.Provider
        value={{ color: state, dispatch }}
        >
    {children}
    </ColorContext.Provider>
  );
};
export const ColorContext = createContext<ColorInt>({ color: "red" });

export default Color;
