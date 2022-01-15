# read-project
读书类项目

## 一、使用git对项目进行版本控制

## 二、创建项目

## 三、定义项目目录结构规范

common 	css/js/sass/less						
components  vue的组件
wxcomponents  wx的组件
utils		存放的是工具文件 http请求 ...
lib			第三方库  md.5 
models		api文件
iconfont	字体图标文件
pages		页面文件
static 图片/音频/视频 
enum		枚举值文件
config		项目的公共配置文件
doc			项目文档

## 四、封装http请求库

### 4.1 在config/api.js文件内定义请求的公共接口地址

	const APIConfig = {
		baseUrl : "http://ceshi.dishait.cn/"
	}
	
	export default APIConfig
	
### 4.2 封装http请求库和API接口

#### 4.2.1 将uni的api进行promise化 

####  4.2.2 对http请求库进行封装

####  4.2.3 http请求库的错误进行处理

####  4.2.4 实现api的封装
