import styles from "./PostsList.module.scss";
import NewPost from "./NewPost";
import { useState } from "react";
import Post from "./Post";
import Modal from "./Modal";
const PostsList = () => {
	const [enteredBody, setEnteredBody] = useState<string>("");
	const [enteredAuthor, setEnteredAuthor] = useState<string>("");

	const changeBodyHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		setEnteredBody(event.target.value);
	};
	const changeAuthorHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEnteredAuthor(event.target.value);
	};
	return (
		<>
			<Modal>
				<NewPost
					onBodyChange={changeBodyHandler}
					onAuthorChange={changeAuthorHandler}
				/>
			</Modal>
			<ul className={styles.posts}>
				<Post author={enteredAuthor} body={enteredBody} />
				<Post author='Manuel' body='React.ts is still awesome' />
			</ul>
		</>
	);
};

export default PostsList;
