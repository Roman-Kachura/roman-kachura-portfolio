import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import style from './Modal.module.scss';
import {faCheck} from '@fortawesome/free-solid-svg-icons';
import {setIsShowModal} from '../../../store/slices/appReducer';
import {useAppDispatch, useAppSelector} from '../../../store/store';

export const Modal = () => {
  const dispatch = useAppDispatch();
  const isShowModal = useAppSelector(state => state.app.isShowModal);
  const finalClassName = isShowModal ? `${style.showModal} ${style.modal}` : `${style.modal}`;

  const closeModal = () => dispatch(setIsShowModal({isShowModal: false}));

  return (
    <div className={finalClassName}>
      <div className={style.modalContainer}>
        <div className={style.modalIcon}>
          <i className={style.i}><FontAwesomeIcon icon={faCheck}/></i>
        </div>
        <div className={style.modalText}>
          <span>Thanks for your message. I will try to answer you soon :)</span>
        </div>
        <button onClick={closeModal} className={style.modalButton}>OK</button>
      </div>
    </div>
  )
}