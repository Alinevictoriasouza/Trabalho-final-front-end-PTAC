import axios from 'axios'

const api = axios.create({
	baseURL: 'https://meuapp.alinesouza1.repl.co'
})

export default api