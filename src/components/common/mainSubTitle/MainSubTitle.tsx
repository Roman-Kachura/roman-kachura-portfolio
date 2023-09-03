import {Fade} from "react-awesome-reveal";
import React from "react";

// @ts-ignore
import s from './MainSubTitle.module.scss';

type MainSubTitlePropsType = {
    subTitle: string;
    className?:string
}

export const MainSubTitle = ({subTitle,...props}: MainSubTitlePropsType) => {
    const finalClassName = props.className ? `${props.className} ${s.mainSubTitle}` : `${s.mainSubTitle}`;
    return (
        <Fade direction='right' duration={1500}>
            <div className={finalClassName}>
                <h4>{subTitle}</h4>
            </div>
        </Fade>
    )
}