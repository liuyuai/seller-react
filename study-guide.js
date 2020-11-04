/*
*   整体项目
*  浏览器级别
*  一、HTTP协议
*   1.协议内容 http0.9 http1.0 http1.1  http2 https
*       三次握手 go-back-go  四次挥手 go back back go(wait)
*       https  添加SSL/TLS   非对称加密   对称加密    第一次 获取浏览器公私密钥的 公钥 然后把本地的私钥(client)通过
*       通过公钥加密 传给 服务器 然后 通过本地的私钥（client）来进行 传输
*       http2的特性
*       2.二进制格式传输
*         多路复用
*         服务器推送
*         头部压缩
*
*   2.缓存策略：
*       强缓存   expires Cache-Control: max-age:'321313131'
*       协商缓存   etag  if-none-match  last-modified  if-modified-since
*       缓存的目的是为了 让页面加载更快，显示的更快，让用户有更好的体验   直接访问
*        浏览器缓存 本地缓存
*       当前网站 使强缓存和协商缓存的的方式    根据文件产生的hash值 来判断去请求新的资源 一般是由后端来管理
*   3.跨域：
*       同源策略: 相同协议  相同域名 相同端口
*       解决跨域的的方式
*       jsonP CORS nginx反向代理
*   4.请求  起始行 request-header  response-header body
*     General
*       status状态码
*         1.2xx 成功 2.3xx重定向 304协商缓存  3.4xx 客户端错误  4.5xx 服务器错误
*
*   5.cdn 存储资源文件
*
*   6.dns解析  (域名解析)  电话本
*
*   7.SEO
*
*
*   本地项目级别
*   二、封装框架 为了约束 规范
*       封装方法  减少代码重复 更快使用
*     #1模块化
*       是为了之后发展做的一个思考，一个项目在初期文件可能不多，但是随着业务的增加会有更多代码加入，
*     如果在以这个文件中 查看会很麻烦 多人协调工作 在使用git.svn这种东西的时候大家修改同一文件会有很多问题
*     在每人使用单个模块 会避免冲突
*
*     #2规范化
*     使用不同的框架 react vue angular 一方面是为了快速开发 另一方面是提供了一个规范化的编写，因为工作者都需要
*     根据当前语言规则来实现
*     使用 eslint husky hook 的设置来检测 格式和错误编写等问题
*     codeReview 代码评审
*
*      使用MOCK  来模拟接口调用
*
*       Store  状态管理
*
*       router  前端路由
*
*      TEST
*     使用 单元测试来  检验功能上是否有问题
*       测试驱动开发TDD  功能驱动开发BDD
*       #1.单元测试最大的好处是 可以检验之前代码的正确性   当我们添加新功能后是否对之前产生影响
*       #2.由于每个测试用例是根据 最小单元 编写，我们可以根据测试用例明白每个功能，有利于去重构
*       #3.提高效率 在编写测试用例后，可以对一些简单的地方 进行测试。 减少测试人员对于 小功能的测试，把时间精力放在核心功能上
*
*     WebPack 代码打包工具
*
*     安全性
*
*
*
*
*
*
*
*
*
*
*
*
*
*
* **/
