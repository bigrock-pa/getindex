import React, { useState } from 'react';
import { Navigate } from "react-router-dom";
import './login.css';
import { useSelector } from 'react-redux';

const Login = () => {

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [redirect, setRedirect] = useState(false);

	const auth = useSelector(state => state.repos2.auth)

	const submit = async (e) => {
		e.preventDefault();
		const response = await fetch('https://getindex.ru/back/api/V1/login', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			credentials: 'include',
			body: JSON.stringify({
				email,
				password
			})
		});
		if (response.ok) {
			let json = await response.json();
			setRedirect(true);
			window.location.reload();
		} else {
			alert("Ошибка авторизации: " + response.status + ". Неверное имя пользователя и/или пароль");
		}
	}

	if (redirect) {
		return <Navigate to="/" />
	}

	if (auth) {
		return <Navigate to="/" />
	}

	return (
		<div className="center-form d-flex justify-content-center align-items-center">
			<div className="login">
				<div className="container">
					<div className="d-flex flex-column align-items-center">
						<h1>Авторизация</h1>
						<form onSubmit={submit} className="text-center m-3">
							<h4 className="h3 mb-3 fw-normal">
								Пожалуйста авторизуйтесь
							</h4>

							<div className="form-floating pb-3">
								<input onChange={e => setEmail(e.target.value)} type="email" className="form-control" id="floatingInput" placeholder="name@example.com" required />
								<label htmlFor="floatingInput">Email адрес</label>
							</div>

							<div className="form-floating pb-3">
								<input onChange={e => setPassword(e.target.value)} type="password" className="form-control" id="floatingPassword" placeholder="Password" required />
								<label htmlFor="floatingPassword">Пароль</label>
							</div>

							<button className="w-100 btn btn-lg btn-primary" type="submit">Войти</button>
						</form>
					</div>

				</div>
			</div>
		</div>
	);
};

export default Login;