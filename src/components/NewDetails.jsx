import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import api from '../services/api'

import './NewDetails.css'

function NewDetails() {
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
		<article>
			<div className="new-container">
				<div>
					<span className="author">{noticia.autor}</span>
					<span className="date">{noticia.dataPublicacao}</span>
				</div>
				<div className="title">
					<h2>{noticia.titulo}</h2>
				</div>
        <span className="descricao">{noticia.descricao}</span>
			</div>
			<div className="text">
				{noticia.conteudo}
			</div>
		</article>
	)
}

export default NewDetails