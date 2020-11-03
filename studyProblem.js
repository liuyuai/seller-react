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
* axios 中  withCredentials 这个属性 是设置跨域是否允许使用 cookie 这类数据的
*
* 因为现在大多数的后台 也是分模块化的  example  tg have base  coupon item order and so on。
* 在访问这些接口的时候  有权限问题 也就是token  那么一定要设置 跨域也能使用token 才能正常访问这些数据
*
*
* 在目录结构上 可以放在 components 上
*
*
* **/
