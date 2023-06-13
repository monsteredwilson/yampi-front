import axios from "axios"

export const api = axios.create({
	baseURL: 'https://yampiback.onrender.com',
	timeout: 10000,
})