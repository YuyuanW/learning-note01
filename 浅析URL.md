# 浅析URL
## Question
1.	URL 包含哪几部分，每部分分别有什么作用
2.	DNS 的作用是什么，nslookup 命令怎么用
3.	IP 的作用是什么，ping 命令怎么用
4.	域名是什么，分别哪几类域名

## Answer
### URL 包含哪几部分，每部分分别有什么作用？
URL（Uniform Resoure Locator 统一资源路径地址）

比如 `https://xiedaimala.com/courses/16644d89-6b17-4c2f-ac15-dabb994b7696/random/c2175e78b6?#/common`

在这个例子中我们可以分成六部分；
1. 传输协议：http，https
2. 域名： 例xiedaimala为网站名字。 Xeidaimala.com为一级域名，www是服务器，`www.xiedaimala.com`和`xiedaimala.com`是两个东西，前一个是二级域名，后一个是一级域名。程序员基本就不写www，因为没什么用，但是有些规定要按www来访问。
3. 端口： 不填写的话，http默认走的是80端口号，https是443端口号。url写完整的话就是：`https://xiedaimala.com:443/courses/16644d89-6b17-4c2f-ac15-dabb994b7696/random/c2175e78b6?#/common`
4. 路径 `http://xiedaimala.com/路径1/路径1.2`，其中紧跟着com的/表示根目录
5. 携带的参数：?#，询问你要查询什么内容
6. 锚点：#/common，定位到页面哪里，要注意的是，这个只是展示给用户的，浏览器不会把这一部分请求到服务器。

### DNS 的作用是什么，nslookup 命令怎么用
DNS：Domain Name System，域名服务器。

很多时候ip太难记了，于是用户使用域名进行访问，将域名转换成ip就是DNS干的事。域名也就是ip的别名。但是这俩货也不是一一对应的关系，一个域名对应多个ip是为了负载均衡，一个ip对应多个域名，是开发者太穷了，共享主机的操作。

Nslookup: nslookup (全称 name server lookup)，查询域名的，例如：nslookup baidu.com。

### IP 的作用是什么，ping 命令怎么用
Ip是Internet Protocol。约定上网的协议。

它约定了两件事：
* 一个是如何定位到一台设备？
* 另一个是如何封装数据报文，和其他设备进行交流。

Ip分为内网ip和外网ip，其中，路由器充当门卫(网关)的角色，内部交流，外部交流随便你，但是内外要交流，就要经手路由器。

可以通过ipconfig得到自己的ip，或者是访问ip138.com来查询

几个特殊的ip，一个是127.0.0.1表示自己，一个是localhost通过hosts文件指定为自己，0.0.0.0不代表任何设备

Ping 域名，可以得到域名对应的ip。例如：ping baidu.com

### 域名是什么，分别哪几类域名
域名，就是ip的别名。可以看看在DNS那一部分写的ip和域名之间的对应关系。

域名的种类，通过最后的com之类来区别，com就是company，表示网站的性质类型。
* 一类是国际域名。.com（商业公司用）、.Net（用于网络服务）、.Org（用于组织协会等）……
* 一类是国家域名。.cn代表中国、.uk代表英国、.us代表美国……
* 一类是新顶级域名。biz、info、name、pro、aero、coop……
