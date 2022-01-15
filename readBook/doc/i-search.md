组件名称: i-search

用法示例: <i-search></i-search>

参数解释: 

attr:
- icon  String : 搜索框图标, 如果没有传icon则不搜索图标
- mode  String : search 则表示是一个可输入的搜索框,不可点击跳转,  no-search 则表示是一个不可输入的搜所框,可以点击进行跳转
- placeholder  String : 输入框的提示信息,如果没有传,则让搜索框的提示信息为空
- border  Boolean : none,则不显示搜索框的边框  如果传递了border则显示搜索框的边框
- align : 控制图标显示的位置, left  center  right
- shape : 控制搜索框的形态 : square 长方形   circle 椭圆形
- text : 控制搜索框后面是否有搜索按钮/搜索文本

event:
- searchinput : params 接收到输入框输入的内容
- clickinput  : 监听当前方法,可以实现不可以输入的搜索框点击效果



