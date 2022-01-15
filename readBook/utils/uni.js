/**
 * 将uni api 进行promise化
 * @param {Object} method
 * @param {Object} options
 */
function uniToPromise (method,options) {
	return new Promise((resolve,reject)=>{
		options.success = resolve
		options.fail = (error) => {
			reject(error)
		}
		uni[method](options)
	})
}


/**
 * 导出uniToPromise方法
 */
export {uniToPromise}