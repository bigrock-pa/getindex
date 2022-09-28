import React from 'react';
import { Link } from "react-router-dom";

const Page404 = () => {
	return (

		<div className="contact">
			<div className="container">
				<h1>Ошибка 404</h1>
				<span>Страница не найдена. </span>
				<Link to="/" className="p-2" title="Контакты">
					Вернуться на главную
				</Link>
			</div>
		</div>

	);
};

export default Page404;