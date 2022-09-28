import React from 'react';
import Moment from 'react-moment';

const BlogItem = (props) => {
	if (props.post.id_type == '1') {

		return (

			<div className="blogitem media">
				<div className="media-body my-2">
					<div className="card-body p-1">
						<h5 className="card-title mb-0">
							<span className="text-secondary"><Moment format="DD.MM.YYYY HH:mm">{props.post.created_at}</Moment><br /></span>
							{props.post.title}
						</h5>
						<p className="blog-itemtext">{props.post.content}</p>
					</div>
				</div>
			</div>

		);
	}
	else {
		console.log("Новость этой категории не отображается в этом списке");
	}
};

export default BlogItem;