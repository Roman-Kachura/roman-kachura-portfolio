import React from 'react';
import style from './Works.module.scss';
import {WorksItem} from './WorksItem';
import {MainTitle} from '../m6-common/mainTitle/MainTitle';
import {Fade} from 'react-awesome-reveal';
import {MainSubTitle} from '../m6-common/mainSubTitle/MainSubTitle';
import {projects} from './projectsDB';

export const Works = () => {
    return (
        <section id="works" className={style.works}>
            <div className={style.div}/>
            <div className={'container'}>
                <MainTitle title={'My'} spanTitleText={'Projects'}/>
                <MainSubTitle subTitle={'WHAT I DO'}/>
                <Fade direction="left" duration={1500} className={style.fade}>
                    <div className={style.worksContent}>
                        {projects.map((p,i) => <WorksItem key={i} link={p.link} github={p.github} title={p.title} img={p.img}/>)}
                    </div>
                </Fade>
            </div>
        </section>
    )
}

