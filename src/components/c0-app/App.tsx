import React, {useEffect, useState} from 'react';
import style from './App.module.scss';
import {Main} from '../c2-main/Main';
import {Header} from '../c1-header/Header';
import {Footer} from '../c3-footer/Footer';
import {Modal} from '../c2-main/m6-common/modal/Modal';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../store/store';
import {closeModalTC, StatusType} from './appReducer';
import {Spin} from 'antd';
import {LoadingOutlined} from '@ant-design/icons';

function App() {
    const dispatch = useDispatch();
    const status = useSelector<AppRootStateType, StatusType>(state => state.app.status);
    const isShowModal = useSelector<AppRootStateType, boolean>(state => state.app.isShowModal);
    const [headerShow, setHeaderShow] = useState(false);

    const closeModal = () => {
        // @ts-ignore
        dispatch(closeModalTC());
    }

    const handleScroll = () => {
        if (window.scrollY > 200) {
            setHeaderShow(true)
        } else {
            setHeaderShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    }, [headerShow]);

    useEffect(() => {
        const htmlEl = document.querySelector('html');
        if (isShowModal || status === 'loading') {
            if (htmlEl) htmlEl.classList.add(`noScroll`);
        } else {
            if (htmlEl) htmlEl.classList.remove(`noScroll`);
        }
    }, [isShowModal, status]);


    const finalClassName = isShowModal ? `${style.app} ${style.showModal}` : `${style.app}`;

    return (
        <div className={finalClassName}>
            {status === 'loading'
                ? <div className={style.spinBlock}>
                    <Spin>
                        <LoadingOutlined className={style.loader}/>
                    </Spin>
                </div>
                : null
            }
            <Header headerShow={headerShow}/>
            <Main/>
            <Footer/>
            <Modal isShowModal={isShowModal} closeModal={closeModal}/>
        </div>
    );
}

export default App;
