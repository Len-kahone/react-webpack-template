import React, { useEffect, useMemo, useReducer, useContext } from "react";
type Data = {
  time: number;
};
import { ColorContext } from "@/store/Color";
const Nav: React.FC<Data> = ({ time, children }) => {

  const { dispatch } = useContext(ColorContext);
  const newTime: string = useMemo(() => {
    return changeTime(time);
  }, [time]);
  function changeTime(time: number): string {
    console.log(time + "loading");
    return new Date(time).toISOString();
  }
 
  return (
    <div>
      <button onClick={()=>{dispatch&&dispatch({
                              color: `rgb(${Math.random() * 255},${
                                Math.random() * 255
                              },${Math.random() * 255})`,
                            });}}>切换颜色</button>
      数字：{children}
      <p>时间：{newTime}</p>
    </div>
  );
};

export default Nav;
