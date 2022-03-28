import React, {useEffect, useState} from 'react';
import style from './App.module.scss';
import {Main} from "../c2-main/Main";
import {Header} from "../c1-header/Header";
import {Footer} from "../c3-footer/Footer";
import {Modal} from "../c2-main/m6-common/modal/Modal";

function App() {
    const htmlEl = document.querySelector('html');
    // const showModal:boolean = useSelector<AppRootStateType, boolean>(state => state.app.showModal);
    const [showModal, setShowModal] = useState(true);
    const [headerShow, setHeaderShow] = useState(false);
    const sendMessage = (isShowModal: boolean) => {
        setShowModal(isShowModal);
    }
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, [headerShow]);

    const handleScroll = () => {
        if (window.scrollY > 200) {
            setHeaderShow(true)
        } else {
            setHeaderShow(false)
        }
    }

    if (showModal) {
        if (htmlEl) htmlEl.classList.add(`noScroll`);
    } else {
        if (htmlEl) htmlEl.classList.remove(`noScroll`);
    }
    const finalClassName = showModal ? `${style.app} ${style.showModal}` : `${style.app}`;

    return (
        <div className={finalClassName}>
            <Header headerShow={headerShow}/>
            <Main/>
            <Footer/>
            <Modal showModal={showModal} sendMessage={sendMessage}/>
        </div>
    );
}

export default App;
