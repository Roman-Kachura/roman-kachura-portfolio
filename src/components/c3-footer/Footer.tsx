import React from "react";
import style from './Footer.module.scss';

export const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={style.copyright}>
                <small>Roman Kachura &copy; 2021 All Right Reserved</small>
            </div>
        </footer>
    )
}