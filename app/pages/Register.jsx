import React, { useState } from 'react';
import { Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';

const Register = () => {

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [redirect, setRedirect] = useState(false);

	const auth = useSelector(state => state.repos2.auth)

	const submit = async (e) => {
		e.preventDefault();
		const response = await fetch('https://getindex.ru/back/api/V1/register', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			credentials: 'include',
			body: JSON.stringify({
				name,
				email,
				password
			})
		});
		if (response.ok) {
			let json = await response.json();
			setRedirect(true);
		}
		else {
			if (response.status == 500) {
				alert("Ошибка регистрации: " + response.status + ". Пользователь с таким логином или e-mail уже существует.");
			}
			else {
				alert("Ошибка регистрации: " + response.status + ". Введены некорректные данные.");
			}
		}
	}

	if (redirect) {
		return <Navigate to="/login" />
	}

	if (auth) {
		return <Navigate to="/" />
	}

	return (
		<div className="center-form d-flex justify-content-center align-items-center">
			<div className="login">
				<div className="container">
					<div className="d-flex flex-column align-items-center">
						<h1>Регистрация</h1>
						<form onSubmit={submit} className="text-center m-3">
							<h3 className="h3 mb-3 fw-normal">Пожалуйста зарегистрируйтесь</h3>

							<div className="form-floating pb-3">
								<input onChange={e => setName(e.target.value)} type="text" className="form-control" id="floatingName" placeholder="Name" required />
								<label htmlFor="floatingName">Введите имя</label>
							</div>

							<div className="form-floating pb-3">
								<input onChange={e => setEmail(e.target.value)} type="email" className="form-control" id="floatingInput" placeholder="name@example.com" required />
								<label htmlFor="floatingInput">Введите Email адрес</label>
							</div>

							<div className="form-floating pb-3">
								<input onChange={e => setPassword(e.target.value)} type="password" className="form-control" id="floatingPassword" placeholder="Password" required />
								<label htmlFor="floatingPassword">Введите пароль</label>
							</div>

							<button className="w-100 btn btn-lg btn-primary" type="submit">Зарегистрироваться</button>
						</form>
					</div>

				</div>
			</div>
		</div>
	);
};

export default Register;