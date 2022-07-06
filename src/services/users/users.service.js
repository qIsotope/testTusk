import axios from 'axios';

const API_URL = 'https://frontend-test-assignment-api.abz.agency/api/v1'

axios.defaults.baseURL = API_URL

export const userService = {
	async getUsers() {
		return await axios.get(`/users?page=1&count=6`)
	},
	async getPositions() {
		return await axios.get(`/positions`)
	},

	async getForPage(page) {
		return await axios.get(`/users?page=${page}&count=6`)
	},
	async getToken() {
		return await axios.get(`/token`)
	},
	async postUser(body, token) {
		const config = {
			headers: {
				'content-type': 'multipart/form-data',
				'Token': token?.data?.token
			},
		};
		return await axios.post('/users', body, config)
	}

}