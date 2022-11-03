import React, { useEffect, useState } from 'react';
import MyIp from "../API/MyIp";

function MyIpPage() {

	const [ip, setIp] = useState();

	useEffect(() => {
		fetchMyIp()
	}, [])

	async function fetchMyIp() {
		const myipdata = await MyIp.getAll();
		setIp(myipdata);
	}

	return (

		<div className="myip">
			<div className="container">
				<h1>Узнать свой IP адрес</h1>
				<div>Ваш IP адрес:</div>
				<h4>{ip}</h4>
			</div>
		</div>

	);
};

export default MyIpPage;