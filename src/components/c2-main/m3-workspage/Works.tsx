import React from "react";
import style from './Works.module.scss';
import {WorksItem} from "./WorksItem";
import {MainTitle} from "../m6-common/mainTitle/MainTitle";
import {Fade} from "react-awesome-reveal";
import {MainSubTitle} from "../m6-common/mainSubTitle/MainSubTitle";

export const Works = () => {
    return (
        <section id='works' className={style.works}>
            <div className={style.div}/>
            <div className={'container'}>
                <MainTitle title={'My'} spanTitleText={'Projects'}/>
                <MainSubTitle subTitle={'WHAT I DO'}/>
                <Fade direction='left' duration={1500} className={style.fade}>
                    <div className={style.worksContent}>

                        <WorksItem
                            className={style.socialNetwork}
                            link={'https://roman-kachura.github.io/social-network'}
                            title={'social-network'}
                        />
                        <WorksItem
                            className={style.todolist}
                            link={'https://roman-kachura.github.io/TodoList'}
                            title={'todolist'}
                        />
                        <WorksItem
                            className={style.cards}
                            link={'https://roman-kachura.github.io/card-training'}
                            title={'card-training'}
                        />
                    </div>
                </Fade>

            </div>
        </section>
    )
}

