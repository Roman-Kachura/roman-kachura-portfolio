import React from "react";
import style from './Skills.module.scss';
import {SkillItem} from "./SkillItem";
import {MainTitle} from "../m6-common/mainTitle/MainTitle";
import {Fade} from "react-awesome-reveal";
import {MainSubTitle} from "../m6-common/mainSubTitle/MainSubTitle";
import {skills} from './images';

export const Skills = () => {
    return (
        <section id='skills' className={style.skills}>
            <div className={'container'}>
                <MainTitle title={'My'} spanTitleText={'Skills'}/>
                <MainSubTitle subTitle={'WHAT I USE'}/>
                <Fade className={style.skillsFade} direction='left' duration={1500}>
                    <div className={style.skillsContent}>
                        {
                            skills.map((s, i) => <SkillItem key={`SkillItem ${i}`} src={s.src} name={s.name}/>)
                        }
                    </div>
                </Fade>
            </div>
        </section>
    )
}