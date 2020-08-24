import React,{useContext} from "react";
import {ColorContext} from "./Admin";

const Two = () => {
    const color=useContext(ColorContext);
    return (
        <div>
            Two
            <p style={{color}}>这是一段有颜色的文字</p>
        </div>
    );
};

export default Two;
