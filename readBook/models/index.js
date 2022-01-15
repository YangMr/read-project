import Http from "@/utils/http.js"
class Index{
	/**
	 * 获取首页列表的数据, 包含猜你喜欢 、 书籍 、 轮播的数据
	 */
	static getIndexList(){
		return Http.request({
			url : "/app_inde",
			method : "GET"
		})
	}
}

export default Index