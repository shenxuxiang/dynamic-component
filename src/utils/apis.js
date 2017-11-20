export default {
	updateName(payload) {
		const { time, name } = payload;
		return  new Promise((resolve, reject) => {
			setTimeout(() => {
				if (payload.id === '123456') {
					resolve({
						ok: true,
						msg: 'updateName is success',
						resultData: {
							name,
						},
					})

				} else {
					reject({
						ok: false,
						msg: 'request_error',
						resultData: '服务器请求失败'
					})
				}
			}, time)
		})
	},
	updateSex(payload) {
		const { time, sex } = payload;
		return  new Promise((resolve, reject) => {
			setTimeout(() => {
				if (payload.id === '123456') {
					resolve({
						ok: true,
						msg: 'updateSex is success',
						resultData: {
							sex,
						},
					})

				} else {
					reject({
						ok: false,
						msg: 'request_error',
						resultData: '服务器请求失败',
					})
				}
			}, time)
		})
	},
	updateAge(payload) {
		const { time, age } = payload;
		return  new Promise((resolve, reject) => {
			setTimeout(() => {
				if (payload.id === '123456') {
					resolve({
						ok: true,
						msg: 'updateAge is success',
						resultData: {
							age,
						}
					})

				} else {
					reject({
						ok: false,
						msg: 'request_error',
						resultData: '服务器请求失败',
					})
				}
			}, time)
		})
	},
}