import React, { useEffect, useState } from 'react';
import BlogList from "../components/BlogList";
import BlogPost from "../API/BlogPost";
import SelectBlog from "../components/UI/select/SelectBlog";
import { useSelector } from 'react-redux';

function Blog() {
	const [posts, setPosts] = useState([]);
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const [id_type, setIdtype] = useState('');
	const [loading, setLoading] = useState(false);

	const auth = useSelector(state => state.repos2.auth)

	let adminblock;

	async function fetchPosts() {
		setLoading(true);
		const posts = await BlogPost.getAll();
		setPosts(posts);
		setLoading(false);
	}

	const submit = async (e) => {
		e.preventDefault();
		const response = await fetch('https://getindex.ru/back/api/V1/blog', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				title,
				content,
				id_type
			})
		});
		const contentt = await response.json();
		console.log(contentt);
		const posts = await BlogPost.getAll();
		setPosts(posts)
	}

	const [selectedSort, setSelectedSort] = useState();
	const sortPosts = (sort) => {
		setSelectedSort(sort);
		setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
		console.log(sort)
	}

	useEffect(() => {
		fetchPosts()
	}, [])

	if (auth) {
		adminblock = (
			<div>
				<p>
					<a className="btn btn-primary" data-bs-toggle="collapse" href="#collapse-addnewpost" role="button" aria-expanded="false" aria-controls="collapse-addnewpost">
						Добавить новость
					</a>
				</p>
				<form onSubmit={submit} className="my-2 card p-2 collapse" id="collapse-addnewpost">
					<div className="input-group mb-2">
						<span id="text-addnewpost" className="input-group-text col-2">Заголовок</span>
						<input value={title} type="text" className="form-control" placeholder="Заголовок" onChange={e => setTitle(e.target.value)} aria-label="Username" aria-describedby="text-addnewpost"></input>
					</div>
					<div className="input-group">
						<span className="input-group-text col-2">Содержимое</span>
						<textarea value={content} type="text" className="form-control" placeholder="Содержимое" onChange={e => setContent(e.target.value)} aria-label="With textarea"></textarea>
					</div>
					<div className="input-group">
						<span className="input-group-text col-2">Тип новости</span>
						<select className="custom-select" onChange={e => setIdtype(e.target.value)}>
							<option value="0">Главная новость</option>
							<option value="1">Блог</option>
							<option value="2">Другие новости</option>
						</select>
					</div>
					<button className="mt-2 col-2 btn btn-success" type="submit">Отправить</button>
				</form>
			</div>
		)
	}

	return (

		<div className="bloglist">
			<div className="container">
				<h1>Блог разработчика</h1>

				{adminblock}

				<div>
					<SelectBlog
						value={selectedSort}
						onChange={sortPosts}
						defaultValue="Сортировка"
						option={[
							{ value: 'title', name: 'По заголовку' },
							{ value: 'content', name: 'По содержимому' }
						]}
					/>
				</div>
				{loading
					? <div className="d-flex w-100 justify-content-center align-items-center loading-block"><div className="spinner-grow" role="status"><span className="sr-only">Загрузка...</span></div></div>
					: <BlogList posts={posts} />
				}
			</div>
		</div>

	);
};

export default Blog;