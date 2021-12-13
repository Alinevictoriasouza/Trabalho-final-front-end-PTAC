import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import News from './components/News'
import Logo from './components/Logo'
import MenuHorizontal from './components/MenuHorizontal'
import Footer from './components/Footer'
import Barra from './components/Barra'
import NewDetails from './components/NewDetails'
import './App.css';

function App() {
	return (
    <BrowserRouter>
		<div className='grid-container'>
			<Logo />
			<MenuHorizontal />
      <Barra />
      <Routes>
					<Route path='/' element={<News />} />
						<Route path=':idNoticia' element={<NewDetails />} />
				</Routes>
			<Footer />
    
		</div>
        </BrowserRouter>

	);
}

export default App;