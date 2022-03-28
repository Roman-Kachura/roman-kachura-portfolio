import React from "react";
import style from './Skills.module.scss';



type SkillItemPropsType = {
    src:string
    name:string
}

export const SkillItem = (props:SkillItemPropsType) => {
    return(
        <div className={style.skillsItem}>
            <img src={props.src} alt={props.name} title={props.name}/>

        </div>
    )
}