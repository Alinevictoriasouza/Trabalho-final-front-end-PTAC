import React from 'react'
import { Link } from 'react-router-dom';

import './CardNews.css'

function CardNoticia(props) {
	return (
		<div className="card-container">
			<div>
				<span className="author">{props.autor}</span>
				<span className="date">{props.dataPublicacao}</span>
      
			</div>
			<Link to={props.idNoticia} className="title">
				<h2>{props.titulo}</h2>
			</Link>
      <span className="descricao">{props.descricao}</span>
		</div>
	)
}

export default CardNoticia