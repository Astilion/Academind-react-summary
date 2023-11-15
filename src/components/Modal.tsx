import { ReactNode } from "react";
import styles from "./Modal.module.scss";

interface ModalProps {
	children: ReactNode;
    onClose: () => void
}
const Modal = ({ children, onClose }: ModalProps) => {
	return (
		<>
			<div className={styles.backdrop} onClick={onClose}/>
			<dialog open className={styles.modal}>
				{children}
			</dialog>
		</>
	);
};

export default Modal;
