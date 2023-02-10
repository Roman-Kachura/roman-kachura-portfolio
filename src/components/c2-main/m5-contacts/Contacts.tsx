import React from "react";
import style from './Contacts.module.scss';
import {MainTitle} from '../m6-common/mainTitle/MainTitle';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faFacebookF,
    faInstagram,
    faLinkedinIn,
    faTelegramPlane
} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope, faMapMarkerAlt, faPhone} from "@fortawesome/free-solid-svg-icons";
import {Fade} from "react-awesome-reveal";
import {MainSubTitle} from "../m6-common/mainSubTitle/MainSubTitle";
import MyForm from "./MyForm";
import {useDispatch} from "react-redux";
import {setIsShowModalTC} from "../../c0-app/appReducer";

export const Contacts = () => {
    const dispatch = useDispatch();

    const sendMessage = (name: string, email: string, message: string) => {
        // @ts-ignore
        dispatch(setIsShowModalTC(name, email, message));
    }

    return (
        <div id='contacts' className={style.contacts}>
            <div className={style.contactsWrapper}/>
            <div className={`container ${style.contactsContainer}`}>
                <MainTitle className={style.mainTitle} title={'My'} spanTitleText={'Contacts'}/>
                <MainSubTitle  className={style.mainSubTitle} subTitle={'CONTACT WITH ME'}/>
                <Fade direction='left' duration={1500}>
                    <div className={style.formWrapper}>
                        <MyForm
                            sendMessage={sendMessage}
                        />
                        <div className={style.contactInfo}>
                            <p>
                                You can contact me in a way convenient for you or use the form.
                            </p>

                            <ul>
                                <li>
                                    <i><FontAwesomeIcon icon={faPhone}/></i>
                                    <a href='tel:+48732899950'>+48732899950</a>
                                </li>
                                <li>
                                    <i><FontAwesomeIcon icon={faEnvelope}/></i>
                                    <a href='mailto:roma.kachyra@gmail.com'>roma.kachyra@gmail.com</a>
                                </li>
                                <li>
                                    <i><FontAwesomeIcon icon={faMapMarkerAlt}/></i>
                                    <a href='https://clck.ru/eSR5G'>Warsaw, Poland</a>
                                </li>
                            </ul>

                            <div className={style.social}>
                                <a href='https://instagram.com/roman_kachura?utm_medium=copy_link'>
                                    <i><FontAwesomeIcon icon={faInstagram}/></i>
                                </a>
                                <a href='https://www.linkedin.com/in/roman-kachura-201b07229'>
                                    <i><FontAwesomeIcon icon={faLinkedinIn}/></i>
                                </a>
                                <a href='https://t.me/roman_kachura'>
                                    <i><FontAwesomeIcon icon={faTelegramPlane}/></i>
                                </a>
                                <a href='https://www.facebook.com/profile.php?id=100068449718499'>
                                    <i><FontAwesomeIcon icon={faFacebookF}/></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    )
}