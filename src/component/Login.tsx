import React, { Component ,useEffect} from "react";
import { Button } from "antd";
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

    const age="kk";
    return <div>
        hello login
        <Button type="primary">登陆</Button>
    </div>;
};

export default Login;