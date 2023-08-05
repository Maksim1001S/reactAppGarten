import React from 'react'
import s from "./NotFoundPage.module.css"
import notFound_image from "../../assets/notFound_image.png"

const NotFoundPage = () => {
  return (
    <section className={s.section}>
      <img src={notFound_image} alt="not found page" />
    </section>
  )
}

export default NotFoundPage