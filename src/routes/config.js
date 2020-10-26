import Home from '../compontents/Home'
import About from "../compontents/About";
import Cancel from "../compontents/order/Cancel";
import List from "../compontents/order/List";


export const menu = [
  {path:"/home",title:'首页',component:Home,id:1},
  {path:"/order",title:'订单',id:2,
    childrens:[
      {path:"/order/list",title:'订单列表',component:List,id:21},
      {path:"/order/cancel",title:'取消订单',component:Cancel,id:22},
    ]
  },
  {path:"/about",title:'关于',component:About,id:3},
]