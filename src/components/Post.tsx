import styles from "./Post.module.scss";
interface PostProps {
	author: string;
	body: string;
}
const Post = (props: PostProps) => {
	return (
		<li className={styles.post}>
			<p className={styles.author}>{props.author}</p>
			<p className={styles.body}>{props.body}</p>
		</li>
	);
};

export default Post;
