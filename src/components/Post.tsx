import styles from "./Post.module.scss";
import { Link } from "react-router-dom";
interface PostProps {
	author: string;
	body: string;
	id: string;
}
const Post = ({ id, author, body }: PostProps) => {
	return (
		<li className={styles.post}>
			<Link to={id}>
				<p className={styles.author}>{author}</p>
				<p className={styles.text}>{body}</p>
			</Link>
		</li>
	);
};

export default Post;
