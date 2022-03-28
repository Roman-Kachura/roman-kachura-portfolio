import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React, {MouseEvent, useState} from "react";
import style from './Works.module.scss';
import {faLink, faSearch} from "@fortawesome/free-solid-svg-icons";
import {checkTitle} from "../../../utils/checkTitle";

type worksItemPropsType = {
    className?: string
    link: string
    title: string
}

export const WorksItem = ({link, title, ...props}: worksItemPropsType) => {
    const [showCopyText,setShowCopyText] = useState(false);
    const copyLink = (e:MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        window.navigator.clipboard.writeText(e.currentTarget.href);
        copyTextShow();
    }

    const copyTextShow = () => {
        setShowCopyText(true);

        if(!showCopyText){
            setTimeout(()=>{
                setShowCopyText(false);
            },3000);
        }

    }
    return (
        <div className={style.worksItem}>
            <div className={props.className ? `${style.image} ${props.className}` : `${style.image}`}>
                <div className={style.imageWrapper}/>
                <h4 className={style.itemTitle}>{checkTitle(title)}</h4>
                <div className={style.linkBlock}>
                    <a href={link} target='_blank' className={style.link}>
                        <i><FontAwesomeIcon icon={faSearch}/></i>
                    </a>
                    <a href={link} onClick={(e) => copyLink(e)} className={style.link}>
                        <i><FontAwesomeIcon icon={faLink}/></i>
                    </a>
                    <div className={!showCopyText ? `${style.copyText} ${style.notShow}` : `${style.copyText} ${style.show}`}>Ссылка скопирована в буфер обмена!</div>
                </div>
            </div>
        </div>
    )
}