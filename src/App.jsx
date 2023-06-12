import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import brand from './assets/brand-yampi.svg'

function App() {
	const [count, setCount] = useState(0)

	return (
		<div className='auth-box'>
			<div className='inner-authbox'>
				<div className='title-container'>
					<img className='logo-yampi' src={brand} alt="brand-yampi" />
					<h1 className='title-f20'>Identifique-se</h1>
					<p className='text-f15'>Digite seu e-mail e senha</p>
				</div>
				<form className='form-container'>
					<div className='form-group'>
						<label htmlFor="form-stacked-text" className='label-block'>E-mail</label>
						<input type="email" name="email" placeholder='john@yampi.com' className='input-block'/>
					</div>
					<div className='form-group'>
						<label htmlFor="form-stacked-text" className='label-block'>
							<span>Senha</span>
							<a href="https://app.yampi.com.br/">Esqueci minha senha</a>
						</label>
						<input type="email" name="email" placeholder='john@yampi.com' className='input-block'/>
					</div>
					<button className='button-submit'>Entrar</button>
				</form>
			</div>

		</div>
	)
}

export default App
