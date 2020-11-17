/*
* react-router
*
* 如何使用像 router.beforeEach
*
*
*  权限管理中 对路由有两种方式管理
*   1.后台返回的数据来渲染
*   2.前端渲染全部 静态路由  然后根据后台返回的权限来 判断是否需要显示
*    这里面会 有另一个概念
*     1.公共的
*     2.各个区分的
*     3. 第一 需要一个按钮来判断是否 需要权限判断  二  是否显示
*
*
*  思维错误  所有的router完成都是要先去注册 后需要在菜单页面去link 去进行跳转的
*
*  添加权限标识符
* 添加左侧显示标识符
*
*
* **/

/*
*
* react-redux
*
*
*
* axios 中  withCredentials 这个属性 是设置跨域是否允许使用 cookie 这类数据的
*
* 因为现在大多数的后台 也是分模块化的  example  tg have base  coupon item order and so on。
* 在访问这些接口的时候  有权限问题 也就是token  那么一定要设置 跨域也能使用token 才能正常访问这些数据
*
*
* 在目录结构上 可以放在 components 上
*
*
*  并没有在所有的 路由中  都调用  getUserInfo的方法 所以这里是有问题的
*  当页面重定向后 在login页面没有 调用接口 所以这里不会 再次进行重定向  所以这个要改一下
*
*
*  在注册路由的时候  想要这种方法 要加一个 判断
*  左侧菜单 记录选中状态
*
*  左侧菜单栏的开头为什么要有图标的原因
*
*  qs 是 人为编写的 增强了安全性的 格式化 library
*  querystring 是 node的核心模块 处理URL的查询字符串
*
*  os-seller的权限设置
*
*  第一步 遍历本地的所有菜单  通过filter 来遍历掉所有的没有path的button
*   1. 第一的为 一级菜单
*   2. level 是 二级 显示列表 菜单
*
*   这个事吧 其实是一种思考的 过程 自己去想怎么实现 权限设置
*
*   丰哥的思考
*   本地的js文件 按照模块 把所有的router 定义 然后通过 authList中存储的权限来 indexOf  _include 的方式判断 是否有权限
*                                                   用户的shop list的 只要有交集 就可以看见这个页面
*
*   按钮中 分为两种  通过添加 operation  来去确定是按钮
*   1.跳转页面类型
*    通过添加hideInMenu 来是否隐藏按钮   这里应该是想做3级下拉框   并且希望 这个3级子菜单和 button 是 level3  所以这里是有问题
*   2.功能类型
*    功能类  需要在具体的功能页面的 按钮上 添加标识位  来判断是是否显示
*     showAlways：(default: false)只有一个子路由时，是否显示父路由
*     notAuth：(default:false) 是否需要登录，默认都需要登录
*     notCache：(default: false)是否启用keep-alive
*
*
*
*
*
*
*
* **/


/*
*  权限设置
*
*
*
*
* **/
