import React from "react";
import s from './MainTitle.module.scss';
import {Fade} from "react-awesome-reveal";

type MainTitlePropsType = {
    title: string
    spanTitleText: string
    className?: string
}

export const MainTitle = ({title, spanTitleText, ...props}: MainTitlePropsType) => {
    const finalClassName = props.className ? `${props.className} ${s.mainTitle}` : `${s.mainTitle}`;
    return (
        <Fade direction='left' duration={1500}>
            <div className={finalClassName}>
                <h4 className={s.title}>{title} <span>{spanTitleText}</span></h4>
            </div>
        </Fade>
    )
}