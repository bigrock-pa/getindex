import React, { useEffect, useState } from 'react';
import RatingUniverList from "../components/RatingUniverList";
import RatingUniver from "../API/RatingUniver";
import SelectBlog from "../components/UI/select/SelectBlog";

function Rating() {
	const [univers, setUnivers] = useState([]);
	const [loading, setLoading] = useState(false);

	async function fetchUnivers() {
		setLoading(true);
		const univers = await RatingUniver.getAll();
		setUnivers([...univers].sort((a, b) => {
			if (a.top < b.top) {
				return 1;
			}
			if (a.top > b.top) {
				return -1;
			}
			return 0;
		}
		));
		setLoading(false);
	}

	// const [selectedSort, setSelectedSort] = useState();
	// const sortUnivers = (sort) => {
	// 	setSelectedSort(sort);
	// 	setUnivers([...univers].sort((a, b) => a[sort].localeCompare(b[sort])));
	// 	setUnivers([...univers].sort((a, b) => {
	// 		if (a[sort] < b[sort]) {
	// 			return 1;
	// 		}
	// 		if (a[sort] > b[sort]) {
	// 			return -1;
	// 		}
	// 		return 0;
	// 	}
	// 	));
	// 	console.log(sort)
	// }

	useEffect(() => {
		fetchUnivers()
	}, [])


	return (

		<div className="bloglist">
			<div className="container">
				<h1>Рейтинг сайтов университетов</h1>
				<p>В данный момент ведётся разработка рейтинга сайтов университетов. Основными критериями оценки разрабатываемого рейтинга будут являться технические параметры сайта. Методология оценки подробнее будет описана позже.</p>
				<p>Цель данного рейтинга, заменить существующий аналог (Ranking Web of Universities, webometrics.info), который прекратил оценку сайтов Российской Федерации с февраля 2022 года.</p>
				<p>Первая планируемая дата публикации результатов: <b>1.10.2022</b>.</p>
				<p>Нашли ошибку, неточные данные или у вас остались вопросы?  Напишите нам: <a href="mailto:adv@getindex.ru">adv@getindex.ru</a></p>
				<h3>Список оцениваемых сайтов:</h3>
				<div>
					{/* <SelectBlog
						value={selectedSort}
						onChange={sortUnivers}
						defaultValue="Сортировка"
						option={[
							{ value: 'name', name: 'По имени' },
							{ value: 'name_en', name: 'По имени (англ.)' },
							{ value: 'min_points', name: 'Количество обязательных разделов по требованиям Министерства образования РФ' },
							{ value: 'our_points', name: 'Технический анализ' },
							{ value: 'top', name: 'Общая оценка' }
						]}
					/> */}
				</div>
				{loading
					? <div className="d-flex w-100 justify-content-center align-items-center loading-block"><div className="spinner-grow" role="status"><span className="sr-only">Загрузка...</span></div></div>
					: <RatingUniverList univers={univers} />
				}
			</div>
		</div>

	);
};

export default Rating;