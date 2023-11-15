import styles from "./NewPost.module.scss";

interface NewPostProps {
	onBodyChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
	onAuthorChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	onCancel: () => void;
}
function NewPost({onBodyChange, onAuthorChange, onCancel}: NewPostProps) {
	return (
		<form className={styles.form}>
			<p>
				<label htmlFor='body'>Text</label>
				<textarea id='body' required rows={3} onChange={onBodyChange} />
			</p>

			<p>
				<label htmlFor='name'>Your name</label>
				<input type='text' id='name' required onChange={onAuthorChange} />
			</p>
			<p className={styles.actions}>
				<button type="button" onClick={onCancel}>Cancel</button>
				<button>Submit</button>
			</p>
		</form>
	);
}

export default NewPost;
