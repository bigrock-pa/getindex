import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Collapse from 'react-bootstrap/Collapse';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

const PageAnalyticsHtml = () => {

    const count = useSelector(state => state.repos.count);

	const [opentitle, setOpentitle] = useState(false);
	const [opendescription, setOpendescription] = useState(false);
	const [openkeywords, setOpenkeywords] = useState(false);
	const [openh1h6, setOpenh1h6] = useState(false);
	const [openmetacharset, setOpenmetacharset] = useState(false);
	const [openmetaviewport, setOpenmetaviewport] = useState(false);
	const [openrazmetkaog, setOpenrazmetkaog] = useState(false);

	const [title, setTitle] = useState('');
	const [title_length, setTitlelength] = useState('');
	const [meta_description, setMetadescription] = useState('');
	const [meta_description_length, setMetadescriptionlength] = useState('');
	const [meta_keywords, setMetakeywords] = useState('');
	const [meta_keywords_length, setMetakeywordslength] = useState('');
	const [razmetka_og, setRazmetkaog] = useState('');
	const [h1, setH1] = useState('');
	const [h2, setH2] = useState('');
	const [h3, setH3] = useState('');
	const [h4, setH4] = useState('');
	const [h5, setH5] = useState('');
	const [h6, setH6] = useState('');
	const [meta_charset, setMetacharset] = useState('');
    const [meta_viewport, setMetaviewport] = useState('');

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
				setTitle(content2.title);
                setTitlelength(content2.title_length);
                setMetadescription(content2.meta_description);
				setMetadescriptionlength(content2.meta_description_length);
                setMetakeywords(content2.meta_keywords);
				setMetakeywordslength(content2.meta_keywords_length);
                setRazmetkaog(content2.razmetka_og);
				setH1(content2.h1);
				setH2(content2.h2);
				setH3(content2.h3);
				setH4(content2.h4);
				setH5(content2.h5);
				setH6(content2.h6);
				setMetacharset(content2.meta_charset);
                setMetaviewport(content2.meta_viewport);
			}
		)();
	});

	return (
		<div className="card mt-2">		
            <h2>Анализ кода страницы</h2>
            <div className="analytics-item d-flex align-items-center flex-column flex-md-row" onClick={() => setOpentitle(!opentitle)}
					aria-controls="collapse-title"
					aria-expanded={opentitle}>
                    <div className="d-flex align-items-center col-12 col-md-4">
                        <div className="analytics-itemico">{title ? <FontAwesomeIcon icon={faCheckCircle} className="text-success me-2" /> : <FontAwesomeIcon icon={faTimesCircle} className="text-danger me-2" /> }</div>
                        <div>Тег title</div>
                    </div>
                    <div className="col-12 col-md-8">
                        {title ? title : <span className="text-danger">Данные отсутствуют</span>}
                        <div>
                            {title_length ? title_length : <span className="text-danger">0</span>} символов
                        </div>
                    </div>
                </div>
				<div>
					<Collapse in={opentitle}>
						<div className="analytics-iteminfo" id="collapse-title">
                            <div className="analytics-iteminfo-inner">
                            <b>Справка.</b> Тег title - обязательный тег для HTML-страницы, он используется в поисковых системах, а также в браузерных вкладках.
							Обязательно размещайте ключевые слова вашего контента в title, это положительно воспринимается в поисковых системах.
							Название вашего сайта писать в тег title необязательно, поисковые системы его учитывают.
							Рекомендуемая длина тега title - не более 60-80 символов. Больше писать не рекомендуется - поисковые системы просто обрежут название,
							а пользователям большие заголовки во вкладке браузера также без надобности.
                            </div>
						</div>
					</Collapse>
				</div>
				<div className="analytics-item d-flex align-items-center flex-column flex-md-row" onClick={() => setOpendescription(!opendescription)}
					aria-controls="collapse-description"
					aria-expanded={opendescription}>    
                    <div className="d-flex align-items-center col-12 col-md-4">
                        <div className="analytics-itemico">{meta_description ? <FontAwesomeIcon icon={faCheckCircle} className="text-success me-2" /> : <FontAwesomeIcon icon={faTimesCircle} className="text-danger me-2" /> }</div>
                        <div>Мета тег description</div>
                    </div>
                    <div className="col-12 col-md-8">
                        {meta_description ? meta_description : <span className="text-danger">Данные отсутствуют</span>}
                        <div>
                            {meta_description_length ? meta_description_length : <span className="text-danger">0</span>} символов
                        </div>
                    </div>
                    </div>
				<div>
					<Collapse in={opendescription}>
						<div className="analytics-iteminfo" id="collapse-description">
                            <div className="analytics-iteminfo-inner">
							<b>Справка.</b> Мета тег «Description» - это описание страницы для поисковых роботов, прописывается между тегом «head», пользователи не видят его содержимое.<br />
							Рекомендуемая длина, для поисковой системы Google - 150-300 символов.
							Для поисковой системы Яндекс - 140-160 символов. Этот показатель косвенно влияет на SEO, через показатель CTR (от англ. «click-through-rate») - показатель кликабельности.
                            </div>
						</div>
					</Collapse>
				</div>
				<div className="analytics-item d-flex align-items-center flex-column flex-md-row" onClick={() => setOpenkeywords(!openkeywords)}
					aria-controls="collapse-keywords"
					aria-expanded={openkeywords}>
                    <div className="d-flex align-items-center col-12 col-md-4">
                        <div className="analytics-itemico">{meta_keywords ? <FontAwesomeIcon icon={faCheckCircle} className="text-success me-2" /> : <FontAwesomeIcon icon={faTimesCircle} className="text-danger me-2" /> }</div>    
					    <div>Мета тег keywords</div>
                    </div>
                    <div className="col-12 col-md-8">
                        {meta_keywords ? meta_keywords : <span className="text-danger">Данные отсутствуют</span>} 
                        <div>
                            {meta_keywords_length ? meta_keywords_length : <span className="text-danger">0</span>} символов
                        </div>
                    </div> 
				</div>
				<div>
					<Collapse in={openkeywords}>
						<div className="analytics-iteminfo" id="collapse-keywords">
                        <div className="analytics-iteminfo-inner">
							<b>Справка.</b> Мета тег «Keywords» – это ключевые слова, описывающие содержание интернет-страницы.
							Раньше этот тег массово использовался для SEO-продвижения, сейчас его важность заметно снизилась, но он также прописывается между тегом «head».
						</div>
                        </div>
					</Collapse>
				</div>
                <div className="analytics-item d-flex align-items-center flex-column flex-md-row" onClick={() => setOpenrazmetkaog(!openrazmetkaog)}
					aria-controls="collapse-razmetkaog"
					aria-expanded={openrazmetkaog}>
                    <div className="d-flex align-items-center col-12 col-md-4">
                        <div className="analytics-itemico">{razmetka_og ? <FontAwesomeIcon icon={faCheckCircle} className="text-success me-2" /> : <FontAwesomeIcon icon={faTimesCircle} className="text-danger me-2" /> }</div>
					    <div>Наличие OpenGraph микроразметки</div>
                    </div>
                    <div className="col-12 col-md-8">
                        {razmetka_og ? <span className="text-success">имеется</span> : <span className="text-danger">Данные отсутствуют</span>}
                    </div>
				</div>
                <div>
                    <Collapse in={openrazmetkaog}>
						<div className="analytics-iteminfo" id="collapse-razmetkaog">
                        <div className="analytics-iteminfo-inner">
							<b>Справка.</b> Микроразметка — это способ оптимизации семантики сайта, который позволяет роботам идентифицировать тип информации на странице и лучше структурировать ее в сниппетах выдачи или в соцсетях.<br />
							Open Graph – стандарт микроразметки, который позволяет формировать превью сайта при публикации в социальных сетях. <br />
							Стандарт Open Graph был разработан Facebook. Сейчас Open Graph используют Facebook, Яндекс, Вконтакте, Google+, Twitter, Pinterest и др.
						</div>
                        </div>
					</Collapse>
                </div>
                <div className="analytics-item d-flex align-items-center flex-column flex-md-row" onClick={() => setOpenh1h6(!openh1h6)}
					aria-controls="collapse-h1h6"
					aria-expanded={openh1h6}>
                    <div className="d-flex align-items-center col-12 col-md-4">
                        <div className="analytics-itemico">
                            {h1 ? <FontAwesomeIcon icon={faCheckCircle} className="text-success me-2" /> : <FontAwesomeIcon icon={faTimesCircle} className="text-danger me-2" /> }
                        </div>
					    <div>
                            Теги H1-H6
                        </div>
                    </div>
                    <div className="col-12 col-md-8">
                        {h1 ? <span className="text-success">Тег H1 имеется</span> : <span className="text-danger">Тег H1 не найден</span>}
                    </div>
				</div>
                <div>
                <Collapse in={openh1h6}>
					<div className="analytics-iteminfo" id="collapse-h1h6">
                    <div className="analytics-iteminfo-inner">
						<b>Справка.</b> Заголовки в HTML-коде h1-h6 дают общее понимание структурированности контента для пользователей и поисковых систем.<br />
						H1 заголовок на странице рекомендуется использовать не более одного раза. Другие H2-H6 заголовки уже в соответствие с контентом представленном на странице<br />
						Не добавляйте ссылки на теги h1-h6, это не рекомендуется.
                        <div className="m-2">
                <table className="table table-sm table-bordered">
                    <tbody>
                        <tr>
                            <td>
                                <b>h1:</b> {h1 ? h1 : <span className="text-danger">Тег не найден</span>}
                            </td>
                            <td>
                                <b>h4:</b> {h4 ? h4 : <span>Теги не найдены</span>}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <b>h2:</b> {h2 ? h2 : <span>Теги не найдены</span>}
                            </td>
                            <td>   
                                <b>h5:</b> {h5 ? h5 : <span>Теги не найдены</span>}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <b>h3:</b> {h3 ? h3 : <span>Теги не найдены</span>} 
                            </td>
                            <td>
                                <b>h6:</b> {h6 ? h6 : <span>Теги не найдены</span>} 
                            </td>
                        </tr>
                    </tbody>
                </table>
                </div>
                        </div>
					</div>
				</Collapse>
                </div>
                <div className="analytics-item d-flex align-items-center flex-column flex-md-row" onClick={() => setOpenmetacharset(!openmetacharset)}
					aria-controls="collapse-metacharset"
					aria-expanded={openmetacharset}>
                    <div className="d-flex align-items-center col-12 col-md-4">
                        <div className="analytics-itemico">
                            {meta_charset ? <FontAwesomeIcon icon={faCheckCircle} className="text-success me-2" /> : <FontAwesomeIcon icon={faTimesCircle} className="text-danger me-2" /> }
                        </div>
					    <div>
                            Кодировка
                        </div>
                    </div>
                    <div className="col-12 col-md-8">
                        {meta_charset ? meta_charset : <span className="text-danger">Данные отсутствуют</span>}
                    </div>
				</div>
                <div>
                    <Collapse in={openmetacharset}>
                    <div className="analytics-iteminfo">
						<div className="analytics-iteminfo-inner" id="collapse-metacharset">
							<b>Справка.</b> Мета тег charset. Рекомендуем использовать кодировку UTF-8 для корректного отображения контента на сайте. Некоторые системы управления сайтом (CMS), а также библиотека AJAX поддерживают именно кодировку UTF-8.
						</div>
                    </div>
					</Collapse>
                </div>
				<div className="analytics-item d-flex align-items-center flex-column flex-md-row" onClick={() => setOpenmetaviewport(!openmetaviewport)}
					aria-controls="collapse-metaviewport"
					aria-expanded={openmetaviewport}>
                    <div className="d-flex align-items-center col-12 col-md-4">
                        <div className="analytics-itemico">
                            {meta_viewport ? <FontAwesomeIcon icon={faCheckCircle} className="text-success me-2" /> : <FontAwesomeIcon icon={faTimesCircle} className="text-danger me-2" /> }
                        </div>
					    <div>
                            Тег viewport
                        </div>
                    </div>
                    <div className="col-12 col-md-8">
                        {meta_viewport ? <span className="text-success">имеется</span> : <span className="text-danger">Данные отсутствуют</span>}
                    </div>
				</div>
                <div>
                    <Collapse in={openmetaviewport}>
                    <div className="analytics-iteminfo">
						<div className="analytics-iteminfo-inner" id="collapse-metaviewport">
							<b>Справка.</b> Мета тег viewport отвечает за корректное отображения сайта на кокретных экранах устройств. Большой процент аудитории сегодня именно пользователи мобильных устройств и наличии тега, для правильного отображения сайта обязательно.
						</div>
                    </div>
					</Collapse>
                </div>
        </div>

	);
};

export default PageAnalyticsHtml;