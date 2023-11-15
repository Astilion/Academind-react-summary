import styles from "./NewPost.module.scss";
import { useState } from "react";
interface NewPostProps {
	onCancel: () => void;
	onAddPost: (postData: { body: string; author: string}) => void
}
function NewPost({ onCancel, onAddPost }: NewPostProps) {
	const [enteredBody, setEnteredBody] = useState<string>("");
	const [enteredAuthor, setEnteredAuthor] = useState<string>("");

	const changeBodyHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		setEnteredBody(event.target.value);
	};
	const changeAuthorHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEnteredAuthor(event.target.value);
	};
	const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const postData = {
			body: enteredBody,
			author: enteredAuthor,
		};
		onAddPost(postData)
		onCancel();
	};
	return (
		<form className={styles.form} onSubmit={submitHandler}>
			<p>
				<label htmlFor='body'>Text</label>
				<textarea id='body' required rows={3} onChange={changeBodyHandler} />
			</p>

			<p>
				<label htmlFor='name'>Your name</label>
				<input type='text' id='name' required onChange={changeAuthorHandler} />
			</p>
			<p className={styles.actions}>
				<button type='button' onClick={onCancel}>
					Cancel
				</button>
				<button>Submit</button>
			</p>
		</form>
	);
}

export default NewPost;
