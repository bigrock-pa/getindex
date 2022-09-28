import React from 'react';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './header.css';
import { useSelector } from 'react-redux';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {

	const auth = useSelector(state => state.repos2.auth)

	const logout = async () => {
		await fetch('https://getindex.ru/back/api/V1/logout', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			credentials: 'include',
		});
		window.location.reload();
	}

	let authmenu;

	if (auth === '') {
		authmenu = (
			<Nav className="header-auth col-12 col-md-2 d-flex justify-content-start justify-content-md-end p-2">
				<Nav.Link href="/login" className="btn text-white btn-primary me-0 me-lg-2 mb-2 mb-lg-0 px-3" title="Авторизация">
					Авторизация
				</Nav.Link>
				<Nav.Link href="/register" className="btn text-white btn-primary mb-2 mb-lg-0 px-3" title="Регистрация">
					Регистрация
				</Nav.Link>
			</Nav>
		)
	} else {
		authmenu = (
			<Nav className="header-auth col-12 col-lg-2 d-flex justify-content-start justify-content-md-end p-2">
				<Nav.Link href="/profile" className="btn text-white btn-primary me-0 me-lg-2 mb-2 mb-lg-0 px-3" title="Профиль">
					Профиль
				</Nav.Link>
				<Nav><Link to="/" className="btn text-white btn-primary mb-2 mb-lg-0 px-3" onClick={logout} title="Выйти">
					Выйти
				</Link></Nav>
			</Nav>
		)
	}

	return (


		<header>
			<Navbar className="header" bg="light" expand="lg">
				<Container>
					<Navbar.Brand><Nav.Link href="/" className="nav-link p-1 nav-link d-flex align-items-center" title="Главная страница">
						<img className="logo" src="/favicon.png" /><span className="logo-text">GetIndex.ru</span>
					</Nav.Link></Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link href="/blog" className="nav-link text-center me-2" title="Блог">
								Блог
							</Nav.Link>
							<Nav.Link href="/tools" className="nav-link text-center me-2" title="Инструменты">
								Инструменты
							</Nav.Link>
							<Nav.Link href="/contact" className="nav-link text-center me-2" title="Контакты">
								Контакты
							</Nav.Link>
							<NavDropdown title="Рейтинги" id="basic-nav-dropdown" className="text-center">
								<NavDropdown.Item href="/rating" title="Рейтинг вузов">
									<span className="nav-link text-center">Рейтинг сайтов университетов</span>
								</NavDropdown.Item>
							</NavDropdown>
						</Nav>

						{authmenu}

					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
};

export default Header;