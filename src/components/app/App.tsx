import React, {useEffect, useState} from 'react';
import style from './App.module.scss';
import {Header} from '../header/Header';
import {Footer} from '../footer/Footer';
import {Modal} from '../common/modal/Modal';
import {LoadingOutlined} from '@ant-design/icons';
import {Home} from '../homepage/Home';
import {About} from '../about/About';
import {Skills} from '../skillspage/Skills';
import {Works} from '../workspage/Works';
import {Contacts} from '../contacts/Contacts';
import {useAppSelector} from '../../store/store';

function App() {
  const status = useAppSelector(state => state.app.status);
  const isShowModal = useAppSelector(state => state.app.isShowModal);
  const [headerShow, setHeaderShow] = useState(false);
  const finalClassName = isShowModal ? `${style.app} ${style.showModal}` : `${style.app}`;



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

  return (
    <div className={finalClassName}>
      {status === 'loading'
        ? <div className={style.spinBlock}>
          <LoadingOutlined rev={null} className={style.loader}/>
        </div>
        : null
      }
      <Header headerShow={headerShow}/>
      <Home/>
      <About/>
      <Skills/>
      <Works/>
      <Contacts/>
      <Footer/>
      <Modal/>
    </div>
  );
}

export default App;
