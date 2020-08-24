import React, { useEffect, useMemo,useReducer } from "react";
type Data={
    time:number
}
const Nav:React.FC<Data> = ({time,children}) => {

   const newTime:string= useMemo(() => {
       return changeTime(time);
   }, [time]);
    function changeTime(time:number):string{
        console.log(time+"loading");
        return new Date(time).toISOString();
    }
    return (
      <div>
        数字：{children}
        <p>时间：{newTime}</p>
      </div>
    );
};

export default Nav;
