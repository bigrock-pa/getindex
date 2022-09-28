import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from "react-router-dom";
import PageAnalyticsStats from "./PageAnalyticsStats";
import PageAnalyticsHtml from "./PageAnalyticsHtml";
import PageAnalyticsServer from "./PageAnalyticsServer";
import PageAnalyticsService from "./PageAnalyticsService";

const PageAnalytics = () => {

	const count = useSelector(state => state.repos.count)


	//const link = ('https://getindex.ru/screenshots/' + count + '.png')

	if (!count) {
		return <Navigate to="/" />
	}

	return (

		<div className="container analytics">

			<h1>Анализ сайта {count}</h1>
			<PageAnalyticsStats />

			<PageAnalyticsHtml />

			<PageAnalyticsServer />

			<PageAnalyticsService />

		</div>

	);
};

export default PageAnalytics;