import {uniToPromise} from "@/utils/uni.js"
import APIConfig from "@/config/api.js"
import exceptionMessage from "@/config/exception-message.js"
class Http {
	static async request({url,method = "GET", data = {}, header = {}}){
		let res 
		try{
			res = await uniToPromise("request",{
				url : APIConfig.baseUrl + url,
				method,
				header : {
					...header
				},
				data,
			})
		}catch(e){
			console.log(e)
			Http._showError(-1,e.errMsg)
		}
		
		//请求成功
		if(res.statusCode < 400){
			return res.data
		}
		
		//TODO 请求失败
		if(res.statusCode === 401 ){
			//TODO 令牌失效
			return
		}
		
		Http._showError(res.data.error_code,res.data.message)
	}
	
	static _showError(errorCode,message){
		let title 
		title = exceptionMessage[errorCode] || message || '发生未知错误'
		uni.showToast({
			title,
			icon : "none",
			duration: 500
		})
	}
}
export default Http