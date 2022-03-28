import {Fade} from "react-awesome-reveal";
import React from "react";

// @ts-ignore
import s from './MainSubTitle.module.scss';

type MainSubTitlePropsType = {
    subTitle: string;
}

export const MainSubTitle = ({subTitle, ...props}: MainSubTitlePropsType) => {
    return (
        <Fade direction='right' duration={1500}>
            <div className={s.mainSubTitle}>
                <h4 className={''}>{subTitle}</h4>
            </div>
        </Fade>
    )
}