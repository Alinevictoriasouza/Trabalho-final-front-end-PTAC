import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import api from '../services/api'

function Noticia() {
	let params = useParams()

	const [noticia, setNoticia] = useState([])
	
	useEffect(() => {
		api
			.get(`/noticias/visualizar?id=${params.idNoticia}`)
			.then(response => {
				setNoticia(response.data)
			})
			.catch(err => {
				console.log('Deu ruim: ', err)
			})
	}, [])

	return (
		<h1>{noticia.titulo}</h1>
	)
}

export default Noticia