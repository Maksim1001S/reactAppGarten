import React, { useState } from 'react'
import links from './links.json'
import { NavLink } from 'react-router-dom'
import header_logo from "../../assets/header_logo.png"
import s from "./Navbar.module.css"
import CartIcon from "../../icons/CartIcon"
import { useDispatch, useSelector } from 'react-redux'
import { counterCart } from '../../store/slice/cartSlice'

const Navbar = () => {
  const cart = useSelector(cart => cart.cart.cart)
  const [toggler, setToggler] = useState(false)
  const sumCart = cart.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.count;
  }, 0);

  return (
    <header className={s.header}>

        <div className={s.logoAndBtn_contanier}>
          <a className={s.logo_container} href="/">
              <img className={s.img} src={header_logo} alt="logo" />
          </a>
          <NavLink to="/categories/all" className={s.btn_catalog}>Catalog</NavLink>
        </div>
        <ul className={`${s.navlinks} ${toggler ? s.active : ""}`}>
            {
                links.map(({title, link}, idx) => <li key={idx} ><NavLink to={link} className={s.navlink}>{title}</NavLink></li>)
            }
            <li><a className={s.navlink} href="#contact">Contact</a></li>
        </ul>
        <div className={s.mobile_menu_popup}>
          <NavLink className={s.cart} to="/cart"><CartIcon /><span>{sumCart}</span></NavLink>
          <div onClick={() => toggler ? setToggler(false) : setToggler(true)} className={`${s.navbar_toggler} ${toggler ? s.active : ""}`}>
              <div className={s.navbar_toggler_line}></div>
              <div className={s.navbar_toggler_line}></div>
              <div className={s.navbar_toggler_line}></div>
          </div>
        </div>

    </header>
  )
}

export default Navbar