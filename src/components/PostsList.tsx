import styles from "./PostsList.module.scss";
import NewPost from "./NewPost";
import Post from "./Post";
import Modal from "./Modal";
import { useState, useEffect } from "react";

interface PostListProps {
	isPosting: boolean;
	onStopPosting: () => void;
}
const PostsList = ({ isPosting, onStopPosting }: PostListProps) => {
	const [posts, setPosts] = useState<{ body: string; author: string }[]>([]);
	const [isFetching, setIsFetching] = useState(false);
	useEffect(() => {
		async function fetchPosts() {
			setIsFetching(true);
			const response = await fetch("http://localhost:8080/posts");
			const resData = await response.json();
			setPosts(resData.posts);
			setIsFetching(false);
		}
		fetchPosts();
	}, []);

	const addPostHandler = (postData: { body: string; author: string }) => {
		fetch("http://localhost:8080/posts", {
			method: "POST",
			body: JSON.stringify(postData),
			headers: {
				"Content-Type": "application/json",
			},
		});
		setPosts(existingPosts => [postData, ...existingPosts]);
	};
	return (
		<>
			{isPosting && (
				<Modal onClose={onStopPosting}>
					<NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
				</Modal>
			)}
			{!isFetching && posts.length > 0 && (
				<ul className={styles.posts}>
					{posts.map(post => (
						<Post key={post.body} author={post.author} body={post.body} />
					))}
				</ul>
			)}
			{!isFetching && posts.length === 0 && (
				<div style={{ textAlign: "center", color: "white" }}>
					<h2>There are no posts yet.</h2>
					<p>Start adding some</p>
				</div>
			)}
			{isFetching && (
				<div style={{ textAlign: "center", color: "white" }}>
					<p>Loading posts...</p>
				</div>
			)}
		</>
	);
};

export default PostsList;
