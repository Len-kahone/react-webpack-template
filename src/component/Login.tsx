import React, { useEffect} from "react";
import { Button, Input, Radio } from "antd";
import "./Login.less";
const Login:React.FC=function(){

   async function say(){
        const p=new Promise(resolve=>{
            setTimeout(() => {
                resolve("1000");
            }, 2000);
        });
        const num=await p;
        console.log(num);
    }
    useEffect(()=>{
        const type="kahone";
        say();
    },[]);
    function handleClick(){
      console.log(333);
      document.body.style.setProperty("--mainColor", "#ffff00");
    }
    const age="kk";
    return (
      <div id="login">
        hello login
     
        <Button type="primary" onClick={handleClick}>登陆</Button>
      </div>
    );
};

export default Login;