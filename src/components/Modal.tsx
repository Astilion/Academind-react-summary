import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Modal.module.scss";

interface ModalProps {
	children: ReactNode;
}
const Modal = ({ children }: ModalProps) => {
	const navigate = useNavigate();
	const closeHandler = () => {
		navigate("/");
	};
	return (
		<>
			<div className={styles.backdrop} onClick={closeHandler} />
			<dialog open className={styles.modal}>
				{children}
			</dialog>
		</>
	);
};

export default Modal;
