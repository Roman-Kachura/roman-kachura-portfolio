import React from 'react';
import style from './Home.module.scss';
import ReactTypingEffect from 'new-react-typing-effect';
import {useGetHeaderImageQuery} from '../../store/api/appService';

export const Home = () => {
  const {data:headerImage} = useGetHeaderImageQuery();

  return (
    <section
      id="home"
      className={style.home}
      style={{background: `url(${headerImage?.url}) top no-repeat`}}
    >
      <div className={`container ${style.container}`}>
        <div className={style.homeWrapper}>
          <h1 className={style.homeTitle}>
            <div className={style.divWrapper}>Hi!</div>
            <div className={style.divWrapper}> I'm - <span className={style.homeTitleName}>Roman Kachura</span>
            </div>
          </h1>
          <div className={style.homeTitleProfession}>
            <ReactTypingEffect
              messages={['Front-end developer.']}
              options={{
                cursor: {
                  blinkPeriod: 1000
                },
                text: {charactersPerSecond: 5, emptyTextDelayMS: 3000, fullTextDelayMS: 5000}
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}