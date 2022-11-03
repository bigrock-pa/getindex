import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Collapse from 'react-bootstrap/Collapse';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import Moment from 'react-moment';

const PageAnalyticsServer = () => {

	const count = useSelector(state => state.repos.count)

	const [openssl, setOpenssl] = useState(false);
	const [openrobot, setOpenrobot] = useState(false);
	const [openresponsestatus, setOpenresponsestatus] = useState(false);
	const [openrt, setOpenrt] = useState(false);
	const [opensponsordomain, setOpenSponsorDomain] = useState(false);
	const [openagedomain, setOpenAgeDomain] = useState(false);
	const [opencreateddomain, setOpenCreatedDomain] = useState(false);
	const [openip, setOpenIp] = useState(false);

	const [response_status, setResponsestatus] = useState('');
	const [robot, setRobot] = useState('');
	const [ssl, setSsl] = useState('');
	const [sponsor_domain, setSponsorDomain] = useState('');
	const [created_domain, setCreatedDomain] = useState('');
	const [age_domain, setAgeDomain] = useState('');
	const [ip, setIp] = useState('');

	useEffect(() => {
		(
			async () => {
				const response = await fetch('https://getindex.ru/back/api/V1/site?url=' + count, {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({
					}),
					credentials: 'include',
				});

				const content2 = await response.json();

				setRobot(content2.robot);
				setSsl(content2.ssl);
				setResponsestatus(content2.response_status);
				setSponsorDomain(content2.sponsor_domain);
				setCreatedDomain(content2.created_domain);
				setAgeDomain(content2.age_domain);
				setIp(content2.ip);
			}
		)();
	});

	return (

		<div className="card mt-2">
			<h2>Анализ данных сервера и других технических показателей</h2>
			<div className="analytics-item d-flex align-items-center flex-column flex-md-row" onClick={() => setOpenssl(!openssl)}
				aria-controls="collapse-ssl"
				aria-expanded={openssl}>
				<div className="d-flex align-items-center col-12 col-md-4">
					<div className="analytics-itemico">
						{ssl ? <FontAwesomeIcon icon={faCheckCircle} className="text-success me-2" /> : <FontAwesomeIcon icon={faTimesCircle} className="text-danger me-2" />}
					</div>
					<div>
						Наличие сертификата SSL (https)
					</div>
				</div>
				<div className="col-12 col-md-8">
					{ssl ? <span className="text-success">имеется</span> : <span className="text-danger">Данные отсутствуют</span>}
				</div>
			</div>
			<div>
				<Collapse in={openssl}>
					<div className="analytics-iteminfo" id="collapse-ssl">
						<div className="analytics-iteminfo-inner">
							<b>Справка.</b> SSL-сертификат – это цифровой сертификат, удостоверяющий подлинность веб-сайта и позволяющий использовать зашифрованное соединение.<br />
							Отсутствие сертификата ведёт к возможности злоумышленникам перехватить данные вашего сайта, в том числе данные от авторизации: логины, пароли и другие данные.
						</div>
					</div>
				</Collapse>
			</div>
			<div className="analytics-item d-flex align-items-center flex-column flex-md-row" onClick={() => setOpenresponsestatus(!openresponsestatus)}
				aria-controls="collapse-responsestatus"
				aria-expanded={openresponsestatus}>
				<div className="d-flex align-items-center col-12 col-md-4">
					<div className="analytics-itemico">
						{response_status ? <FontAwesomeIcon icon={faCheckCircle} className="text-success me-2" /> : <FontAwesomeIcon icon={faTimesCircle} className="text-danger me-2" />}
					</div>
					<div>
						Код ответа сервера
					</div>
				</div>
				<div className="col-12 col-md-8">
					{response_status ? response_status : <span className="text-danger">Данные отсутствуют</span>}
				</div>
			</div>
			<div>
				<Collapse in={openresponsestatus}>
					<div className="analytics-iteminfo" id="collapse-responsestatus">
						<div className="analytics-iteminfo-inner">
							<b>Справка.</b> Существует 5 групп классов от ответа сервера:
							<ul>
								<li>Информационные 100 - 199</li>
								<li>Успешные 200 - 299</li>
								<li>Перенаправления 300 - 399</li>
								<li>Клиентские ошибки 400 - 499</li>
								<li>Серверные ошибки 500 - 599</li>
							</ul>
							Для корректного отображения сайта и анализа в нашем веб-сервисе ваш сайт должен возвращать код сервера - 200.
						</div>
					</div>
				</Collapse>
			</div>
			<div className="analytics-item d-flex align-items-center flex-column flex-md-row" onClick={() => setOpenrobot(!openrobot)}
				aria-controls="collapse-robot"
				aria-expanded={openrobot}>
				<div className="d-flex align-items-center col-12 col-md-4">
					<div className="analytics-itemico">
						{robot ? <FontAwesomeIcon icon={faCheckCircle} className="text-success me-2" /> : <FontAwesomeIcon icon={faTimesCircle} className="text-danger me-2" />}
					</div>
					<div>
						Наличие файла robots.txt
					</div>
				</div>
				<div className="col-12 col-md-8">
					{robot ? <span className="text-success">имеется</span> : <span className="text-danger">Файл не найден</span>}
				</div>
			</div>
			<div>
				<Collapse in={openrobot}>
					<div className="analytics-iteminfo" id="collapse-robot">
						<div className="analytics-iteminfo-inner">
							<b>Справка.</b> Robots.txt — это текстовый файл, который содержит параметры индексирования сайта для роботов поисковых систем.<br />
							Параметры прописываемые в данном файле, как разрешают доступ для роботов сторонних систем, так их и ограничивают.<br />
							Это файл и эти настройки влияют на индексацию вашего сайта в поисковых системах.

							<div>
								<span className="btn btn-sm btn-primary col-3 mt-2" onClick={() => setOpenrt(!openrt)}
									aria-controls="collapse-rt"
									aria-expanded={openrt}>
									Показать содержимое файла robots.txt
								</span>
							</div>

							<Collapse className="mt-2" in={openrt}>
								<div id="collapse-rt">
									{robot ? robot : 'Данные отсутствуют'}
								</div>
							</Collapse>
						</div>
					</div>
				</Collapse>
			</div>

			<div className="analytics-item d-flex align-items-center flex-column flex-md-row" onClick={() => setOpenIp(!openip)}
				aria-controls="collapse-ip"
				aria-expanded={openip}>
				<div className="d-flex align-items-center col-12 col-md-4">
					<div className="analytics-itemico">
						{ip ? <FontAwesomeIcon icon={faCheckCircle} className="text-success me-2" /> : <FontAwesomeIcon icon={faTimesCircle} className="text-danger me-2" />}
					</div>
					<div>
						IP-адрес сервера
					</div>
				</div>
				<div className="col-12 col-md-8">
					{ip ? ip : <span className="text-danger">Данные отсутствуют</span>}
				</div>
			</div>
			<div>
				<Collapse in={openip}>
					<div className="analytics-iteminfo" id="collapse-ip">
						<div className="analytics-iteminfo-inner">
							<b>Справка.</b> IP-адрес сервера.
						</div>
					</div>
				</Collapse>
			</div>

			<div className="analytics-item d-flex align-items-center flex-column flex-md-row" onClick={() => setOpenSponsorDomain(!opensponsordomain)}
				aria-controls="collapse-sponsordomain"
				aria-expanded={opensponsordomain}>
				<div className="d-flex align-items-center col-12 col-md-4">
					<div className="analytics-itemico">
						{sponsor_domain ? <FontAwesomeIcon icon={faCheckCircle} className="text-success me-2" /> : <FontAwesomeIcon icon={faTimesCircle} className="text-danger me-2" />}
					</div>
					<div>
						Регистратор
					</div>
				</div>
				<div className="col-12 col-md-8">
					{sponsor_domain ? sponsor_domain : <span className="text-danger">Данные отсутствуют</span>}
				</div>
			</div>
			<div>
				<Collapse in={opensponsordomain}>
					<div className="analytics-iteminfo" id="collapse-sponsordomain">
						<div className="analytics-iteminfo-inner">
							<b>Справка.</b> Регистратор.
						</div>
					</div>
				</Collapse>
			</div>

			<div className="analytics-item d-flex align-items-center flex-column flex-md-row" onClick={() => setOpenAgeDomain(!openagedomain)}
				aria-controls="collapse-agedomain"
				aria-expanded={openagedomain}>
				<div className="d-flex align-items-center col-12 col-md-4">
					<div className="analytics-itemico">
						{age_domain ? <FontAwesomeIcon icon={faCheckCircle} className="text-success me-2" /> : <FontAwesomeIcon icon={faTimesCircle} className="text-danger me-2" />}
					</div>
					<div>
						Возраст домена (лет)
					</div>
				</div>
				<div className="col-12 col-md-8">
					{age_domain ? age_domain : <span className="text-danger">Данные отсутствуют</span>}
				</div>
			</div>
			<div>
				<Collapse in={openagedomain}>
					<div className="analytics-iteminfo" id="collapse-agedomain">
						<div className="analytics-iteminfo-inner">
							<b>Справка.</b> Возраст домена.
						</div>
					</div>
				</Collapse>
			</div>

			<div className="analytics-item d-flex align-items-center flex-column flex-md-row" onClick={() => setOpenCreatedDomain(!opencreateddomain)}
				aria-controls="collapse-createddomain"
				aria-expanded={opencreateddomain}>
				<div className="d-flex align-items-center col-12 col-md-4">
					<div className="analytics-itemico">
						{created_domain ? <FontAwesomeIcon icon={faCheckCircle} className="text-success me-2" /> : <FontAwesomeIcon icon={faTimesCircle} className="text-danger me-2" />}
					</div>
					<div>
						Дата регистрации домена
					</div>
				</div>
				<div className="col-12 col-md-8">
					<Moment format="DD.MM.YYYY HH:mm">{created_domain ? created_domain : <span className="text-danger">Данные отсутствуют</span>}</Moment>
				</div>
			</div>
			<div>
				<Collapse in={opencreateddomain}>
					<div className="analytics-iteminfo" id="collapse-createddomain">
						<div className="analytics-iteminfo-inner">
							<b>Справка.</b> Дата регистрации домена.
						</div>
					</div>
				</Collapse>
			</div>


		</div>

	);
};

export default PageAnalyticsServer;