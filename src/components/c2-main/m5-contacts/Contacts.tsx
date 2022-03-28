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

export const Contacts = () => {
    return (
        <div id='contacts' className={style.contacts}>
            <div className='container'>
                <MainTitle title={'My'} spanTitleText={'Contacts'}/>
                <MainSubTitle subTitle={'CONTACT WITH ME'}/>
                <Fade direction='left' duration={1500}>
                    <div className={style.formWrapper}>
                        <MyForm/>
                        <div className={style.contactInfo}>
                            <p>
                                You can contact me in a way convenient for you.
                            </p>

                            <ul>
                                <li>
                                    <i><FontAwesomeIcon icon={faPhone}/></i>
                                    <a href='tel:+48732899950'>+48732899950</a>
                                </li>
                                <li>
                                    <i><FontAwesomeIcon icon={faEnvelope}/></i>
                                    <a target='_blank' href='mailto:roma.kachyra@gmail.com'>roma.kachyra@gmail.com</a>
                                </li>
                                <li>
                                    <i><FontAwesomeIcon icon={faMapMarkerAlt}/></i>
                                    <a target='_blank' href='https://clck.ru/eSR5G'>Warsaw, Poland</a>
                                </li>
                            </ul>

                            <div className={style.social}>
                                <a target='_blank' href='https://instagram.com/roman_kachura?utm_medium=copy_link'>
                                    <i><FontAwesomeIcon icon={faInstagram}/></i>
                                </a>
                                <a target='_blank' href='https://www.linkedin.com/in/roman-kachura-201b07229'>
                                    <i><FontAwesomeIcon icon={faLinkedinIn}/></i>
                                </a>
                                <a target='_blank' href='https://t.me/roman_kachura'>
                                    <i><FontAwesomeIcon icon={faTelegramPlane}/></i>
                                </a>
                                <a target='_blank' href='https://www.facebook.com/profile.php?id=100068449718499'>
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