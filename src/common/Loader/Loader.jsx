import loader from '../../assets/icon/loader.svg'
import s from './Loader.module.css'
import React from "react";


export default function Loader() {
    return (
        <div className={s.loader}>
            <img src={loader}/>
        </div>
    )
}

