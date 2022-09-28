import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Moment from 'react-moment';
import '../assets/desktop.png';
import '../assets/desktop_screen.png';
import '../assets/phone.png';
import '../assets/phone_screen.png';

const PageAnalyticsStats = () => {

	const count = useSelector(state => state.repos.count);

	const [updated_at, setUpdatedat] = useState('');

	useEffect(() => {
		(
			async () => {
				const response = await fetch('https://getindex.ru/back/api/V1/site?url=' + count, {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({
						updated_at
					}),
					credentials: 'include',
				});

				const content2 = await response.json();
				setUpdatedat(content2.updated_at);
			}
		)();
	});

	return (
		<>
			<div className="analytics-screens d-flex align-items-center flex-column flex-md-row justify-content-around">
				<div className="analytics-desktop"><div className="analytics-desktopscreen"><img src="/assets/desktop_screen.png" /></div><img src="/assets/desktop.png" width="400px" /></div>
				<div className="analytics-phone"><div className="analytics-phonescreen"><img src="/assets/phone_screen.png" /></div><img src="/assets/phone.png" width="150px" /></div>
			</div>

			<div className="card">
				<div className="analytics-item d-flex align-items-center flex-column flex-md-row">
					<div className="d-flex align-items-center col-12 col-md-4">
						Дата последней проверки
					</div>
					<div className="col-12 col-md-8">
						<Moment format="DD.MM.YYYY HH:mm">{updated_at ? updated_at : <span className="text-danger">Данные отсутствуют</span>}</Moment>
					</div>
				</div>
			</div>
		</>
	);
};

export default PageAnalyticsStats;