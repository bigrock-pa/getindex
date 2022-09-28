import React from 'react';

const Profile = () => {

	for (var i = 1; i <= 10; i++) {
		setTimeout(() => {
			console.log(i);
		}, 1000)
	}

	return (

		<div className="profile">
			<div className="container">
				<h1>Личный профиль</h1>
				<span>Страница в процессе редактирования</span>
			</div>
		</div>

	);
};

export default Profile;