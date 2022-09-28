import React from 'react';
import BlogItem from "./BlogItem";

const BlogList = ({ posts }) => {
	return (

		<div className="bloglist">
			{posts.map((post) =>
				<BlogItem post={post} key={post.id} />
			)}
		</div>

	);
};

export default BlogList;