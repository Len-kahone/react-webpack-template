import "@/assets/css/one.less";
import "@/assets/css/two.less";
import("@/utils/utils").then(res=>{
   res.eat();
});

const say = () => {
  console.log("hello world----");
};

say();

//配置热更新，只能处理非入口文件
if (module.hot) {
  module.hot.accept();
}
