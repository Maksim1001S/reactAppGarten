import React from 'react'
import s from './Preloader.module.css'
import header_logo from "../../assets/header_logo.png"

const Preloader = () => {
  return (
    <div className={s.preloader}>
        
        <div className={s.lds_ring}>
            <div className={s.lds_ring_cont}></div><div></div><div></div><div></div>
        </div>
            <div className={s.lds_heart}>
                <img className={s.img} src={header_logo} alt="logo" />
            </div>
    </div>
  )
}

export default Preloader