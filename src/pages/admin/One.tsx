import React, { useState, useEffect } from "react";

const One: React.FC = () => {
  type userInfo = {
    name: string;
    gender: string;
    age?: number;
    readonly height: number;
  };
  const [info, setInfo] = useState<userInfo[]>([
    { "name": "kahone", "gender": "男", "height": 175, "age": 18 }
  ]);
  const handleClick = function () {
    alert("hello");
  };
  return (
    <div>
      基本信息
      <ul>
        {info.map((item, index) => {
          return (
            <li key={index}>
              <p>名字：{item.name}</p>
              <p>性别：{item.gender}</p>
              <p>身高：{item.height}</p>
              <p>年龄：{item.age}</p>
            </li>
          );
        })}
      </ul>
      <button onClick={handleClick}>say hello</button>
    </div>
  );
};

export default One;
