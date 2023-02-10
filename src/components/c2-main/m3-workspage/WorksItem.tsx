import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React, {MouseEvent, useState} from 'react';
import style from './Works.module.scss';
import {faEye} from '@fortawesome/free-solid-svg-icons';
import {checkTitle} from '../../../utils/checkTitle';
import {faGithub} from '@fortawesome/free-brands-svg-icons';

type worksItemPropsType = {
    link: string
    github: string
    title: string
    img: string
}

export const WorksItem = ({link, title, img, github, ...props}: worksItemPropsType) => {
    return (
        <div className={style.worksItem}>
            <div className={style.image} style={{backgroundImage: `url(${img})`}}>
                <div className={style.imageWrapper}/>
                <h4 className={style.itemTitle}>{checkTitle(title)}</h4>
                <div className={style.linkBlock}>
                    <a href={link} target="_blank" className={style.link}>
                        <i><FontAwesomeIcon icon={faEye}/></i>
                    </a>
                    <a href={github} target="_blank" className={style.link}>
                        <i><FontAwesomeIcon icon={faGithub}/></i>
                    </a>
                </div>
            </div>
        </div>
    )
}