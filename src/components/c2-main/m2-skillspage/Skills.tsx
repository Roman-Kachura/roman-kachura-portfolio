import React from "react";
import style from './Skills.module.scss';
import {SkillItem} from "./SkillItem";
import {MainTitle} from "../m6-common/mainTitle/MainTitle";
import {Fade} from "react-awesome-reveal";

import jsAndTsImg from './icons/JSandTS.png';
// import javaScriptImg from './icons/js.png';
import cssImg from './icons/css-3.png';
import reduxImg from './icons/redux.png';
import htmlImg from './icons/html-5.png';
import reactImg from './icons/react.png';
import muiImg from './icons/MUI.png';
import antdImg from './icons/ANTD.png';
import gitImg from './icons/git.png';
import axiosImg from './icons/AXIOS.png';
import restApiImg from './icons/restAPI.png';
import {MainSubTitle} from "../m6-common/mainSubTitle/MainSubTitle";

const skills: Array<skillType> = [
    {src: jsAndTsImg, name: 'TypeScript'},
    {src: reactImg, name: 'React'},
    {src: reduxImg, name: 'Redux'},
    // {src: javaScriptImg, name: 'JavaScript'},
    {src: htmlImg, name: 'HTML'},
    {src: cssImg, name: 'CSS'},
    {src: muiImg, name: 'Material-UI'},
    {src: antdImg, name: 'ANT-Design'},
    {src: gitImg, name: 'GIT'},
    {src: axiosImg, name: 'AXIOS'},
    {src: restApiImg, name: 'restAPI'},
]

type skillType = {
    src: string
    name: string
}


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