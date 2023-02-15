import React from 'react';
import style from './About.module.scss';
import {MainTitle} from '../m6-common/mainTitle/MainTitle';
import {MainSubTitle} from '../m6-common/mainSubTitle/MainSubTitle';
import photo from './files/photo_2021-12-09_18-59-26.jpg';
import {Link} from 'react-scroll';
import {getFile} from '../../../utils/downloadFile';
import {Fade} from 'react-awesome-reveal';

export const About = () => {
    return (
        <section id="about" className={style.about}>
            <div className={'container'}>
                <MainTitle title={'About'} spanTitleText={'Me'}/>
                <MainSubTitle subTitle={'WHO AM I'}/>
                <Fade direction="right" duration={1500}>
                    <div className={style.aboutContent}>
                        <div className={style.contentLeftColumn}>
                            <h4 className={style.aboutTitle}>Full-stack developer.</h4>
                            <div className={style.aboutText}>
                                <p>
                                    Hello, my name is <strong>Roman</strong>, I'm a front-end developer using React,
                                    TypeScript / JavaScript, NodeJS,
                                    Redux and etc. My main direction is Web Application. I want to find a
                                    company and
                                    a team in which I can grow in this direction. You can also see my CV.
                                </p>
                            </div>
                            <div className={style.aboutButtonBlock}>
                                <button onClick={() => getFile()} className={style.aboutButton}>DOWNLOAD CV</button>
                                <Link
                                    className={style.aboutButton}
                                    activeClass={style.aboutButton}
                                    to="contacts"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    offset={-60}
                                >
                                    HIRE ME
                                </Link>
                            </div>
                        </div>
                        <div className={style.contentRightColumn}>
                            <div className={style.aboutImageBlock}>
                                <img src={photo} className={style.aboutImage} title="Roman Kachura"
                                     alt="Roman Kachura"/>
                            </div>
                        </div>
                    </div>
                </Fade>
            </div>
        </section>
    )
}