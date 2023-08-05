import React from 'react'
import links from './links.json'
import { NavLink } from 'react-router-dom'
import header_logo from "../../assets/header_logo.png"
import s from "./Navbar.module.css"
import CartIcon from "../../icons/CartIcon"

const Navbar = () => {
  return (
    <header className={s.header}>

        <a className={s.logo_container} href="/">
            <img className={s.img} src={header_logo} alt="logo" />
        </a>
        <NavLink to="/categories/all" className={s.btn_catalog}>Catalog</NavLink>
        <ul className={s.navlinks}>
            {
                links.map(({title, link}, idx) => <li key={idx}><NavLink to={link}>{title}</NavLink></li>)
            }
            <li><a href="contact">Contact</a></li>
        </ul>
        <NavLink className={s.cart} to="/cart"><CartIcon /></NavLink>

    </header>
  )
}

export default Navbar