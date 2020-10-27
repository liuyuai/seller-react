export const menu = [
    {path:'/home',title:"主页",component:"Home",id:"1"},
    {path:"/order",title:"订单管理",id:"2",
      childrens:[
        { path:'/oder/list',title:"全部订单",component:"List",id:'21'},
        { path:'/oder/all',title:"全部交易",component:"All",id:'22'},
        { path:'/oder/cancel',title:"已取消",component:"Cancel",id:'23'},
      ]
    },
    { path:'/cancel',title:"全部交易",id:'3',
      childrens: [
        {path: '/cancel/order',title:"取消订单",component: "Order",id:'31'},
        {path: '/cancel/cancel',title:"取消",component: "Cancel",id:'32'},
        {path: '/cancel/list',title:"取消列表",component: "List",id:'33'}
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
    },
  {path:'/about',title:"关于",component:"Home",id:"6"},
];
