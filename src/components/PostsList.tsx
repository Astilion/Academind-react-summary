import styles from './PostsList.module.scss'
import Post from './Post'
const PostsList = () => {
    return (
        <ul className={styles.posts}>
			<Post author='Maximilian' body='React.ts is awesome' />
			<Post author='Manuel' body='React.ts is still awesome' />
        </ul>
    )
}

export default PostsList;