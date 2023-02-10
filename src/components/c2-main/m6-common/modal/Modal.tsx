import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import style from './Modal.module.scss';
import {faCheck} from "@fortawesome/free-solid-svg-icons";

type ModalPropsType = {
    isShowModal: boolean
    closeModal: () => void
}

export const Modal = ({isShowModal, closeModal}: ModalPropsType) => {
    const finalClassName = isShowModal ? `${style.showModal} ${style.modal}` : `${style.modal}`;

    return (
        <div className={finalClassName}>
            <div className={style.modalContainer}>
                <div className={style.modalIcon}>
                    <i className={style.i}><FontAwesomeIcon icon={faCheck}/></i>
                </div>
                <div className={style.modalText}>
                    <span>Thanks for your message. I try answer you soon :)</span>
                </div>
                <button onClick={closeModal} className={style.modalButton}>OK</button>
            </div>
        </div>
    )
}