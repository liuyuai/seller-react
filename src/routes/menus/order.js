import List from "../../views/order/OrederList";
import Cancel from "../../views/order/Cancel";

export const order=  [
  {
    path:"/order",title:'订单',id:2,
    childrens:[
      { path:"/order/list",title:"全部订单",component:List,id:21},
      { path:'/order/all',title:"全部交易",component:"All",id:'22'},
      { path:"/order/cancel",title:"已取消",component:Cancel,id:23},
    ]
  },
  { path:'/exchange',title:"兑换管理",id:'4',
  childrens: [
    {path: '/exchange/card',title:"兑换卡管理",component: "Card",id:'41'}
  ]
},
  { path:'/tag',title:"标签管理",id:'5',
    childrens: [
      {path: '/cancel/order',title:"取消订单",component: "Order",id:'51'},
      {path: '/cancel/cancel',title:"取消",component: "Cancel",id:'52'},
      {path: '/cancel/list',title:"取消订单",component: "List",id:'53'}
    ]
  }
]
