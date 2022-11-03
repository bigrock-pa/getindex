import React, { useState } from 'react';
import RatingUniverItem from "./RatingUniverItem";
import InputBlog from "./UI/input/InputBlog";

const RatingUniverList = ({ univers }) => {

	const [sortedfield, setSortedField] = useState(null);

	let sortedRows = [...univers];
	// if (sortedfield !== null) {
	// 	sortedRows.sort((a, b) => {
	// 		if (a[sortedfield] < b[sortedfield]) {
	// 			return -1;
	// 		}
	// 		if (a[sortedfield] > b[sortedfield]) {
	// 			return 1;
	// 		}
	// 		return 0;
	// 	});
	// }

	if (sortedfield !== null) {
		sortedRows.sort((a, b) => {
			if (a[sortedfield.key] < b[sortedfield.key]) {
				return sortedfield.direction === "ascending" ? -1 : 1;
			}
			if (a[sortedfield.key] > b[sortedfield.key]) {
				return sortedfield.direction === "ascending" ? 1 : -1;
			}
			return 0;
		});
	}

	const requestSort = key => {
		let direction = "ascending";
		// if (sortedfield === null) {
		// 	setSortedField({ key, direction })
		// }
		if (sortedfield && sortedfield.key === key && sortedfield.direction === "ascending") {
			direction = "descending";
		}
		setSortedField({ key, direction });
	};

	const [searchList, setSearchList] = useState();
	const handleChange = event => {
		setSearchList(event.target.value.toLowerCase());
	};

	const searchAndSortedRows = !searchList
		? sortedRows
		: sortedRows.filter(univer =>
			univer.name.toLowerCase().includes(searchList)
		);

	const getClassNamesFor = (name) => {
		if (!sortedfield) {
			return;
		}
		return sortedfield.key === name ? sortedfield.direction : undefined;
	};

	return (
		<div>
			<InputBlog class="form-control form-control-sm w-25 mb-3" placeholder="Поиск по университету" value={searchList} onChange={handleChange} />

			<table className="ratinguniverlist table table-bordered table-hover table-sm">
				<thead className="thead-dark">
					<tr>
						<td>
							<button type="button" onClick={() => requestSort("name")} className={getClassNamesFor('name')}>
								Наименование университета
							</button>
						</td>
						<td>
							<button type="button" onClick={() => requestSort("name_en")} className={getClassNamesFor('name_en')}>
								Наименование университета на английском языке
							</button>
						</td>
						<td>
							<button type="button" onClick={() => requestSort("url")} className={getClassNamesFor('url')}>
								URL-адрес ресурса
							</button>
						</td>
						<td>
							<button type="button" onClick={() => requestSort("min_points")} className={getClassNamesFor('min_points')}>
								Количество обязательных разделов по требованиям Министерства образования РФ
							</button>
						</td>
						<td>
							<button type="button" onClick={() => requestSort("our_points")} className={getClassNamesFor('our_points')}>
								Технический анализ
							</button>
						</td>
						<td>
							<button type="button" onClick={() => requestSort("top")} className={getClassNamesFor('top')}>
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