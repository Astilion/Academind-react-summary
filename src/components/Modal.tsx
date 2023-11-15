import { ReactNode } from "react";
import styles from "./Modal.module.scss";

interface ModalProps {
	children: ReactNode;
}
const Modal = ({ children }: ModalProps) => {
	return (
		<>
			<div className={styles.backdrop}></div>
			<dialog open className={styles.modal}>
				{children}
			</dialog>
		</>
	);
};

export default Modal;
