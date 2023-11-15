import styles from "./PostsList.module.scss";
import NewPost from "./NewPost";
import Post from "./Post";
import Modal from "./Modal";
import { useState } from "react";

interface PostListProps {
	isPosting: boolean;
	onStopPosting: () => void;
}
const PostsList = ({ isPosting, onStopPosting }: PostListProps) => {
	const [posts, setPosts] = useState<{ body: string; author: string }[]>([]);

	const addPostHandler = (postData: { body: string; author: string }) => {
		setPosts(existingPosts => [postData, ...existingPosts]);
	};
	return (
		<>
			{isPosting && (
				<Modal onClose={onStopPosting}>
					<NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
				</Modal>
			)}
			{posts.lenght > 0 && (
				<ul className={styles.posts}>
					{posts.map(post => (
						<Post key={post.body} author={post.author} body={post.body} />
					))}
				</ul>
			)}
			{posts.length === 0 && (
				<div style={{ textAlign: "center", color: "white" }}>
					<h2>There are no posts yet.</h2>
					<p>Start adding some</p>
				</div>
			)}
		</>
	);
};

export default PostsList;
