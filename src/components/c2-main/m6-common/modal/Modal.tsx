import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import style from './Modal.module.scss';
import {faCheck} from "@fortawesome/free-solid-svg-icons";

type ModalPropsType = {
    showModal: boolean
    sendMessage: (isShowModal: boolean) => void
}

export const Modal = ({showModal, sendMessage}: ModalPropsType) => {
    const finalClassName = showModal ? `${style.showModal} ${style.modal}` : `${style.modal}`;
    const onClickHandler = () => {
        sendMessage(false);
    }
    return (
        <div className={finalClassName}>
            <div className={style.modalContainer}>
                <div className={style.modalIcon}>
                    <i className={style.i}><FontAwesomeIcon icon={faCheck}/></i>
                </div>
                <div className={style.modalText}>
                    <span>Thanks for your message. I try answer you soon :)</span>
                </div>
                <button onClick={onClickHandler} className={style.modalButton}>OK</button>
            </div>
        </div>
    )
}