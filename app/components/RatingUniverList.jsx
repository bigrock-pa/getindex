import React, { useState } from 'react';
import RatingUniverItem from "./RatingUniverItem";
import InputBlog from "./UI/input/InputBlog";

const RatingUniverList = ({ univers }) => {

	const [sortedfield, setSortedField] = useState(null);

	let sortedRows = [...univers];
	if (sortedfield !== null) {
		sortedRows.sort((a, b) => {
			if (a[sortedfield] < b[sortedfield]) {
				return -1;
			}
			if (a[sortedfield] > b[sortedfield]) {
				return 1;
			}
			return 0;
		});
	}

	const [searchList, setSearchList] = useState();
	const handleChange = event => {
		setSearchList(event.target.value);
	};

	const searchAndSortedRows = !searchList
		? sortedRows
		: sortedRows.filter(univer =>
			univer.name.includes(searchList)
		);

	return (
		<div>
			<InputBlog class="form-control form-control-sm w-25 mb-3" placeholder="Поиск по университету" value={searchList} onChange={handleChange} />

			<table className="ratinguniverlist table table-bordered table-hover table-sm">
				<thead className="thead-dark">
					<tr>
						<td>
							<button type="button" onClick={() => setSortedField("name")}>
								Наименование университета
							</button>
						</td>
						<td>
							<button type="button" onClick={() => setSortedField("name_en")}>
								Наименование университета на английском языке
							</button>
						</td>
						<td>
							<button type="button" onClick={() => setSortedField("url")}>
								URL-адрес ресурса
							</button>
						</td>
						<td>
							<button type="button" onClick={() => setSortedField("min_points")}>
								Количество обязательных разделов по требованиям Министерства образования РФ
							</button>
						</td>
						<td>
							<button type="button" onClick={() => setSortedField("our_points")}>
								Технический анализ
							</button>
						</td>
						<td>
							<button type="button" onClick={() => setSortedField("top")}>
								Общая оценка
							</button>
						</td>
					</tr>
				</thead>
				<tbody>
					{searchAndSortedRows.map((univer) =>
						<RatingUniverItem univer={univer} key={univer.id} />
					)}
				</tbody>
			</table>
		</div>
	);
};

export default RatingUniverList;