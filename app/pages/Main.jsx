import React, { useState } from 'react';
import { Navigate } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import "swiper/css/navigation";
import 'swiper/css';
import './main.css';
import '../assets/main_img_1.png';
import '../assets/main_service_1.png';
import '../assets/main_service_2.png';
import '../assets/main_service_3.png';
import '../assets/main_service_4.png';
import '../assets/main_service_5.png';
import { useDispatch, useSelector } from 'react-redux';
import { setCount } from '../reducers/reposReduser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Main = () => {

	const dispatch = useDispatch()
	const count = useSelector(state => state.repos.count)

	const [url, setSite] = useState('');
	const [redirect, setRedirect] = useState(false);

	const submit = async (e) => {
		e.preventDefault();
		const response = await fetch('https://getindex.ru/back/api/V1/site', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				url
			})
		});
		if (response.ok) {
			const contentt = await response.json();
			console.log(contentt);
			if (contentt.response_status != 404) {
				dispatch(setCount(url));
				setRedirect(true);
			} else {
				alert("Данного URL-адреса не существует. Ошибка:" + contentt.response_status);
			}
		} else {
			alert("Сайт недоступен для сканирования. Ошибка:" + response.status);
		}
	}

	if (redirect) {
		return <Navigate to="/analytic" />
	}

	return (
		<div className="main">

			<div className="audit d-flex text-white align-items-center py-3">
				<div className="container">
					<div className="App col-12">
						<div className="aurit-search d-flex flex-column align-items-center col-12">
							<div className="d-flex col-8 text-center mb-3">
								<div className="d-flex flex-column col-12">
									<h1>Инструменты аналитики</h1>
									<span>Проверьте любой сайт и узнайте о его качестве</span>
								</div>
							</div>
							<form onSubmit={submit} className="d-flex col-10 col-md-6 justify-content-between mainform">
								<div className="form-floating w-100">
									<input onChange={e => setSite(e.target.value)} id="floatingSite" className="form-control mainform-input" type="text" placeholder="Введите домен" />
									<label htmlFor="floatingSite">Введите домен</label>
								</div>
								<button className="btn mainform-btn flex-shrink-0" type="submit"><span class="mainform-btn-textlg">Анализировать</span><span class="mainform-btn-textsm"><FontAwesomeIcon icon={faSearch} /></span></button>
							</form>
						</div>
					</div>
				</div>
			</div>

			<div className="module py-3">
				<div className="container module-blocktext">
					<div>
						<h2 className="text-center">Что анализирует наш сервис</h2>

						<Swiper
							navigation={true}
							modules={[Navigation]}
							spaceBetween={50}
							slidesPerView={1}
							breakpoints={{
								576: {
									// width: 576,
									slidesPerView: 2,
								},
								768: {
									// width: 768,
									slidesPerView: 3,
								},
							}}
						>
							<SwiperSlide><div className="d-flex flex-column text-center"><div className="module-serviceico"><img src="/assets/main_service_1.png" width="50%" /></div><code>Анализ доменного имени</code><span>Проверка на возраст и общее отношение поисковых систем к сайту очень важно для успеха сайта</span></div></SwiperSlide>
							<SwiperSlide><div className="d-flex flex-column text-center"><div className="module-serviceico"><img src="/assets/main_service_2.png" width="50%" /></div><code>SEO анализ на ошибки</code><span>Чем меньше вы совершаете ошибок при создании сайта, тем лучше отношение поисковых систем и пользователей к нему</span></div></SwiperSlide>
							<SwiperSlide><div className="d-flex flex-column text-center"><div className="module-serviceico"><img src="/assets/main_service_3.png" width="50%" /></div><code>Технический анализ</code><span>Общие сведения о состоянии сайта, какие технологии используются, кодировка, гео-данные и тд</span></div></SwiperSlide>
							<SwiperSlide><div className="d-flex flex-column text-center"><div className="module-serviceico"><img src="/assets/main_service_4.png" width="50%" /></div><code>Внутренняя оптимизация</code><span>Соответствие "стандартам" поисковых систем необходимо для более высоких позиций в выдаче при ранжировании поисковых запросов</span></div></SwiperSlide>
							<SwiperSlide><div className="d-flex flex-column text-center"><div className="module-serviceico"><img src="/assets/main_service_5.png" width="50%" /></div><code>Подключаемые сервисы</code><span>Сторонние веб-сервисы и JS-библиотеки, которые подключаются сайт: сервисы статистики, социальные сети, фреемворки и тд</span></div></SwiperSlide>
						</Swiper>
					</div>
				</div>
			</div>
			<div className="info p-3 mt-5">
				<div className="container d-flex flex-md-row flex-column">
					<div className="col-12 col-lg-6 col-md-8">
						<h2>Для чего это нужно</h2>
						<p>Создать сайт и наполнить контентом - это малая часть для достижения успеха. Для наращивания популярности необходимо заниматься его технической стороной:
							доменное имя должно содержать хорошую историю, на сайте не должно быть технических ошибок, как на уровне элементарного формирования HTML, так и на уровне настройки сервера,
							необходимо проводить внутреннюю оптимизацию над своим сайтом, его контентом и много, много чего ещё.</p>
						<p>Наш сервис существует для того, чтобы дать понять администраторам сайтов, что они делают не так, где у них ошибки, на что нужно обратить внимание.</p>
						<p>Мы заинтересованны в полноте данных, которые вы получаете, поэтому в ближайшее время сервис будет расширяться по своему функционалу,
							сейчас вы видите только малую часть, от того, что мы планируем добавить в наш веб-сервис GetIndex.ru.</p>
					</div>
					<div className="bg-img col-12 col-lg-6 col-md-4 d-flex align-items-center justify-content-center">
						<img src="/assets/main_img_1.png" width="400px" />
					</div>
				</div>
			</div>
			<div className="info p-3 mt-5">
				<div className="container text-center">
					<h2>Ключевые направления веб-сервиса</h2>
					<div className="d-flex flex-column flex-md-row">
						<div className="col-12 col-md-4">
							<div className="card m-2">
								<div className="card-body">
									<h4 className="card-title">Технический аудит</h4>
									<p className="card-text">Разметка HTML и CSS</p>
									<p className="card-text">Ответы сервера</p>
									<p className="card-text">Скорость загрузки страниц</p>
								</div>
							</div>
						</div>

						<div className="col-12 col-md-4">
							<div className="card m-2">
								<div className="card-body">
									<h4 className="card-title">SEO-аудит</h4>
									<p className="card-text">Структура кода</p>
									<p className="card-text">Качество контента</p>
									<p className="card-text">Оптимизация кода</p>
								</div>
							</div>
						</div>

						<div className="col-12 col-md-4">
							<div className="card m-2">
								<div className="card-body">
									<h4 className="card-title">Юзабилити-аудит</h4>
									<p className="card-text">Адаптация под мобильные гаджеты</p>
									<p className="card-text">Анализ с точки зрения пользователя</p>
									<p className="card-text">Конверсия отдельных элементов</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		</div>
	);
};

export default Main;