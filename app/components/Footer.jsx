import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
	return (

		<footer className="footer">
			<div className="container">
				<div className="pt-3 mt-4">
					<ul className="nav justify-content-center border-bottom pb-3 mb-3">
						<li className="nav-item"><Link to="/tools" className="nav-link px-2 text-muted" title="Инструменты">Инструменты</Link></li>
						<li className="nav-item"><Link to="/blog" className="nav-link px-2 text-muted" title="Блог">Блог</Link></li>
						<li className="nav-item"><Link to="/contact" className="nav-link px-2 text-muted" title="Контакты">Контакты</Link></li>
					</ul>
					<p className="text-center text-muted"><Link to="/" className="nav-link px-2 text-muted">© 2022 Getindex.ru - Инструменты для аналитики сайтов</Link></p>
				</div>
			</div>
		</footer>

	);
};

export default Footer;