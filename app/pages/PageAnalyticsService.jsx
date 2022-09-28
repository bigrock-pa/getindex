import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Collapse from 'react-bootstrap/Collapse';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

const PageAnalyticsService = () => {

	const [openyandexiks, setOpenyandexiks] = useState(false);
	const [openviruses, setOpenviruses] = useState(false);
	const [openliveinternet, setOpenliveinternet] = useState(false);
	const [openyaсounter, setOpenyaсounter] = useState(false);

    const count = useSelector(state => state.repos.count)

	const [yandex_iks, setYandexiks] = useState('');
	const [viruses, setViruses] = useState('');
	const [liveinternet, setLiveinternet] = useState('');
	const [yaCounter, setYaсounter] = useState('');

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

				setYandexiks(content2.yandex_iks);
				setViruses(content2.viruses);
				setLiveinternet(content2.liveinternet);
				setYaсounter(content2.yaCounter);
			}
		)();
	});

	return (

		<div className="card mt-2">
            <h2>Данные сторонних сервисов</h2>
				<div className="analytics-item d-flex align-items-center flex-column flex-md-row" onClick={() => setOpenviruses(!openviruses)}
					aria-controls="collapse-viruses"
					aria-expanded={openviruses}>
					<div className="d-flex align-items-center col-12 col-md-4">
						<div className="analytics-itemico">
							{viruses ? <FontAwesomeIcon icon={faTimesCircle} className="text-danger me-2" /> : <FontAwesomeIcon icon={faCheckCircle} className="text-success me-2" /> }
						</div>
						<div>
							Яндекс Вирусы
						</div>
					</div>
					<div className="col-12 col-md-8">
						{viruses ? <span className="text-danger">Найден вредоносный код!</span> : <span className="text-success">Информация о вредоносном коде отсутствует</span>}
					</div>
				</div>
				<div>
					<Collapse in={openviruses}>
						<div className="analytics-iteminfo" id="collapse-viruses">
							<div className="analytics-iteminfo-inner">
								<b>Справка.</b> Яндекс предлагает проверку страницы сайта на вредоносный код (Safe Browsing).<br />
								Необязательно, что вы являетесь злоумышленником, возможно, ваш сайт взломали и поместили на эту страницу вредоносный код.<br /><br />
								Также вы можете проверить страницу на безопасность непосредственно в <a href="https://yandex.ru/safety/">веб-сервисе Яндекс</a>
							</div>
						</div>
					</Collapse>
				</div>
				<div className="analytics-item d-flex align-items-center flex-column flex-md-row" onClick={() => setOpenyandexiks(!openyandexiks)}
					aria-controls="collapse-yandexiks"
					aria-expanded={openyandexiks}>
						<div className="d-flex align-items-center col-12 col-md-4">
							<div className="analytics-itemico">
								{yandex_iks ? <FontAwesomeIcon icon={faCheckCircle} className="text-success me-2" /> : <FontAwesomeIcon icon={faTimesCircle} className="text-danger me-2" /> }
							</div>
							<div>
								Яндекс ИКС
							</div>
						</div>
					<div className="col-12 col-md-8"> 
						{yandex_iks ? yandex_iks : <span className="text-danger">Данные отсутствуют</span>}
					</div>
				</div>
				<div>
					<Collapse in={openyandexiks}>
						<div className="analytics-iteminfo" id="collapse-yandexiks">
							<div className="analytics-iteminfo-inner">
								<b>Справка.</b> Поисковая система Яндекс ввела свой собственный параметр для оценки сайта - индекс качества сайта.
								Индекс качества сайта — это показатель того, насколько полезен ваш сайт для пользователей с точки зрения Яндекса.<br />
								Чем больше Яндекс ИКС - тем более качественный ваш сайт. Небольшие блоги и сайты одностраничники имеют менее 200 Яндекс ИКС.<br />
								Информационные порталы, сайты больших изданий и СМИ имеют показатель более 500-1000 Яндекс ИКС.
							</div>
						</div>
					</Collapse>
				</div>
				<div className="analytics-item d-flex align-items-center flex-column flex-md-row" onClick={() => setOpenliveinternet(!openliveinternet)}
					aria-controls="collapse-liveinternet"
					aria-expanded={openliveinternet}>
					<div className="d-flex align-items-center col-12 col-md-4">
						<div className="analytics-itemico">
							{liveinternet ? <FontAwesomeIcon icon={faCheckCircle} className="text-success me-2" /> : <FontAwesomeIcon icon={faTimesCircle} className="text-danger me-2" /> }
						</div>
						<div>
							Сервис статистики liveinternet
						</div>
					</div>
					<div className="col-12 col-md-8">
						{liveinternet ? <span className="text-success">имеется</span> : <span className="text-danger">Данные отсутствуют</span>}
					</div>
				</div>
				<div>
					<Collapse in={openliveinternet}>
						<div className="analytics-iteminfo" id="collapse-liveinternet">
							<div className="analytics-iteminfo-inner">
								<b>Справка.</b> Сервис статистики liveinternet.
							</div>
						</div>
					</Collapse>
				</div>
				<div className="analytics-item d-flex align-items-center flex-column flex-md-row" onClick={() => setOpenyaсounter(!openyaсounter)}
					aria-controls="collapse-yaсounter"
					aria-expanded={openyaсounter}>
					<div className="d-flex align-items-center col-12 col-md-4">
						<div className="analytics-itemico">
							{yaCounter ? <FontAwesomeIcon icon={faCheckCircle} className="text-success me-2" /> : <FontAwesomeIcon icon={faTimesCircle} className="text-danger me-2" /> }
						</div>
						<div>
							Сервис статистики Яндекс Метрика
						</div>
					</div>
					<div className="col-12 col-md-8">
						{yaCounter ? <span className="text-success">имеется</span> : <span className="text-danger">Данные отсутствуют</span>}
					</div>
				</div>
				<div>
					<Collapse in={openyaсounter}>
						<div className="analytics-iteminfo" id="collapse-yaсounter">
						<div className="analytics-iteminfo-inner">
							<b>Справка.</b> Сервис статистики Яндекс.Метрика.
						</div>
						</div>
					</Collapse>
				</div>
        </div>

	);
};

export default PageAnalyticsService;