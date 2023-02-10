import React, {useState} from "react";
import style from './Header.module.scss';
import {Navbar} from "../c2-main/m6-common/navigation/Navbar";
import {Button} from "antd";
import {MenuOutlined} from "@ant-design/icons";

type HeaderPropsType = {
    headerShow: boolean
}

export const Header = ({headerShow}: HeaderPropsType) => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const finalClassName = headerShow ? `${style.header} ${style.show}` : `${style.header}`;
    const onClickHandler = () => {
        setShowMobileMenu(!showMobileMenu);
    }

    window.addEventListener('resize', () => {
        if (window.innerWidth > 480) setShowMobileMenu(false);
    })

    return (
        <header className={finalClassName}>
            <div className={'container'}>
                <Navbar headerShow={headerShow} showMobileMenu={showMobileMenu}/>
                <Button className={style.menuBtn} onClick={onClickHandler}>
                    <MenuOutlined className={style.menuIcon}/>
                </Button>
            </div>
        </header>
    )
}